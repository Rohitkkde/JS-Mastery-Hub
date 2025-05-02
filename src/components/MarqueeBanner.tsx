
import React, { useRef } from "react"
import Marquee from "react-fast-marquee"
import Sparkle from "./icons/Sparkle"
import { motion, useInView } from "framer-motion"

const MarqueeBanner = () => {
  // Create refs for animation triggers
  const orangeBannerRef = useRef(null)
  const blackBannerRef = useRef(null)
  
  // Check if elements are in view
  const isOrangeBannerInView = useInView(orangeBannerRef, { once: true, amount: 0.2 })
  const isBlackBannerInView = useInView(blackBannerRef, { once: true, amount: 0.2 })
  
  // Animation variants
  const bannerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  // Create content for marquees
  const orangeContent = (
    <div className='flex items-center font-bold text-xl lg:text-4xl text-white'>
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
    <div className='flex items-center font-bold text-xl lg:text-4xl text-white'>
      <span className='inline-block mx-4'>Lifetime access</span>
      <span className='inline-block mx-4 w-[38px] h-[38px]'>
        <Sparkle />
      </span>
    </div>
  )
  return (
    <div className='relative'>
      {/* First banner - clockwise rotation */}
      <motion.div 
        ref={orangeBannerRef}
        className='w-[150%] -left-[25%] bg-[#F57642] overflow-hidden py-4 lg:py-8 absolute -top-24 rotate-[12deg] lg:rotate-[9deg] z-10'
        variants={bannerVariants}
        initial="hidden"
        animate={isOrangeBannerInView ? "visible" : "hidden"}
      >
        <Marquee
          direction='right'
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {orangeContent}
        </Marquee>
      </motion.div>

      {/* Second banner - anti-clockwise rotation */}
      <motion.div 
        ref={blackBannerRef}
        className='w-[150%] -left-[25%] bg-black bg-opacity-100 overflow-hidden py-4 lg:py-8 absolute -top-24 -rotate-[12deg] lg:-rotate-[9deg] z-0'
        variants={bannerVariants}
        initial="hidden"
        animate={isBlackBannerInView ? "visible" : "hidden"}
      >
        <Marquee
          direction='left'
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {blackContent}
        </Marquee>
      </motion.div>
    </div>
  )
}
export default MarqueeBanner
