
import React from 'react';
import Sparkle from './icons/Sparkle';

const MarqueeBanner = () => {
  // Create duplicate content for seamless looping
  const orangeContent = <>
      <span className="inline-block mx-4 text-3xl font-extrabold">Starts 1 May 2025</span>
      <span className="inline-block mx-4 w-[38px] h-[38px]">
        <Sparkle />
      </span>
      <span className="inline-block mx-4 text-3xl font-extrabold">6 weeks duration</span>
      <span className="inline-block mx-4 w-[38px] h-[38px]">
        <Sparkle />
      </span>
    </>;
  const blackContent = <>
      <span className="inline-block mx-4 text-3xl font-extrabold">Lifetime access</span>
      <span className="inline-block mx-4 w-[38px] h-[38px]">
        <Sparkle />
      </span>
    </>;
  return <div className="relative">
      {/* First banner - clockwise rotation */}
      <div className="w-[150%] -left-[25%] bg-[#F57642] overflow-hidden py-6 absolute -top-2 rotate-[9deg] z-10">
        <div className="flex whitespace-nowrap text-white font-sans animate-marquee-reverse">
          {/* Duplicate content for seamless looping */}
          {orangeContent}
          {orangeContent}
          {orangeContent}
          {orangeContent}
        </div>
      </div>

      {/* Second banner - anti-clockwise rotation */}
      <div className="w-[150%] -left-[25%] bg-black bg-opacity-100 overflow-hidden py-6 absolute -top-4 -rotate-[9deg] z-0">
        <div className="flex whitespace-nowrap text-white font-sans animate-marquee">
          {/* Duplicate content for seamless looping */}
          {blackContent}
          {blackContent}
          {blackContent}
          {blackContent}
          {blackContent}
        </div>
      </div>
    </div>;
};
export default MarqueeBanner;
