'use client';

import { useState, useEffect, useRef } from 'react';
import googleFontsData from '@/data/googleVariableFonts.json';

// Interface pour les données brutes du JSON Google Fonts
interface GoogleFontAxis {
    tag: string;
    start: number;
    end: number;
}

// Interface pour une police dans le JSON Google Fonts
interface GoogleFontItem {
    family: string;
    variants: string[];
    axes?: GoogleFontAxis[];
}

// Interface pour définir les axes variables d'une police
interface VariableAxes {
    [key: string]: [number, number]; // [min, max]
}

// Interface pour une police variable
interface VariableFont {
    name: string;
    hasItalic: boolean;
    axes: VariableAxes;
}

// Fonction pour transformer les données JSON en VariableFont[]
function parseGoogleFonts(items: GoogleFontItem[]): VariableFont[] {
    return items.map(
        item => {
            const axes: VariableAxes = {};
            let weights: number[] = [400, 400]; // Valeur par défaut
            const hasItalic = item.variants.includes('italic');

            item.axes!.forEach(
                axis => {
                    // Tous les autres axes (wdth, slnt, CASL, MONO, GRAD, etc.)
                    axes[axis.tag] = [axis.start, axis.end];
                }
            );

            return {
                name: item.family,
                hasItalic,
                axes,
            };
        }
    );
}

// Construire la liste des polices variables à partir du JSON
const variableFonts: VariableFont[] = parseGoogleFonts(
    googleFontsData.items as GoogleFontItem[]
);

interface MorphingState {
    previousIndex: number;
    currentIndex: number;
    morph: number;
    cooldown: number;
    axesCooldown: number;
    isInCooldown: boolean;
    previousAxes: {[key: string]: number};
    currentAxes: {[key: string]: number};
}


const randomizedFonts = [...variableFonts].sort(() => Math.random() - 0.5);

