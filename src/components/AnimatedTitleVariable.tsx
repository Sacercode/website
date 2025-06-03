'use client';

import { useState, useEffect } from 'react';

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
  
  // Polices avec 1-2 axes variables (moins mais toujours intéressantes)
  { name: 'Bodoni Moda', weights: [400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [6, 96] } },
  { name: 'Inter', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: { slnt: [-10, 0] } },
  { name: 'Source Serif 4', weights: [200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [8, 60] } },
  { name: 'Playfair Display', weights: [400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [5, 1200] } },
  { name: 'Open Sans', weights: [300, 400, 500, 600, 700, 800], hasItalic: true, axes: { wdth: [75, 100] } },
  { name: 'IBM Plex Sans', weights: [100, 200, 300, 400, 500, 600, 700], hasItalic: true, axes: { wdth: [85, 100] } },
  { name: 'Archivo', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { wdth: [62, 125] } },
  { name: 'DM Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: { opsz: [9, 40] } },
  
  // Polices classiques sans axes variables mais toujours bonnes
  { name: 'Crimson Text', weights: [400, 600, 700], hasItalic: true, axes: {} },
  { name: 'Oswald', weights: [200, 300, 400, 500, 600, 700], hasItalic: false, axes: {} },
  { name: 'Montserrat', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Libre Baskerville', weights: [400, 700], hasItalic: true, axes: {} },
  { name: 'Merriweather', weights: [300, 400, 700, 900], hasItalic: true, axes: {} },
  { name: 'Poppins', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Nunito', weights: [200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Lato', weights: [100, 300, 400, 700, 900], hasItalic: true, axes: {} },
  { name: 'Raleway', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Work Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Source Sans 3', weights: [200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Fira Sans', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Roboto Slab', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: {} },
  { name: 'JetBrains Mono', weights: [100, 200, 300, 400, 500, 600, 700, 800], hasItalic: true, axes: {} },
  { name: 'Space Grotesk', weights: [300, 400, 500, 600, 700], hasItalic: false, axes: {} },
  { name: 'Manrope', weights: [200, 300, 400, 500, 600, 700, 800], hasItalic: false, axes: {} },
  { name: 'Plus Jakarta Sans', weights: [200, 300, 400, 500, 600, 700, 800], hasItalic: true, axes: {} },
  { name: 'Epilogue', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: true, axes: {} },
  { name: 'Outfit', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: {} },
  { name: 'Quicksand', weights: [300, 400, 500, 600, 700], hasItalic: false, axes: {} },
  { name: 'Lexend', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], hasItalic: false, axes: {} }
];

export default function AnimatedTitle() {
    const [currentFont, setCurrentFont] = useState(variableFonts[0]);
    const [currentWeight, setCurrentWeight] = useState(700);
    const [currentSize, setCurrentSize] = useState(1);
    const [currentAxes, setCurrentAxes] = useState<{[key: string]: number}>({});
    const [isVariable, setIsVariable] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const currentItalic = false;// currentFont.hasItalic && Math.random() < 0.4; // 40% chance d'italic
    useEffect(
        () => {
            // Load all fonts dynamically
            const loadFonts = async () => {
            // Load variable fonts with full weight range and italic support
            const variableFontPromises = variableFonts.map(font => {
                return new Promise<void>((resolve) => {
                const link = document.createElement('link');
                // Format correct pour les polices variables avec italic
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
                });
            });

            await Promise.all([...variableFontPromises]);
            setIsLoaded(true);
            };

            loadFonts();
        }, []
    );

    useEffect(
        () => {
            if (!isLoaded) return;

            const interval = setInterval(
                () => {
                    const randomFont = variableFonts[Math.floor(Math.random() * variableFonts.length)];
                    const randomWeight = randomFont.weights[Math.floor(Math.random() * randomFont.weights.length)];
                    // const randomItalic = randomFont.hasItalic && Math.random() < 0.3; // 30% chance d'italic
                    const randomSize = 0.85 + Math.random() * 0.3; // Entre 85% et 115% de la taille de base            // Générer des valeurs aléatoires pour les axes variables
                    const newAxes: {[key: string]: number} = {};
                    Object.entries(randomFont.axes).forEach(([axis, range]) => {
                    if (range && range.length === 2) {
                        const [min, max] = range;
                        newAxes[axis] = min + Math.random() * (max - min);
                    }
                    });

                    setCurrentFont(randomFont);
                    setCurrentWeight(randomWeight);
                    setCurrentSize(randomSize);
                    setCurrentAxes(newAxes);
                    setIsVariable(true);
                }, 1000
            );

            return () => clearInterval(interval);
        }, [isLoaded]
    );
    const fontFamily = isVariable ? currentFont.name : currentFont.name;
  
    // Créer les variations CSS pour les axes variables
    const variableFontStyle = {
        fontFamily: `"${fontFamily}", serif`,
        fontWeight: currentWeight,
        fontStyle: currentItalic ? 'italic' : 'normal',
        minHeight: '120px',
        display: 'flex' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        transform: `scale(${currentSize})`,
        transformOrigin: 'center',
        fontVariationSettings: Object.keys(currentAxes).length > 0 
        ? Object.entries(currentAxes)
            .map(([axis, value]) => `"${axis}" ${value.toFixed(1)}`)
            .join(', ')
        : undefined
    };

  return (
    <div className="overflow-hidden min-h-62">
      <h1 
        className={`text-6xl md:text-8xl text-black dark:text-white tracking-tight transition-all duration-700 ease-in-out transform relative overflow-hidden`}
        style={variableFontStyle}
      >
        Sacercode
        
        
      </h1>
        {/* Font indicator */}
      {isLoaded && (
        <div className="text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
            {fontFamily} | Weight: {currentWeight} 
            {currentItalic && ' | Italic'} 
            {isVariable && ' | Variable'}
          </p>
          
          {/* Affichage des axes variables actifs */}
          {Object.keys(currentAxes).length > 0 && (
            <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mt-1">
              Axes: {Object.entries(currentAxes)
                .map(([axis, value]) => `${axis}:${value.toFixed(1)}`)
                .join(' | ')}
            </p>
          )}
          
          <div className="mt-1 flex justify-center space-x-2">
            {/* Barre de poids */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-700 ease-in-out"
                  style={{ width: `${((currentWeight - 100) / 800) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 mt-1">wght</span>
            </div>
            
            {/* Barres pour les autres axes */}
            {Object.entries(currentAxes).map(([axis, value]) => {
              const axisRange = currentFont.axes[axis];
              if (!axisRange) return null;
              const [min, max] = axisRange;
              const percentage = ((value - min) / (max - min)) * 100;
              
              return (
                <div key={axis} className="flex flex-col items-center">
                  <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-700 ease-in-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{axis}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono animate-pulse">
            Chargement des polices variables...
          </p>
        </div>
      )}
      
      {/* CSS pour l'animation de brillance */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(100%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}
