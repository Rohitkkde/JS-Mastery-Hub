
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
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto mb-16">
        <h2 className="text-[120px] leading-none font-bold text-white mb-8">
          Community<br />Voices
        </h2>
      </div>

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
            <CarouselItem key={index} className="md:basis-[600px] pl-8">
              <div className={`${testimonial.bgColor} p-12 rounded-3xl min-h-[400px] flex flex-col justify-between`}>
                <blockquote className="text-2xl font-medium mb-8">
                  {testimonial.text}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-black/10">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{testimonial.course}</h4>
                    <p className="text-sm font-mono">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CommunityVoices;