export default function AnimatedTitleVariableMorphing() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [morphState, setMorphState] = useState<MorphingState>({
        previousIndex: 0,
        currentIndex: 1,
        morph: 0,
        cooldown: 0,
        axesCooldown: 0,
        isInCooldown: true,
        previousAxes: {},
        currentAxes: {}
    });

    const previousFont = randomizedFonts[morphState.previousIndex];
    const currentFont = randomizedFonts[morphState.currentIndex];

    const text1Ref = useRef<HTMLSpanElement>(null);
    const text2Ref = useRef<HTMLSpanElement>(null);

    const animationFrameRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(Date.now());

    const pause = useRef<boolean>(false);
    const [pauseState, setPauseState] = useState(false);
    

    // Configuration du morphing
    const morphTime = 2; // Durée du morphing en secondes
    const cooldownTime = 5.75; // Pause entre les transitions
    const axesCooldownTime = 1; // Durée de la transition des axes variables

    // Fonction pour générer des valeurs aléatoires pour les axes variables
    // Alterne entre la première moitié et la deuxième moitié du range
    const bigAxesRef = useRef(false);
    const generateRandomAxes = (font: VariableFont): {[key: string]: number} => {
        const axes: {[key: string]: number} = {};
        let useBigHalf = bigAxesRef.current;
        bigAxesRef.current = !bigAxesRef.current;
        
        // Générer une valeur aléatoire pour chaque axe disponible
        Object.entries(font.axes).forEach(
            ([axis, range]) => {
                const [min, max] = range;
                const half = (max - min) / 2;
                if (useBigHalf) {
                    axes[axis] = Math.round(min + half + Math.random() * half);
                } else {
                    axes[axis] = Math.round(min + Math.random() * half);
                }
                useBigHalf = !useBigHalf; // Alterner pour le prochain axe
            }
        );

        // console.log("Generated axes for", font.name, ":", axes);
        
        return axes;
    };

    // Fonction pour créer la chaîne font-variation-settings
    const createFontVariationSettings = (axes: {[key: string]: number}): string => {
        return Object.entries(axes).map(
            ([axis, value]) => `"${axis}" ${value}`
        ).join(', ');
    };

    // Fonction pour interpoler entre deux sets d'axes
    const interpolateAxes = (
        axes1: {[key: string]: number},
        axes2: {[key: string]: number},
        fraction: number
    ): {[key: string]: number} => {
        const result: {[key: string]: number} = {};
        
        // Combiner toutes les clés des deux axes
        const allKeys = new Set([...Object.keys(axes1), ...Object.keys(axes2)]);
        
        allKeys.forEach(
            key => {
                const value1 = axes1[key] || 0;
                const value2 = axes2[key] || 0;
                result[key] = Math.round(value1 + (value2 - value1) * fraction);
            }
        );
        
        return result;
    };

    
    const applyMorphEffect = (fraction: number, state: MorphingState) => {
        if (!text1Ref.current || !text2Ref.current) return;

        // Interpoler les axes variables
        const interpolatedAxes1 = interpolateAxes(state.currentAxes, state.previousAxes, 1 - fraction);
        const interpolatedAxes2 = interpolateAxes(state.previousAxes, state.currentAxes, fraction);

        // Appliquer le blur et l'opacité au texte qui apparaît (text2)
        const blurValue2 = Math.min(8 / fraction - 8, 100);
        const opacity2 = Math.pow(fraction, 0.4) * 100;
        
        text2Ref.current.style.filter = `blur(${blurValue2}px)`;
        text2Ref.current.style.opacity = `${opacity2}%`;
        text2Ref.current.style.fontVariationSettings = createFontVariationSettings(interpolatedAxes2);

        // Appliquer le blur et l'opacité au texte qui disparaît (text1)
        const reverseFraction = 1 - fraction;
        const blurValue1 = Math.min(8 / reverseFraction - 8, 100);
        const opacity1 = Math.pow(reverseFraction, 0.4) * 100;
        
        text1Ref.current.style.filter = `blur(${blurValue1}px)`;
        text1Ref.current.style.opacity = `${opacity1}%`;
        text1Ref.current.style.fontVariationSettings = createFontVariationSettings(interpolatedAxes1);
    };

    const applyCooldownEffect = (state: MorphingState) => {
        if (!text1Ref.current || !text2Ref.current) return;

        // Texte visible (text2)
        text2Ref.current.style.filter = '';
        text2Ref.current.style.opacity = '100%';
        text2Ref.current.style.fontVariationSettings = createFontVariationSettings(state.currentAxes);
        
        // Texte caché (text1)
        text1Ref.current.style.filter = '';
        text1Ref.current.style.opacity = '0%';
        text1Ref.current.style.fontVariationSettings = createFontVariationSettings(state.previousAxes);
    };


    // Fonction pour construire l'URL Google Fonts dynamiquement
    const buildGoogleFontUrl = (font: VariableFont): string => {
        const fontName = font.name.replace(/\s+/g, '+');

        // Récupérer les axes non-wght depuis le JSON original
        const originalItem = (googleFontsData.items as GoogleFontItem[]).find(
            item => item.family === font.name
        );
        const allAxes = originalItem?.axes || [];

        // Construire les paramètres d'axes pour l'URL
        // Format: family=Font:axis1,axis2,...@range1,range2,...
        const axisTags: string[] = [];
        const axisRanges: string[] = [];

        // Ajouter les axes dans l'ordre alphabétique (requis par Google Fonts)
        const sortedAxes = [...allAxes].sort((a, b) => {
            // Les axes en minuscules (standards) avant les majuscules (custom)
            // Mais Google Fonts attend l'ordre: ital, opsz, slnt, wdth, wght, puis CUSTOM en ordre alpha
            const isALower = a.tag[0] === a.tag[0].toLowerCase();
            const isBLower = b.tag[0] === b.tag[0].toLowerCase();
            if (isALower && !isBLower) return -1;
            if (!isALower && isBLower) return 1;
            return a.tag.localeCompare(b.tag);
        });

        if (font.hasItalic) {
            axisTags.push('ital');
        }

        for (const axis of sortedAxes) {
            axisTags.push(axis.tag);
            axisRanges.push(`${axis.start}..${axis.end}`);
        }

        // Construire la partie @ranges
        if (font.hasItalic) {
            // Avec italic: 0,range1,range2,...;1,range1,range2,...
            const rangesStr = axisRanges.join(',');
            return `https://fonts.googleapis.com/css2?family=${fontName}:${axisTags.join(',')}@0,${rangesStr};1,${rangesStr}&display=swap`;
        } else {
            const rangesStr = axisRanges.join(',');
            return `https://fonts.googleapis.com/css2?family=${fontName}:${axisTags.join(',')}@${rangesStr}&display=swap`;
        }
    };

    // Chargement dynamique des polices variables
    useEffect(
        () => {
            const loadFonts = async () => {
                const first3Fonts = randomizedFonts.slice(0, 3);
                const othersFonts = randomizedFonts.slice(3);
                const fontPromises = first3Fonts.map(
                    font => {
                        return new Promise<void>(
                            (resolve) => {
                                const link = document.createElement('link');
                                link.href = buildGoogleFontUrl(font);
                                link.rel = 'stylesheet';
                                link.onload = () => resolve();
                                link.onerror = () => resolve();
                                document.head.appendChild(link);
                            }
                        );
                    }
                );

                await Promise.all(fontPromises);

                const otherFontPromises = othersFonts.map(
                    font => {
                        return new Promise<void>(
                            (resolve) => {
                                const link = document.createElement('link');
                                link.href = buildGoogleFontUrl(font);
                                link.rel = 'stylesheet';
                                link.onload = () => resolve();
                                link.onerror = () => resolve();
                                document.head.appendChild(link);
                            }
                        );
                    }
                );

                Promise.all(otherFontPromises);

                
                // Initialiser les axes pour les premières polices
                const initialpreviousAxes = generateRandomAxes(randomizedFonts[randomizedFonts.length - 1]);
                const initialcurrentAxes = generateRandomAxes(randomizedFonts[0]);

                setMorphState(
                    prev => ({
                        ...prev,
                        previousAxes: initialpreviousAxes,
                        currentAxes: initialcurrentAxes
                    }
                ));
                
                setIsLoaded(true);
            };

            loadFonts();

            return () => {
                // Nettoyage des liens Google Fonts
                document.head.querySelectorAll('link[rel="stylesheet"]').forEach(
                    (link) => {
                        const linkElement = link as HTMLLinkElement;
                        if (linkElement.href && linkElement.href.includes('fonts.googleapis.com')) {
                            document.head.removeChild(linkElement);
                        }
                    }
                );
            };
        }, []
    );

    useEffect(
        () => {
            if (!isLoaded) return;

            const animate = () => {
                const newTime = Date.now();
                const dt = (newTime - lastTimeRef.current) / 1000;
                lastTimeRef.current = newTime;

                if(!pause.current) {


                    setMorphState(
                        prev => {
                            const newState = { ...prev };
                            const currentFont = randomizedFonts[newState.currentIndex];
                            const shouldIncrementIndex = newState.cooldown > 0;
                            const shouldChangeAxes = newState.axesCooldown > 0;
                            
                            newState.cooldown -= dt;

                            if (newState.cooldown <= 0) {
                                if (shouldIncrementIndex) {
                                    // Passer à la police suivante
                                    newState.previousIndex = newState.currentIndex;
                                    newState.currentIndex = (newState.currentIndex + 1) % randomizedFonts.length;
                                    
                                    // Mettre à jour les axes
                                    newState.previousAxes = {...newState.currentAxes};
                                    newState.currentAxes = generateRandomAxes(randomizedFonts[newState.currentIndex]);

                                    // Réinitialiser le cooldown des axes
                                    newState.axesCooldown = axesCooldownTime;
                                }
                                
                                // Phase de morphing
                                newState.morph -= newState.cooldown;
                                newState.cooldown = 0;
                                newState.isInCooldown = false;
                                
                                let fraction = newState.morph / morphTime;
                                
                                if (fraction > 1) {
                                    newState.cooldown = cooldownTime;
                                    fraction = 1;
                                    newState.isInCooldown = true;
                                }
                                
                                // Appliquer les effets de blur et morphing
                                applyMorphEffect(fraction, newState);
                            } else {
                                // Phase de cooldown
                                newState.morph = 0;
                                newState.isInCooldown = true;
                                applyCooldownEffect(newState);

                                // Gérer la transition des axes variables
                                newState.axesCooldown -= dt;
                                if (newState.axesCooldown <= 0) {
                                    if(shouldChangeAxes) {
                                        newState.currentAxes = generateRandomAxes(currentFont);
                                    }

                                    newState.axesCooldown = axesCooldownTime;
                                }
                            }

                            return newState;
                        }
                    );
                }

                animationFrameRef.current = requestAnimationFrame(animate);
            };

            animationFrameRef.current = requestAnimationFrame(animate);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }, [isLoaded]
    );

    return (
        <div className="w-full relative flex flex-col items-center">
            {/* Container avec le filtre SVG */}
            <div 
                className="relative flex justify-center items-center w-full"
                style={{
                    filter: 'url(#threshold) blur(0.6px)',
                    minHeight: '120px',
                }}
            >
                {/* Premier texte */}
                <span
                    ref={text1Ref}
                    className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-black dark:text-white tracking-tight select-none"
                    style={{
                        fontFamily: `"${previousFont.name}", sans-serif`,
                        width: '100%',
                        textAlign: 'center',
                        opacity: morphState.isInCooldown ? '0%' : undefined,
                        fontVariationSettings: createFontVariationSettings(morphState.previousAxes),
                        transition: morphState.isInCooldown ? "font-variation-settings 0.25s ease-in-out, font-weight 0.25s ease-in-out" : undefined,
                        fontStyle: "normal",
                    }}
                >
                    Sacercode
                </span>

                {/* Deuxième texte */}
                <span
                    ref={text2Ref}
                    className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-black dark:text-white tracking-tight select-none"
                    style={{
                        fontFamily: `"${currentFont.name}", sans-serif`,
                        width: '100%',
                        textAlign: 'center',
                        opacity: morphState.isInCooldown ? '100%' : undefined,
                        fontVariationSettings: createFontVariationSettings(morphState.currentAxes),
                        transition: morphState.isInCooldown ? "font-variation-settings 0.25s ease-in-out, font-weight 0.25s ease-in-out" : undefined,
                        fontStyle: "normal",
                    }}
                >
                    Sacercode
                </span>
            </div>

            {/* Filtre SVG pour l'effet de morphing */}
            <svg className="absolute w-0 h-0" style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                <filter id="threshold">
                    <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 255 -140"
                    />
                </filter>
                </defs>
            </svg>

            {/* Indicateur de police et axes */}
            {isLoaded && (
                <div className="relative text-center my-4 z-20">
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                        {morphState.isInCooldown ? (
                            <a href={`https://fonts.google.com/specimen/${currentFont.name}/tester`} target="_blank" rel="noopener noreferrer">
                                {currentFont.name}
                            </a>
                        ) : (
                            `${previousFont.name} → ${currentFont.name}`
                        )}
                        <br />
                        <span className="text-xs">
                        ({morphState.currentIndex}/{randomizedFonts.length})
                        </span>
                    </p>
                </div>
            )}

            {/* Indicateur de chargement */}
            {!isLoaded && (
                <div className="">
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-mono animate-pulse">
                        Chargement des polices variables...
                    </p>
                </div>
            )}

            {/* Barres de progression des axes variables */}
            {isLoaded && (
                <div className="flex flex-wrap justify-center gap-2 px-4">
                    {Object.entries(morphState.currentAxes).map(
                        ([axis, value], index) => {
                            const axisRange = currentFont.axes[axis];
                            if (!axisRange) return null;
                            
                            const [min, max] = axisRange;
                            const progress = ((value - min) / (max - min)) * 100;
                            
                            // Couleurs différentes pour chaque axe
                            const colors = [
                                'from-blue-500 to-blue-600',
                                'from-green-500 to-green-600', 
                                'from-purple-500 to-purple-600',
                                'from-orange-500 to-orange-600',
                                'from-pink-500 to-pink-600',
                                'from-indigo-500 to-indigo-600'
                            ];
                            const colorClass = colors[index % colors.length];
                            
                            return (
                                <div key={axis} className="flex flex-col items-center">
                                    <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full bg-linear-to-r ${colorClass} transition-all duration-300`}
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    
                                    <span className="text-xs text-gray-400 dark:text-gray-500 font-mono mt-1">
                                        {axis}: {value} {/* ({min}-{max}) */}
                                    </span>
                                </div>
                            );
                        }
                    )}
                </div>
            )}

            {/* Barre de progression du morphing principal */}
            {/* <div className="w-32 min-h-12">
                {isLoaded && !morphState.isInCooldown && (
                    <>
                        <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-linear-to-r from-red-500 to-yellow-500 transition-all duration-100 ease-out"
                            style={{ 
                                width: `${(morphState.morph / morphTime) * 100}%`,
                                transition: 'width 0.1s ease-out'
                            }}
                            />
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono mt-1 block text-center">
                            morphing
                        </span>
                    </>
                )}
            </div> */}
            
            <div className="mt-4 flex gap-4">
                
                <button
                    className="bg-linear-to-br from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-900 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={() => {
                        pause.current = !pause.current;
                        setPauseState(pause.current);
                    }}
                >
                    {pauseState ? 'Play' : 'Pause'}
                </button>

                <button
                    className={`bg-linear-to-br from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-900 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${(!isLoaded || (isLoaded && !morphState.isInCooldown)) ? 'opacity-50' : ''}`}
                    disabled={!isLoaded || (isLoaded && !morphState.isInCooldown)}
                    onClick={() => {
                        setMorphState(
                            prev => {
                                const newState = { ...prev };
                                
                                // Passer à la police suivante
                                newState.previousIndex = newState.currentIndex;
                                newState.currentIndex = (newState.currentIndex + 1) % randomizedFonts.length;
                                
                                // Mettre à jour les axes
                                newState.previousAxes = {...newState.currentAxes};
                                newState.currentAxes = generateRandomAxes(randomizedFonts[newState.currentIndex]);

                                // Réinitialiser le cooldown des axes
                                newState.axesCooldown = axesCooldownTime;
                                
                                // Phase de morphing
                                newState.morph = 0;
                                newState.cooldown = 0;
                                newState.isInCooldown = false;

                                applyMorphEffect(0, newState);

                                return newState;
                            }
                        );
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
