
import React from 'react';

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-[#F57642] overflow-hidden py-4 absolute -top-2">
      <div className="animate-marquee-reverse whitespace-nowrap text-white font-sans">
        <span className="inline-block mx-4 text-3xl font-extrabold">Starts 1 May 2025</span>
        <span className="inline-block mx-4">✦</span>
        <span className="inline-block mx-4 text-3xl font-extrabold">6 weeks duration</span>
        <span className="inline-block mx-4">✦</span>
        <span className="inline-block mx-4 text-3xl font-extrabold">Starts 1 May 2025</span>
        <span className="inline-block mx-4">✦</span>
        <span className="inline-block mx-4 text-3xl font-extrabold">6 weeks duration</span>
        <span className="inline-block mx-4">✦</span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
