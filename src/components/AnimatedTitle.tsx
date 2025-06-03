'use client';

import { useState, useEffect } from 'react';

const fonts = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Montserrat',
  'Poppins',
  'Lato',
  'Source Sans Pro',
  'Oswald',
  'Raleway',
  'PT Sans',
  'Lora',
  'Merriweather',
  'Nunito',
  'Playfair Display',
  'Rubik',
  'Work Sans',
  'Fira Sans',
  'Crimson Text',
  'Libre Baskerville',
  'Dancing Script',
  'Pacifico',
  'Lobster',
  'Righteous',
  'Archivo Black',
  'Bebas Neue',
  'Exo 2',
  'Comfortaa',
  'Quicksand',
  'Cabin',
  'Karla'
];

export default function AnimatedTitle() {
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    // Load all fonts dynamically
    const loadFonts = async () => {
      const fontPromises = fonts.map(font => {
        return new Promise<void>((resolve) => {
          const link = document.createElement('link');
          link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
          link.rel = 'stylesheet';
          link.onload = () => resolve();
          link.onerror = () => resolve(); // Continue even if a font fails to load
          document.head.appendChild(link);
        });
      });

      await Promise.all(fontPromises);
      setIsLoaded(true);
    };

    loadFonts();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fonts.length);
      setCurrentFont(fonts[randomIndex]);
      setFontIndex(randomIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div className="relative">
      <h1 
        className="text-6xl md:text-8xl font-bold text-black dark:text-white tracking-tight transition-all duration-500 ease-in-out transform"
        style={{ 
          fontFamily: `"${currentFont}", sans-serif`,
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Sacercode
      </h1>
      
      {/* Font indicator */}
      {isLoaded && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
            {currentFont} ({fontIndex + 1}/{fonts.length})
          </p>
        </div>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono animate-pulse">
            Chargement des polices...
          </p>
        </div>
      )}
    </div>
  );
}
