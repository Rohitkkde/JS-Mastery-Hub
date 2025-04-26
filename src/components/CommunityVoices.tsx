
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    text: "Gain access to exclusive video tutorials structured into various modules.Gain access to exclusive video tutorials struvideo tutorials structured into various modules.",
    course: "Advanced JavaScript Concepts",
    role: "DATA SCIENTIST",
    bgColor: "bg-[#FFD37D]"
  },
  {
    text: "I just finished the JavaScript Bootcamp, and it transformed my coding skills! The structured modules and helpful video tutorials made learning easy. I'm now much more confident in building web applications!",
    course: "Advanced JavaScript Concepts",
    role: "DATA SCIENTIST",
    bgColor: "bg-[#70A2E1]"
  },
  {
    text: "Gain access to exclusive video tutorve video tutorials struvideo tutorials structured into various modules.",
    course: "Advanced JavaScript Concepts",
    role: "DATA SCIENTIST",
    bgColor: "bg-[#3658D3]"
  }
];

const CommunityVoices = () => {
  return (
    <section className="py-24 bg-[#FDFAF5] overflow-hidden">
      <div className="container mx-auto mb-16">
        <h2 className="text-[60px] leading-none font-bold text-black mb-8">
          Community<br />Voices
        </h2>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          className="w-full"
        >
          <CarouselContent className="flex animate-carousel">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center">
                <CarouselItem className="md:basis-[1200px] pl-8">
                  <div className={`${testimonial.bgColor} p-12 rounded-3xl min-h-[250px]`}>
                    <blockquote className="text-xl font-medium">
                      {testimonial.text}
                    </blockquote>
                  </div>
                </CarouselItem>
                <div className="flex items-center gap-4 mt-6 mb-8">
                  <Avatar>
                    <AvatarFallback className="bg-black/10">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{testimonial.course}</h4>
                    <p className="text-xs font-mono">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CommunityVoices;
