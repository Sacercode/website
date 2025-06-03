'use client';

import { useState, useEffect } from 'react';

const fonts = [
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

export default function AnimatedTitle() {
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load all fonts dynamically
    const loadFonts = async () => {
      const fontPromises = fonts.map(font => {
        return new Promise<void>((resolve) => {
          const link = document.createElement('link');
          link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
          link.rel = 'stylesheet';
          link.onload = () => resolve();
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
    }, 200);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <h1 
      className="text-6xl md:text-8xl font-bold text-black dark:text-white tracking-tight transition-all duration-300 ease-in-out"
      style={{ 
        fontFamily: `"${currentFont}", sans-serif`,
        minHeight: '120px', // Prevents layout shift
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Sacercode
    </h1>
  );
}
