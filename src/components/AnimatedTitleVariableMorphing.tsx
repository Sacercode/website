'use client';

import { useState, useEffect, useRef } from 'react';

// Interface pour définir les axes variables d'une police
interface VariableAxes {
    [key: string]: [number, number]; // [min, max]
}

// Interface pour une police variable
interface VariableFont {
    name: string;
    weights: number[];
    hasItalic: boolean;
    axes: VariableAxes;
}

// Polices variables avec leurs axes de variation disponibles
const variableFonts: VariableFont[] = [
    // Polices avec 3+ axes variables (les plus sophistiquées)
    { name: 'Roboto Flex', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: { wdth: [25, 151], opsz: [8, 144], slnt: [-10, 0] } },
    { name: 'Amstelvar', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: { wdth: [35, 100], opsz: [10, 72], wght: [100, 900] } },
    { name: 'Recursive', weights: [300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: { slnt: [-15, 0], CASL: [0, 1], MONO: [0, 1] } },
    { name: 'Inter Tight', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { slnt: [-10, 0], opsz: [14, 32], wdth: [50, 200] } },
    { name: 'Fraunces', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [9, 144], SOFT: [0, 100], WONK: [0, 1] } },
    { name: 'Commissioner', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: { wdth: [75, 100], slnt: [-12, 0], FLAR: [0, 100] } },
    { name: 'Anybody', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { wdth: [50, 150], slnt: [-20, 20], opsz: [8, 200] } },
    { name: 'Orbitron', weights: [400, 500, 600, 700, 800, 900], hasItalic: false, axes: { wdth: [75, 100], wght: [400, 900], opsz: [12, 96] } },
    { name: 'Climate Crisis', weights: [400], hasItalic: false, axes: { YEAR: [1979, 2050], wght: [300, 900], slnt: [-25, 25] } },
    { name: 'Skolar Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { wdth: [68, 200], opsz: [8, 200], slnt: [-15, 15] } },
    
    // Polices avec 1-2 axes variables
    { name: 'Bodoni Moda', weights: [400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [6, 96] } },
    { name: 'Inter', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: { slnt: [-10, 0] } },
    { name: 'Source Serif 4', weights: [200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [8, 60] } },
    { name: 'Playfair Display', weights: [400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [5, 1200] } },
    { name: 'Open Sans', weights: [300, 400, 500, 600, 700, 800], hasItalic: true, axes: { wdth: [75, 100] } },
    { name: 'IBM Plex Sans', weights: [100, 200, 300, 400, 500, 600, 700], hasItalic: true, axes: { wdth: [85, 100] } },
    { name: 'Archivo', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { wdth: [62, 125] } },
    { name: 'DM Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [9, 40] } },
];

interface MorphingState {
    currentIndex: number;
    nextIndex: number;
    morph: number;
    cooldown: number;
    isInCooldown: boolean;
    currentAxes: {[key: string]: number};
    nextAxes: {[key: string]: number};
}

export default function AnimatedTitleVariableMorphing() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [morphState, setMorphState] = useState<MorphingState>({
        currentIndex: 0,
        nextIndex: 1,
        morph: 0,
        cooldown: 0,
        isInCooldown: true,
        currentAxes: {},
        nextAxes: {}
    });
    const text1Ref = useRef<HTMLSpanElement>(null);
    const text2Ref = useRef<HTMLSpanElement>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(Date.now());
    
    const [currentWeight, setCurrentWeight] = useState(700);

    // Configuration du morphing
    const morphTime = 2; // Durée du morphing en secondes
    const cooldownTime = 1.5; // Pause entre les transitions

    // Fonction pour générer des valeurs aléatoires pour les axes variables
    const generateRandomAxes = (font: VariableFont): {[key: string]: number} => {
        const axes: {[key: string]: number} = {};
        
        // Générer une valeur aléatoire pour chaque axe disponible
        Object.entries(font.axes).forEach(
            ([axis, range]) => {
                const [min, max] = range;
                axes[axis] = Math.round(min + Math.random() * (max - min));
            }
        );
        
        return axes;
    };

    // Fonction pour créer la chaîne font-variation-settings
    const createFontVariationSettings = (axes: {[key: string]: number}): string => {
        return Object.entries(axes)
        .map(([axis, value]) => `"${axis}" ${value}`)
        .join(', ');
    };

    // Fonction pour interpoler entre deux sets d'axes
    const interpolateAxes = (axes1: {[key: string]: number}, axes2: {[key: string]: number}, fraction: number): {[key: string]: number} => {
        const result: {[key: string]: number} = {};
        
        // Combiner toutes les clés des deux axes
        const allKeys = new Set([...Object.keys(axes1), ...Object.keys(axes2)]);
        
        allKeys.forEach(key => {
        const value1 = axes1[key] || 0;
        const value2 = axes2[key] || 0;
        result[key] = Math.round(value1 + (value2 - value1) * fraction);
        });
        
        return result;
    };

    
    const applyMorphEffect = (fraction: number, state: MorphingState) => {
        if (!text1Ref.current || !text2Ref.current) return;

        // Interpoler les axes variables
        const interpolatedAxes1 = interpolateAxes(state.currentAxes, state.nextAxes, 1 - fraction);
        const interpolatedAxes2 = interpolateAxes(state.currentAxes, state.nextAxes, fraction);

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
        text2Ref.current.style.fontVariationSettings = createFontVariationSettings(state.nextAxes);
        
        // Texte caché (text1)
        text1Ref.current.style.filter = '';
        text1Ref.current.style.opacity = '0%';
        text1Ref.current.style.fontVariationSettings = createFontVariationSettings(state.currentAxes);
    };


    // Chargement dynamique des polices variables
    useEffect(
        () => {
            const loadFonts = async () => {
                const fontPromises = variableFonts.map(
                    font => {
                        return new Promise<void>(
                            (resolve) => {
                                const link = document.createElement('link');
                                const fontName = font.name.replace(/\s+/g, '+');
                                const weightRange = `${Math.min(...font.weights)}..${Math.max(...font.weights)}`;
                                
                                if (font.hasItalic) {
                                    link.href = `https://fonts.googleapis.com/css2?family=${fontName}:ital,wght@0,${weightRange};1,${weightRange}&display=swap`;
                                } else {
                                    link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@${weightRange}&display=swap`;
                                }
                                
                                link.rel = 'stylesheet';
                                link.onload = () => resolve();
                                link.onerror = () => resolve();
                                document.head.appendChild(link);
                            }
                        );
                    }
                );

                await Promise.all(fontPromises);
                
                // Initialiser les axes pour les premières polices
                const initialCurrentAxes = generateRandomAxes(variableFonts[0]);
                const initialNextAxes = generateRandomAxes(variableFonts[1]);
                
                setMorphState(
                    prev => ({
                        ...prev,
                        currentAxes: initialCurrentAxes,
                        nextAxes: initialNextAxes
                    }
                ));
                
                setIsLoaded(true);
            };

            loadFonts();
        }, []
    );

    // Animation loop
    useEffect(
        () => {
            if (!isLoaded) return;

            const animate = () => {
                const newTime = Date.now();
                const dt = (newTime - lastTimeRef.current) / 1000;
                lastTimeRef.current = newTime;

                setMorphState(prev => {
                    const newState = { ...prev };
                    const shouldIncrementIndex = newState.cooldown > 0;
                    
                    newState.cooldown -= dt;

                    if (newState.cooldown <= 0) {
                        if (shouldIncrementIndex) {
                            // Passer à la police suivante
                            newState.currentIndex = newState.nextIndex;
                            newState.nextIndex = (newState.nextIndex + 1) % variableFonts.length;
                            
                            // Mettre à jour les axes
                            newState.currentAxes = newState.nextAxes;
                            newState.nextAxes = generateRandomAxes(variableFonts[newState.nextIndex]);
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
                    }

                    return newState;
                });

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


    const currentFont = variableFonts[morphState.currentIndex];
    const nextFont = variableFonts[morphState.nextIndex];

    return (
        <div className="relative flex flex-col items-center">
            {/* Container avec le filtre SVG */}
            <div 
                className="relative w-full"
                style={{
                filter: 'url(#threshold) blur(0.6px)',
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}
            >
                {/* Premier texte */}
                <span
                    ref={text1Ref}
                    className="absolute text-6xl md:text-8xl font-bold text-black dark:text-white tracking-tight select-none"
                    style={{
                        fontFamily: `"${currentFont.name}", sans-serif`,
                        width: '100%',
                        textAlign: 'center',
                        opacity: morphState.isInCooldown ? '0%' : undefined,
                        fontVariationSettings: createFontVariationSettings(morphState.currentAxes)
                    }}
                >
                    Sacercode
                </span>

                {/* Deuxième texte */}
                <span
                    ref={text2Ref}
                    className="absolute text-6xl md:text-8xl font-bold text-black dark:text-white tracking-tight select-none"
                    style={{
                        fontFamily: `"${nextFont.name}", sans-serif`,
                        width: '100%',
                        textAlign: 'center',
                        opacity: morphState.isInCooldown ? '100%' : undefined,
                        fontVariationSettings: createFontVariationSettings(morphState.nextAxes)
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
                <div className="text-center">
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                        {morphState.isInCooldown ? nextFont.name : `${currentFont.name} → ${nextFont.name}`}
                        <br />
                        <span className="text-xs">
                        ({morphState.nextIndex + 1}/{variableFonts.length})
                        </span>
                    </p>
                    
                    {/* Affichage des axes variables actuels */}
                    {Object.keys(morphState.nextAxes).length > 0 && (
                        <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {Object.entries(morphState.nextAxes).map(([axis, value]) => (
                            <span key={axis} className="inline-block mx-1">
                            {axis}: {value}
                            </span>
                        ))}
                        </div>
                    )}
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
            {isLoaded && Object.keys(morphState.nextAxes).length > 0 && (
                <div className="flex gap-2">
                    {Object.entries(morphState.nextAxes).map(
                        ([axis, value], index) => {
                            const axisRange = nextFont.axes[axis];
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
                                    className={`h-full bg-gradient-to-r ${colorClass} transition-all duration-300`}
                                    style={{ width: `${progress}%` }}
                                />
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono mt-1">
                                {axis}
                                </span>
                            </div>
                            );
                        }
                    )}
                </div>
            )}

            {/* Barre de progression du morphing principal */}
            <div className="w-32 min-h-12">
                {isLoaded && !morphState.isInCooldown && (
                    <>
                        <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-100 ease-out"
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
            </div>
        </div>
    );
}
