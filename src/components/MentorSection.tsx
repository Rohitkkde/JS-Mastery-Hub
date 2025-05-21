
import React, { useRef } from 'react';
import { Button } from './ui/button';
import { motion, useInView } from 'framer-motion';

const MentorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <section className="w-screen flex items-end justify-end" ref={ref}>
      <div className="bg-[#3658D3] rounded-tl-[100px] lg:rounded-bl-[100px] lg:h-[85vh] lg:ml-24">
        <motion.div 
          className="grid md:grid-cols-2 gap-10 p-8 md:p-12 h-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Video Side */}
          <motion.div 
            className="relative group cursor-pointer h-full"
            variants={childVariants}
          >
            <img
              src="/lovable-uploads/93446ac5-10f8-4090-a12c-686faf87c339.png"
              alt="Rohit's Testimonial"
              className="w-full h-full object-cover rounded-tl-[100px] lg:rounded-bl-[100px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="130"
                height="130"
                viewBox="0 0 130 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform transform group-hover:scale-110"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65 130C100.899 130 130 100.899 130 65C130 29.1015 100.899 0 65 0C29.1015 0 0 29.1015 0 65C0 100.899 29.1015 130 65 130ZM83.6507 67.1529C85.6507 65.9982 85.6507 63.1114 83.6507 61.9567L57.2569 46.7182C55.2569 45.5635 52.7569 47.0069 52.7569 49.3163V79.7933C52.7569 82.1027 55.2569 83.5461 57.2569 82.3914L83.6507 67.1529Z"
                  fill="#F57642"
                />
              </svg>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="text-[#EBEEFB] flex flex-col justify-center"
            variants={childVariants}
          >
            <motion.p 
              className="font-thin text-5xl mb-2"
              variants={childVariants}
            >
              Meet
            </motion.p>
            <motion.h2 
              className="text-7xl lg:text-9xl font-bold mb-6"
              variants={childVariants}
            >
              Rohit
            </motion.h2>
            <motion.blockquote 
              className="text-2xl mb-8 opacity-90"
              variants={childVariants}
            >
              "A community of excellent JavaScript developers. A community of excellent JavaScript developers. A community of excellent JavaScript developers"
            </motion.blockquote>
            <motion.div variants={childVariants}>
              <Button
                className="bg-white text-[#3658D3] hover:bg-white/90 w-fit"
                size="lg"
              >
                ENROLL NOW
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorSection;
