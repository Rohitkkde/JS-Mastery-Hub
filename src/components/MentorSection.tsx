
import React from 'react';
import { Button } from './ui/button';

const MentorSection = () => {
  return (
    <section className="w-screen h-screen flex items-end justify-end">
      <div className="bg-[#3658D3] rounded-bl-[100px] h-[85vh] ml-24">
        <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 h-full">
          {/* Video Side */}
          <div className="relative group cursor-pointer h-full">
            <img
              src="/lovable-uploads/601b047f-7866-49f5-80f1-22a730dc534f.png"
              alt="Urvashi's Testimonial"
              className="w-full h-full object-cover rounded-bl-[100px]"
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
          </div>

          {/* Content Side */}
          <div className="text-[#EBEEFB] flex flex-col justify-center">
            <p className="font-thin text-5xl mb-2">Meet</p>
            <h2 className="text-9xl font-bold mb-6">Urvashi</h2>
            <blockquote className="text-2xl mb-8 opacity-90">
              "A community of excellent JavaScript developers. A community of excellent JavaScript developers. A community of excellent JavaScript developers"
            </blockquote>
            <Button
              className="bg-white text-[#3658D3] hover:bg-white/90 w-fit"
              size="lg"
            >
              ENROLL NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
