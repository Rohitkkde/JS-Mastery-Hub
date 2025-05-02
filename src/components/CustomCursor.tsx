
import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Using springs for smooth following with lerp-like behavior
  const springX = useSpring(0, { damping: 15, stiffness: 150 });
  const springY = useSpring(0, { damping: 15, stiffness: 150 });

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Restore default cursor on unmount
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 w-8 h-8 -ml-4 -mt-4"
      style={{ 
        x: springX,
        y: springY,
      }}
    >
      <img
        src="/lovable-uploads/fd62cf28-89ed-4091-9d2c-177436cf58c8.png"
        alt="JavaScript Cursor"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default CustomCursor;
