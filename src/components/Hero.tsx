
const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto text-center mt-20 mb-12">
          Master <span className="relative inline-block">
            JavaScript
            <div className="absolute top-0 left-0 w-full h-full border-yellow-lemon border-2 rounded-full -rotate-6"></div>
          </span> From Scratch to Expert
        </h1>

        <div className="relative">
          <div className="animate-float mx-auto w-32 h-32 md:w-48 md:h-48 bg-yellow-lemon rounded-lg flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-bold">JS</span>
            <div className="absolute -top-4 -right-4 bg-blue-dark text-white rounded-full p-4 animate-pulse">
              ENROLL NOW
            </div>
          </div>
        </div>

        <div className="diagonal-stripes w-full h-24 mt-20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="animate-marquee whitespace-nowrap flex gap-8">
              <span className="text-white mx-4">Lifetime access</span>
              <span className="text-white mx-4">6 weeks duration</span>
              <span className="text-white mx-4">Starts 1 May 2025</span>
              <span className="text-white mx-4">Lifetime access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-yellow-mango text-6xl">✦</div>
      <div className="absolute bottom-40 right-10 text-blue-light text-4xl">✦</div>
      <div className="absolute top-1/3 right-20 text-orange text-5xl rotate-45">✦</div>
    </div>
  );
};

export default Hero;
