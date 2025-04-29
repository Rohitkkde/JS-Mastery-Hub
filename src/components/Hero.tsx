
import React from 'react';
import CircularButton from './CircularButton';
import MarqueeBanner from './MarqueeBanner';
import Sparkle from './icons/Sparkle';
import AngularBracket from './icons/AngularBracket';

const Hero = () => {
  return <div className="relative min-h-screen pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="lg:text-8xl font-bold mx-auto text-center mt-20 mb-12 text-5xl">
          Master <span className="relative inline-block">
            JavaScript
            <svg width="561" height="178" viewBox="0 0 561 178" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10">
              <path d="M479.321 31.1804C484.744 32.9622 489.49 34.5213 494.236 36.0804C513.897 42.7621 531.863 51.2256 545.423 63.0299C564.067 78.8433 566.101 96.6612 550.846 114.256C543.05 123.388 532.202 130.515 519.66 136.752C494.914 148.779 467.117 156.351 437.965 162.365C395.253 171.051 351.524 175.728 307.117 177.287C258.981 179.069 211.184 177.51 163.388 172.61C128.811 169.269 94.5739 163.924 62.3704 154.124C49.828 150.338 37.2856 145.438 26.4381 139.647C-1.69759 124.279 -7.7993 100.448 10.1669 79.2888C18.9804 68.8208 31.5228 60.1345 45.4212 52.5619C78.6416 34.5213 116.947 23.1624 157.625 14.9216C213.557 3.56267 270.507 -1.11453 328.812 0.221816C367.456 1.11271 406.1 3.56267 443.388 10.6898C454.575 12.6944 465.083 15.8125 475.931 18.4852C478.643 19.1533 481.016 20.267 483.388 21.3806C489.49 24.4987 489.151 27.1714 482.372 30.0668C481.694 30.5123 480.677 30.735 479.321 31.1804ZM313.219 11.358C313.219 11.1353 313.219 10.9126 313.219 10.6898C311.185 10.6898 308.812 10.4671 306.778 10.4671C259.659 10.6898 213.218 15.1443 167.794 24.0533C128.472 31.6259 90.845 42.3166 58.6416 59.4664C45.7602 66.3708 33.8957 73.9434 25.4211 83.5205C9.82787 101.338 14.9126 120.715 39.3195 133.188C48.472 137.865 58.6416 141.651 69.1501 144.77C97.6247 153.456 127.794 158.133 158.303 161.697C202.371 166.819 246.778 168.156 291.185 167.487C343.388 166.597 394.914 161.251 444.405 150.115C467.795 144.77 490.168 138.311 510.168 128.733C522.372 122.72 532.88 115.593 539.66 106.461C547.117 96.2158 547.795 85.7478 538.982 75.7252C535.592 71.9389 531.185 68.1526 526.778 65.0345C512.202 54.7892 494.575 47.662 474.914 42.0939C450.507 35.1895 425.422 30.0668 399.32 26.726C364.744 22.0488 329.829 19.8215 294.913 24.4987C293.218 24.7214 290.846 25.1669 289.49 24.7214C287.117 23.8305 284.066 22.7169 283.388 21.3806C282.71 20.0442 284.744 17.817 286.439 16.7034C288.473 15.5898 291.524 15.1443 294.235 14.6989C300.676 13.1398 306.778 12.2489 313.219 11.358ZM421.693 18.4852C438.304 22.0488 454.575 25.3896 471.185 28.9532C455.931 22.4942 439.321 19.8215 421.693 18.4852Z" fill="#F7DF1E" />
            </svg>
          </span> From Scratch to Expert
        </h1>

        <div className="relative mb-20">
          <div className="mx-auto w-48 h-48 md:w-64 md:h-64 relative">
            <img src="/lovable-uploads/fd62cf28-89ed-4091-9d2c-177436cf58c8.png" alt="JavaScript Logo" className="w-full h-full object-contain" />
            <div className="absolute -top-6 -right-6 animate-float">
              <CircularButton variant="blue" foreground="white" />
            </div>
          </div>
        </div>

        <div className="relative">
          <MarqueeBanner />
        </div>

        <div className="absolute top-20 left-80 text-yellow-mango -rotate-12">
          <Sparkle fill="#FFD37D" width={90} height={90} />
        </div>
        <div className="absolute top-80 right-64 text-orange rotate-12">
          <Sparkle fill="#F57642" width={80} height={80} />
        </div>
        <div className="absolute top-48 left-48 text-blue-light font-bold text-[9rem] rotate-12">
          <AngularBracket />
        </div>
        <div className="absolute top-20 right-56 text-blue-dark font-bold text-9xl -rotate-[190deg]">
          <AngularBracket />
        </div>
      </div>
    </div>;
};
export default Hero;
