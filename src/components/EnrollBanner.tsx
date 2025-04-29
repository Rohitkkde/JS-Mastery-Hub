
import React from 'react';
import CircularButton from './CircularButton';

const EnrollBanner = () => {
  return (
    <div className="bg-blue-dark w-[80%] relative overflow-hidden rounded-r-full">
      <div className="container mx-auto p-16 flex justify-between items-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white max-w-2xl">
          Ready to master JavaScript?
        </h2>
        <div className="hidden md:block">
          <CircularButton variant="yellow" foreground="black" />
        </div>
      </div>
    </div>
  );
};

export default EnrollBanner;
