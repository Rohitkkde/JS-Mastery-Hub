
import React from 'react';

const MarqueeBanner = () => {
  return (
    <div className="w-full bg-[#F57642] overflow-hidden py-4 transform -skew-y-3">
      <div className="animate-marquee whitespace-nowrap text-white font-sans">
        <span className="inline-block mx-4 text-2xl font-bold">Starts 1 May 2025</span>
        <span className="inline-block mx-4">✦</span>
        <span className="inline-block mx-4 text-2xl font-bold">6 weeks duration</span>
        <span className="inline-block mx-4">✦</span>
        <span className="inline-block mx-4 text-2xl font-bold">Starts 1 May 2025</span>
        <span className="inline-block mx-4">✦</span>
        <span className="inline-block mx-4 text-2xl font-bold">6 weeks duration</span>
        <span className="inline-block mx-4">✦</span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
