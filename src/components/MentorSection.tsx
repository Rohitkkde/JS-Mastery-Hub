
import React from 'react';
import { CirclePlay } from 'lucide-react';
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
              <div className="bg-orange/90 rounded-full p-4 transition-transform transform group-hover:scale-110">
                <CirclePlay className="w-12 h-12 text-white" />
              </div>
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
