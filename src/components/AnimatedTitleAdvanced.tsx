'use client';

import { useState, useEffect } from 'react';

// Polices variables exclusivement avec 3+ axes pour des variations extrêmes
const variableFonts = [
  { 
    name: 'Roboto', 
    axes: { wght: [100, 1000], wdth: [25, 151], opsz: [8, 144], GRAD: [-200, 150], slnt: [-10, 0] },
    category: 'tech'
  },
  { 
    name: 'Noto Serif', 
    axes: { wght: [300, 1000], CASL: [0, 1], CRSV: [0, 1], slnt: [-15, 0], MONO: [0, 1] },
    category: 'code'
  },
  { 
    name: 'Archivo', 
    axes: { wght: [100, 900], wdth: [35, 100], opsz: [10, 72], GRAD: [88, 150], XTRA: [324, 402] },
    category: 'serif'
  },
  { 
    name: 'IBM Plex Sans', 
    axes: { wght: [100, 900], opsz: [9, 144], SOFT: [0, 100], WONK: [0, 1] },
    category: 'artistic'
  },
  { 
    name: 'Material Symbols Outlined', 
    axes: { wght: [100, 700], GRAD: [-25, 200], opsz: [20, 48], FILL: [0, 1] },
    category: 'modern'
  },
  { 
    name: 'Dancing Script', 
    axes: { wght: [400, 700] },
    category: 'script'
  },
  { 
    name: 'Cabin', 
    axes: { wght: [300, 700] },
    category: 'geometric'
  },
  { 
    name: 'Inter', 
    axes: { wght: [200, 700] },
    category: 'condensed'
  }
];

