
import React from 'react';
import CircularButton from './CircularButton';

const EnrollBanner = () => {
  return (
    <div className="bg-blue-dark relative overflow-hidden rounded-tr-[120px]">
      <div className="container mx-auto py-16 px-4 flex justify-between items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
          Ready to master JavaScript?
        </h2>
        <div className="hidden md:block">
          <CircularButton />
        </div>
      </div>
    </div>
  );
};

export default EnrollBanner;
