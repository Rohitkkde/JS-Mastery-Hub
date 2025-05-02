
import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  
  // Using springs with reduced stiffness and increased damping for slower following
  const springX = useSpring(0, { damping: 25, stiffness: 80 });
  const springY = useSpring(0, { damping: 25, stiffness: 80 });

  useEffect(() => {
    // Don't hide the default cursor
    // document.body.style.cursor = "none"; - removed
    
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const handleButtonHoverStart = () => {
      setIsHoveringButton(true);
    };

    const handleButtonHoverEnd = () => {
      setIsHoveringButton(false);
    };

    // Add event listeners for all buttons
    const buttons = document.querySelectorAll('button, .button, [role="button"]');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleButtonHoverStart);
      button.addEventListener('mouseleave', handleButtonHoverEnd);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      
      // Clean up button event listeners
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleButtonHoverStart);
        button.removeEventListener('mouseleave', handleButtonHoverEnd);
      });
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-all duration-200 ${
        isHoveringButton 
          ? "w-16 h-16 -ml-8 -mt-8 rounded-full border-2 border-yellow-mango" 
          : "w-8 h-8 -ml-4 -mt-4"
      }`}
      style={{ 
        x: springX,
        y: springY,
      }}
    >
      {!isHoveringButton && (
        <img
          src="/lovable-uploads/fd62cf28-89ed-4091-9d2c-177436cf58c8.png"
          alt="JavaScript Cursor"
          className="w-full h-full object-contain"
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;