export default function AnimatedTitle() {
  const [currentFont, setCurrentFont] = useState(variableFonts[0]);
  const [currentAxes, setCurrentAxes] = useState<Record<string, number>>({});
  const [currentSize, setCurrentSize] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [colorMode, setColorMode] = useState('default');
  const [rotationAngle, setRotationAngle] = useState(0);
  // Fonction pour générer des valeurs aléatoires avec variations extrêmes
  const generateRandomAxes = (font: typeof variableFonts[0]) => {
    const axes: Record<string, number> = {};
    Object.entries(font.axes).forEach(([axisName, range]) => {
        const [min, max] = range;
      
        const extremeChance = Math.random();
        if (extremeChance < 0.3) {
            // 30% chance d'utiliser une valeur extrême (min ou max)
            axes[axisName] = Math.random() < 0.5 ? min : max;
        } else if (extremeChance < 0.5) {
            // 20% chance d'utiliser une valeur dans le premier ou dernier quartile
            const isLowerQuartile = Math.random() < 0.5;
            if (isLowerQuartile) {
            axes[axisName] = min + Math.random() * (max - min) * 0.25;
            } else {
            axes[axisName] = min + (max - min) * 0.75 + Math.random() * (max - min) * 0.25;
            }
        } else {
            // 50% chance d'utiliser une valeur normale
            axes[axisName] = min + Math.random() * (max - min);
        }
    });
    return axes;
  };

    useEffect(() => {
        // Load all variable fonts
        const loadFonts = async () => {
        const fontPromises = variableFonts.map(font => {
            return new Promise<void>((resolve) => {
            const link = document.createElement('link');
            const fontName = font.name.replace(/\s+/g, '+');
            
            // Construire l'URL avec tous les axes variables
            const axesParams = Object.entries(font.axes).map(([axis, range]) => {
                return `${axis}@${range[0]}..${range[1]}`;
            }).join(';');
            
            link.href = `https://fonts.googleapis.com/css2?family=${fontName}:${axesParams}&display=swap`;
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

    useEffect(
        () => {
            if (!isLoaded) return;
            const interval = setInterval(
                () => {

                    const selectedFonts = variableFonts;

                    const randomFont = selectedFonts[Math.floor(Math.random() * selectedFonts.length)];
                    const randomAxes = generateRandomAxes(randomFont);
                    
                    // Entre 70% et 130% pour des effets plus dramatiques
                    const randomSize = 0.7 + Math.random() * 0.6;
                    setCurrentFont(randomFont);
                    setCurrentAxes(randomAxes);
                    setCurrentSize(randomSize);

                    // Rotation légère aléatoire pour les polices premium
                    setRotationAngle(-3 + Math.random() * 6); // Entre -3° et +3°

                    // Mode couleur occasionnel pour les polices artistiques
                    if (randomFont.category === 'artistic' && Math.random() < 0.3) {
                        const colorModes = ['gradient', 'rainbow', 'neon'];
                        setColorMode(colorModes[Math.floor(Math.random() * colorModes.length)]);
                    } else {
                        setColorMode('default');
                    }

                }, 2000
            ); // Plus rapide pour mieux voir les variations extrêmes

        return () => clearInterval(interval);
    }, [isLoaded]);

  // Convertir les axes en string CSS font-variation-settings
  const getFontVariationSettings = () => {
    return Object.entries(currentAxes)
      .map(([axis, value]) => `"${axis}" ${Math.round(value * 10) / 10}`)
      .join(', ');  };

  const getCategoryIcon = () => {
    switch (currentFont.category) {
      case 'tech': return '🔧';
      case 'code': return '💻';
      case 'serif': return '📖';
      case 'artistic': return '🎨';
      case 'modern': return '✨';
      case 'script': return '✍️';
      case 'geometric': return '🔷';
      case 'condensed': return '📏';
      default: return '🎯';
    }
  };

  const getTextColorStyle = () => {
    switch (colorMode) {
      case 'gradient':
        return {
          background: 'linear-gradient(45deg, #ff0080, #00ffff, #ff8000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        };
      case 'rainbow':
        return {
          background: 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0000ff, #8000ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        };
      case 'neon':
        return {
          color: '#00ffff',
          textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
        };
      default:
        return {};
    }
  };

  return (
    <div className="relative">
        <h1 
            className={`text-6xl md:text-8xl tracking-tight transition-all duration-1000 ease-in-out transform relative overflow-hidden ${colorMode === 'default' ? 'text-black dark:text-white' : ''}`}
            style={{ 
            fontFamily: `"${currentFont.name}", sans-serif`,
            fontVariationSettings: getFontVariationSettings(),
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${currentSize}) rotate(${rotationAngle}deg)`,
            transformOrigin: 'center',
            ...getTextColorStyle()
            }}
        >
            Sacercode
        </h1>
        {/* Font indicator détaillé avec style extrême */}
      {isLoaded && (
        <div className="text-center max-w-8xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-mono mb-2">
            <span className="font-bold text-blue-600 dark:text-blue-400">{getCategoryIcon()} {currentFont.name}</span>
            {colorMode !== 'default' && (
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold">
                🌈 {colorMode.toUpperCase()}
              </span>
            )}
            {rotationAngle !== 0 && (
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold">
                🔄 {rotationAngle.toFixed(1)}°
              </span>
            )}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-2 flex flex-wrap justify-center gap-2">
            {Object.entries(currentAxes).map(([axis, value]) => (
              <span key={axis} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                <span className="text-blue-500 font-semibold">{axis}</span>: {Math.round(value * 10) / 10}
              </span>
            ))}
          </p>
            {/* Barre de progression multi-axes */}
          <div className="mt-3 flex justify-center space-x-2">
            {Object.entries(currentAxes).slice(0, 3).map(([axis, value], index) => {
              const axisRange = currentFont.axes[axis as keyof typeof currentFont.axes];
              if (!axisRange) return null;
              
              const [min, max] = axisRange;
              const percentage = ((value - min) / (max - min)) * 100;
              const colors = ['from-red-400 to-red-600', 'from-green-400 to-green-600', 'from-blue-400 to-blue-600'];
              
              return (
                <div key={axis} className="flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-1 font-mono">{axis}</div>
                  <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${colors[index]} transition-all duration-1000 ease-in-out`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
        {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500 font-mono animate-pulse mb-2">
            ⚡ Chargement des polices variables extrêmes...
          </p>
          <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-600 font-mono mt-2">
            🚀 Premium fonts • 🎨 Multi-axis variations • ✨ Color effects
          </p>
        </div>
      )}
      
      {/* CSS pour l'animation de brillance */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
