
import React from 'react';

const CircularButton = () => {
  return (
    <div className="group relative w-32 h-32 cursor-pointer">
      <div className="absolute inset-0 bg-yellow-lemon hover:bg-yellow-lemon/90 transition-colors rounded-full">
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
            <g clipPath="url(#clip0_179_329)">
              <path d="M6.6084 24.5003H12.5723" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.5 6.60876V12.5726" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.1504 16.1511L11.7769 11.7776" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32.8496 16.1511L37.2231 11.7776" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.1504 32.8501L11.7769 37.2236" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.5 24.5003L42.3916 30.4642L34.4398 34.4401L30.4639 42.3919L24.5 24.5003Z" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_179_329">
                <rect width="47.7108" height="47.7108" fill="white" transform="translate(0.644531 0.644531)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        
        {/* Curved Text */}
        <svg className="absolute inset-0 w-full h-full text-black" viewBox="0 0 100 100">
          <path id="curve" fill="none" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          <text className="text-[14px] uppercase font-mono tracking-[1px] fill-black">
            <textPath href="#curve" startOffset="5%">
              Enroll Now • Enroll Now •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CircularButton;
