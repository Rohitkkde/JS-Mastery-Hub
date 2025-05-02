
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OldMicrosoftCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    // Hide the default cursor when our component is loaded
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      // Restore the default cursor when component unmounts
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Arrow cursor for normal state, pointer hand for clicking
  const cursorSvg = isClicking ? (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8V24H12V18H18V22H12V24H24V12H22V18H18V14H24V8H8Z" fill="black"/>
      <path d="M7 7V25H13V26H23V25H25V11H23V13H25V7H7ZM9 9H23V13H17V19H23V23H13V17H9V9Z" fill="white"/>
    </svg>
  ) : (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 9V23L19 13H14L19 9H9Z" fill="black"/>
      <path d="M8 8V24L20 12H14L20 8H8ZM10 10H18L14 13H19L10 22V10Z" fill="white"/>
    </svg>
  );

  return (
    <motion.div 
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{ 
        x: mousePosition.x - 3,
        y: mousePosition.y - 3,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 450,
        duration: 0
      }}
    >
      {cursorSvg}
    </motion.div>
  );
};

export default OldMicrosoftCursor;
