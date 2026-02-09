'use client';
import { usePathname } from "next/navigation";
import "./styles.css"

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [outerCursorPosition, setOuterCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  
  const currentPath = usePathname();
  
  useEffect(
    () => {
      let moveTimer: ReturnType<typeof setTimeout>;

      let animationId: number;      const updateMousePosition = (e: MouseEvent) => {
        const newPosition = { x: e.clientX, y: e.clientY };
        setMousePosition(newPosition);
        mousePositionRef.current = newPosition;
        
        // Afficher le cursor-inner quand la souris bouge
        setIsMoving(true);
        
        // Masquer le cursor-inner après 500ms d'inactivité
        clearTimeout(moveTimer);
        moveTimer = setTimeout(
          () => {
            setIsMoving(false);
          }, 500
        );
      };

      // Animation du curseur extérieur avec délai
      const animateOuterCursor = () => {
        setOuterCursorPosition(prev => {
          const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
          };
          
          const newX = lerp(prev.x, mousePositionRef.current.x, 0.1);
          const newY = lerp(prev.y, mousePositionRef.current.y, 0.1);
          
          return { x: newX, y: newY };
        });
        
        animationId = requestAnimationFrame(animateOuterCursor);
      };

      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      // Suivre la position de la souris
      document.addEventListener('mousemove', updateMousePosition);

      // Démarrer l'animation du curseur extérieur
      animateOuterCursor();

      // Ajouter des événements aux éléments interactifs
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
      
      return () => {
        clearTimeout(moveTimer);
        cancelAnimationFrame(animationId);
        document.removeEventListener('mousemove', updateMousePosition);
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, [currentPath]
  );
  
  return (
    <>
      <div className={`cursor-inner ${isMoving ? 'moving' : ''} ${isHovering ? 'hover' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      <div
        className={`custom-cursor ${isMoving ? 'moving' : ''} ${isHovering ? 'hover' : ''}`}
        style={{
          left: outerCursorPosition.x,
          top: outerCursorPosition.y,
        }}
      >
      </div>
    </>
  );
}
