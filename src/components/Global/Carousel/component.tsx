'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import "./styles.css";

interface Carousel3DProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function Carousel3D({ 
    images, 
    autoRotate = true, 
    rotationInterval = 4000 
}: Carousel3DProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    //   Auto-rotation effect
    useEffect(
        () => {
            if (!autoRotate) return;
            
            const interval = setInterval(
                () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                }, rotationInterval
            );

            return () => clearInterval(interval);
        }, [autoRotate, rotationInterval, images.length]
    );

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (
                prevIndex === 0 ?
                    images.length - 1
                :
                    prevIndex - 1
            )
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-[200px] md:h-[375px] perspective-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                {images.map(
                    (image, index) => {
                        const isActive = index === currentIndex;
                        const isNext = index === (currentIndex + 1) % images.length;
                        const isPrev = index === (currentIndex - 1 + images.length) % images.length;

                        let transformStyle = '';
                        let zIndex = 0;
                        let opacity = 0.3;

                        if (isActive) {
                            transformStyle = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                            zIndex = 30;
                            opacity = 1;
                        } else if (isNext) {
                            transformStyle = 'translateX(20%) translateZ(-200px) rotateY(-25deg) scale(0.8)';
                            zIndex = 20;
                            opacity = 0.7;
                        } else if (isPrev) {
                            transformStyle = 'translateX(-20%) translateZ(-200px) rotateY(25deg) scale(0.8)';
                            zIndex = 20;
                            opacity = 0.7;
                        } else {
                            transformStyle = 'translateX(0) translateZ(-400px) rotateY(0deg) scale(0.6)';
                            zIndex = 10;
                            opacity = 0;
                        }

                        return (
                            <div
                                key={index}
                                className={`${index === 0 && "min-w-full"} flex items-center absolute h-full transition-all duration-500 ease-in-out cursor-pointer hover:scale-105`}
                                style={{
                                transform: transformStyle,
                                zIndex: zIndex,
                                opacity: opacity,
                                transformStyle: 'preserve-3d'
                                }}
                                onClick={() => goToSlide(index)}
                            >
                                <div className={`${index === 0 && "min-w-full h-7/12"} relative overflow-hidden flex justify-center transition-all duration-500`}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        className={`
                                            ${index === 2 ? 'w-1/2' : 'w-1/3'} 
                                            ${index === 0 && "absolute transition-all duration-500 ease-in-out "}
                                            ${index === 0 && (currentIndex == 1 ? "left-4/12 translate-x-0" : currentIndex == 2 ? "left-9/12 -translate-x-full" : "left-1/2 -translate-x-1/2")}
                                            h-auto max-h-full object-contain
                                        `}
                                        priority={isActive}
                                    />
                                    {/* Gradient overlay for depth effect */}
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" /> */}
                                </div>
                            </div>
                        );
                    }
                )}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black transition-all duration-300 group"
                aria-label="Image précédente"
            >
                <svg 
                className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-black transition-all duration-300 group"
                aria-label="Image suivante"
            >
                <svg 
                className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
                {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={
                        `w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ?
                                'bg-blue-600 dark:bg-blue-400 scale-125'
                            :
                                'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`
                    }
                    aria-label={`Aller à l'image ${index + 1}`}
                />
                ))}
            </div>

            {/* Current Image Info */}
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentIndex + 1} / {images.length}
                </p>
            </div>
        </div>
    );
}
