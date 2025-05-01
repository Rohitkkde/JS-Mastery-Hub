
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
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className='py-24 overflow-hidden'>
      <div className='container mx-auto mb-16'>
        <h2 className='text-8xl leading-none font-bold text-black mb-8'>
          Community
          <br />
          Voices
        </h2>
      </div>

      <div className='relative'>
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          play={!isPaused}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="mr-8"
              style={{ width: '220px', flexShrink: 0 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={`${testimonial.bgColor} p-12 rounded-3xl min-h-[250px]`}
              >
                <blockquote className='text-xl font-medium'>
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
