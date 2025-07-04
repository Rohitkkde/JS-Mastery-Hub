import React, { useState } from "react"
import Marquee from "react-fast-marquee"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    text: "Gain access to exclusive video tutorials structured into various modules.Gain access to exclusive video tutorials struvideo tutorials structured into various modules.",
    course: "Advanced JavaScript Concepts",
    role: "DATA SCIENTIST",
    bgColor: "bg-[#FFD37D]",
  },
  {
    text: "I just finished the JavaScript Bootcamp, and it transformed my coding skills! The structured modules and helpful video tutorials made learning easy. I'm now much more confident in building web applications!",
    course: "Advanced JavaScript Concepts",
    role: "DATA SCIENTIST",
    bgColor: "bg-[#70A2E1]",
  },
  {
    text: "Gain access to exclusive video tutorve video tutorials struvideo tutorials structured into various modules.",
    course: "Advanced JavaScript Concepts",
    role: "DATA SCIENTIST",
    bgColor: "bg-[#3658D3]",
  },
  {
    text: "The JavaScript Bootcamp exceeded all my expectations. It's perfect for anyone looking to level up their coding skills quickly!",
    course: "React Fundamentals",
    role: "FRONTEND DEVELOPER",
    bgColor: "bg-[#F57642]",
  },
]

const CommunityVoices = () => {
  return (
    <section className='py-24 overflow-hidden'>
      <div className='container mx-auto mb-16 h-full'>
        <h2 className='text-6xl lg:text-8xl leading-none font-bold text-black mb-8'>
          Community
          <br />
          Voices
        </h2>
      </div>

      <div className='relative h-full'>
        <Marquee speed={20} pauseOnHover={true} >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='mr-8 grid grid-rows-[4fr_1fr] w-[300px] lg:w-[400px] h-full'
            >
              <div className={`${testimonial.bgColor} p-12 rounded-3xl h-full`}>
                <blockquote className='text-xl lg:text-2xl font-medium'>
                  {testimonial.text}
                </blockquote>
              </div>
              <div className='flex items-center gap-4 mt-6 mb-8'>
                <Avatar>
                  <AvatarFallback className='bg-black/10'>JS</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-bold text-lg mb-1'>
                    {testimonial.course}
                  </h4>
                  <p className='text-xs font-mono'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default CommunityVoices
