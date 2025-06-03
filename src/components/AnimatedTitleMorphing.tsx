'use client';

import { useState, useEffect, useRef } from 'react';

const fonts = [
  'Inter',
  'Poppins',
  'Lato',
  'Raleway',
  'Crimson Text',
  'Libre Baskerville',
  'Bebas Neue',
  'Quicksand',
  'Cabin',

  'Imperial Script',
  'Roboto',
  'Open Sans',
  'Montserrat',
  'Eagle Lake',
  'Lobster',
  'Source Sans Pro',
  'Oswald',
  'Plaster',
  'PT Sans',
  'Lora',
  'Merriweather',
  'Nunito',
  'Playfair Display',
  'Rubik',
  'Work Sans',
  'Fira Sans',
  'Notable',
  'Ephesis',
  'Dancing Script',
  'Pacifico',
  'Lobster',
  'Righteous',
  'Archivo Black',
  'WindSong',
  'Exo 2',
  'Comfortaa',
  'Style Script',
  'Notable',
  'Karla'
];

interface MorphingState {
  currentIndex: number;
  nextIndex: number;
  morph: number;
  cooldown: number;
  isInCooldown: boolean;
}

export default function AnimatedTitleMorphing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [morphState, setMorphState] = useState<MorphingState>({
    currentIndex: 0,
    nextIndex: 1,
    morph: 0,
    cooldown: 0,
    isInCooldown: true
  });
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  // Configuration du morphing
  const morphTime = 1.5; // Durée du morphing en secondes
  const cooldownTime = 1; // Pause entre les transitions

  useEffect(() => {
    // Charger toutes les polices dynamiquement
    const loadFonts = async () => {
      const fontPromises = fonts.map(font => {
        return new Promise<void>((resolve) => {
          const link = document.createElement('link');
          link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
          link.rel = 'stylesheet';
          link.onload = () => resolve();
          link.onerror = () => resolve();
          document.head.appendChild(link);
        });
      });

      await Promise.all(fontPromises);
      setIsLoaded(true);
    };

    loadFonts();
  }, []);

  // Animation loop
  useEffect(() => {
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
            newState.nextIndex = (newState.nextIndex + 1) % fonts.length;
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
          
          // Appliquer les effets de blur et opacity
          applyMorphEffect(fraction);
        } else {
          // Phase de cooldown
          newState.morph = 0;
          newState.isInCooldown = true;
          applyCooldownEffect();
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
  }, [isLoaded]);

  const applyMorphEffect = (fraction: number) => {
    if (!text1Ref.current || !text2Ref.current) return;

    // Appliquer le blur et l'opacité au texte qui apparaît (text2)
    const blurValue2 = Math.min(8 / fraction - 8, 100);
    const opacity2 = Math.pow(fraction, 0.4) * 100;
    
    text2Ref.current.style.filter = `blur(${blurValue2}px)`;
    text2Ref.current.style.opacity = `${opacity2}%`;

    // Appliquer le blur et l'opacité au texte qui disparaît (text1)
    const reverseFraction = 1 - fraction;
    const blurValue1 = Math.min(8 / reverseFraction - 8, 100);
    const opacity1 = Math.pow(reverseFraction, 0.4) * 100;
    
    text1Ref.current.style.filter = `blur(${blurValue1}px)`;
    text1Ref.current.style.opacity = `${opacity1}%`;
  };

  const applyCooldownEffect = () => {
    if (!text1Ref.current || !text2Ref.current) return;

    // Texte visible (text2)
    text2Ref.current.style.filter = '';
    text2Ref.current.style.opacity = '100%';
    
    // Texte caché (text1)
    text1Ref.current.style.filter = '';
    text1Ref.current.style.opacity = '0%';
  };

  const currentFont = fonts[morphState.currentIndex];
  const nextFont = fonts[morphState.nextIndex];

  return (
    <div className="relative">
      {/* Container avec le filtre SVG */}
      <div 
        className="relative"
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
            fontFamily: `"${currentFont}", sans-serif`,
            width: '100%',
            textAlign: 'center',
            opacity: morphState.isInCooldown ? '0%' : undefined
          }}
        >
          Sacercode
        </span>

        {/* Deuxième texte */}
        <span
          ref={text2Ref}
          className="absolute text-6xl md:text-8xl font-bold text-black dark:text-white tracking-tight select-none"
          style={{
            fontFamily: `"${nextFont}", sans-serif`,
            width: '100%',
            textAlign: 'center',
            opacity: morphState.isInCooldown ? '100%' : undefined
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

      {/* Indicateur de police */}
      {isLoaded && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono text-center">
            {morphState.isInCooldown ? nextFont : `${currentFont} → ${nextFont}`}
            <br />
            <span className="text-xs">
              ({morphState.nextIndex + 1}/{fonts.length})
            </span>
          </p>
        </div>
      )}

      {/* Indicateur de chargement */}
      {!isLoaded && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono animate-pulse">
            Chargement des polices...
          </p>
        </div>
      )}

      {/* Barre de progression du morphing */}
      {isLoaded && !morphState.isInCooldown && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32">
          <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-out"
              style={{ 
                width: `${(morphState.morph / morphTime) * 100}%`,
                transition: 'width 0.1s ease-out'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
