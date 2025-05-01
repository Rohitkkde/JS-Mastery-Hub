import React from "react"
import Marquee from "react-fast-marquee"
import Sparkle from "./icons/Sparkle"

const MarqueeBanner = () => {
  // Create content for marquees
  const orangeContent = (
    <div className='flex items-center font-bold text-4xl text-white'>
      <span className='inline-block mx-4'>Starts 1 May 2025</span>
      <span className='inline-block mx-4 w-[38px] h-[38px]'>
        <Sparkle />
      </span>
      <span className='inline-block mx-4'>6 weeks duration</span>
      <span className='inline-block mx-4 w-[38px] h-[38px]'>
        <Sparkle />
      </span>
    </div>
  )
  const blackContent = (
    <div className='flex items-center font-bold text-4xl text-white'>
      <span className='inline-block mx-4'>Lifetime access</span>
      <span className='inline-block mx-4 w-[38px] h-[38px]'>
        <Sparkle />
      </span>
    </div>
  )
  return (
    <div className='relative'>
      {/* First banner - clockwise rotation */}
      <div className='w-[150%] -left-[25%] bg-[#F57642] overflow-hidden py-8 absolute -top-24 rotate-[9deg] z-10'>
        <Marquee
          direction='right'
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {orangeContent}
        </Marquee>
      </div>

      {/* Second banner - anti-clockwise rotation */}
      <div className='w-[150%] -left-[25%] bg-black bg-opacity-100 overflow-hidden py-8 absolute -top-24 -rotate-[9deg] z-0'>
        <Marquee
          direction='left'
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {blackContent}
        </Marquee>
      </div>
    </div>
  )
}
export default MarqueeBanner
