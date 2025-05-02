
import React from 'react';
import CircularButton from './CircularButton';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const EnrollBanner = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Animation variants for slide-right bouncy effect (without fade-in)
  const containerVariants = {
    hidden: { x: -100 },
    visible: { 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
        duration: 0.8
      }
    }
  };
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-blue-dark w-full lg:w-[80%] relative overflow-hidden rounded-r-full"
    >
      <div className="container mx-auto p-8 lg:p-16 flex justify-between items-center">
        <h2 className="text-4xl lg:text-5xl md:text-7xl font-bold text-white">
          Ready to master JavaScript?
        </h2>
        <div className="hidden md:block">
          <CircularButton variant="yellow" foreground="black" size='lg' />
        </div>
      </div>
    </motion.div>
  );
};

export default EnrollBanner;
