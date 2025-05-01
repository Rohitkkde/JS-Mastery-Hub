
import React from 'react';
import Marquee from 'react-fast-marquee';
import Sparkle from './icons/Sparkle';

const MarqueeBanner = () => {
  // Create content for marquees
  const orangeContent = <>
      <span className="inline-block mx-4 text-3xl font-extrabold">Starts 1 May 2025</span>
      <span className="inline-block mx-4 w-[38px] h-[38px]">
        <Sparkle />
      </span>
      <span className="inline-block mx-4 text-4xl font-extrabold">6 weeks duration</span>
      <span className="inline-block mx-4 w-[38px] h-[38px]">
        <Sparkle />
      </span>
    </>;
  const blackContent = <>
      <span className="inline-block mx-4 text-4xl font-extrabold">Lifetime access</span>
      <span className="inline-block mx-4 w-[38px] h-[38px]">
        <Sparkle />
      </span>
    </>;
  return <div className="relative">
      {/* First banner - clockwise rotation */}
      <div className="w-[150%] -left-[25%] bg-[#F57642] overflow-hidden py-8 absolute -top-24 rotate-[9deg] z-10">
        <Marquee direction="right" speed={40} gradient={false}>
          {orangeContent}
          {orangeContent}
        </Marquee>
      </div>

      {/* Second banner - anti-clockwise rotation */}
      <div className="w-[150%] -left-[25%] bg-black bg-opacity-100 overflow-hidden py-8 absolute -top-24 -rotate-[9deg] z-0">
        <Marquee direction="left" speed={40} gradient={false}>
          {blackContent}
          {blackContent}
          {blackContent}
        </Marquee>
      </div>
    </div>;
};
export default MarqueeBanner;
