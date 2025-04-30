
import React, { useRef, useEffect, useState } from "react"
import { Card } from "./ui/card"
import AngularBracket from "./icons/AngularBracket"
import Sparkle from "./icons/Sparkle"
import DiscordIcon from "./icons/DiscordIcon"
import { useSpring, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'

const FeaturesSection = () => {
  // For tracking scroll position
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const [inViewRef, inView] = useMeasure()
  
  // Define a set of colors from our theme that work well for pills
  const pillColors = [
    'bg-blue-light/80',
    'bg-yellow-mango/80', 
    'bg-orange/80',
    'bg-blue-dark/80',
    'bg-yellow-lemon/80',
  ]

  // Function to get a random color from our array
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * pillColors.length)
    return pillColors[randomIndex]
  }

  // Setup spring animation for horizontal scroll
  const [{ x }, api] = useSpring(() => ({ 
    x: 0,
    config: { mass: 1, tension: 120, friction: 26 }
  }))

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return
      
      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const scrollHeight = section.offsetHeight - window.innerHeight
      
      // Calculate how far we've scrolled into the section (0 to 1)
      const viewportTop = 0
      const viewportBottom = window.innerHeight
      
      // When section enters viewport from the top
      if (rect.top <= viewportTop && rect.bottom >= viewportBottom) {
        const progress = Math.abs(rect.top) / scrollHeight
        setScrollProgress(Math.min(progress, 1))
      }
      // When section is fully in viewport
      else if (rect.top > viewportTop && rect.bottom < viewportBottom) {
        setScrollProgress(0)
      }
      // When section exits viewport from the bottom
      else if (rect.bottom < viewportBottom) {
        setScrollProgress(1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update animation based on scroll progress
  useEffect(() => {
    if (inView) {
      const maxScroll = 600 // Maximum horizontal scroll distance in pixels
      api.start({ x: -scrollProgress * maxScroll })
    }
  }, [scrollProgress, api, inView])

  // Set ref both for scroll tracking and inView detection
  const setRefs = (el) => {
    sectionRef.current = el
    inViewRef(el)
  }

  return (
    <section 
      ref={setRefs}
      className='bg-black min-h-[300vh] relative overflow-hidden'
      style={{ position: 'relative' }}
    >
      <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden'>
        <animated.div
          ref={contentRef}
          style={{ x }}
          className='flex items-center gap-8 px-16 py-28 w-[300%] absolute left-1/2 transform -translate-x-1/2'
        >
          {/* Title */}
          <div className='min-w-[700px] text-white'>
            <span className='inline-block text-orange font-bold text-9xl rotate-[30deg]'>
              <AngularBracket />
            </span>
            <h2 className='text-9xl font-bold leading-tight'>
              What's in
              <br />
              the box?
            </h2>
          </div>

          {/* Feature Cards */}
          <Card className='h-full min-w-[500px] p-16 bg-[#212121] text-white border-none rounded-xl shrink-0'>
            <h3 className='text-4xl font-bold mb-4'>Exclusive Content</h3>
            <p className='text-gray-300 text-xl font-medium'>
              Gain access to exclusive video tutorials structured into various
              modules that build upon each other. Each module also includes
              practice questions and weekly live doubt sessions along with live
              webinars.
            </p>
            <div className='mt-6 flex flex-wrap gap-2'>
              {[
                "Video tutorials",
                "Practice Questions",
                "JS Guides",
                "Webinars",
                "Doubt Sessions",
                "Exclusive content",
              ].map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm text-black font-medium ${getRandomColor()}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          <Card className='h-full min-w-[500px] p-16 bg-[#212121] text-white border-none rounded-xl shrink-0'>
            <h3 className='text-4xl font-bold mb-4'>Private Community</h3>
            <p className='text-gray-300 text-xl font-medium'>
              Join a supportive and interactive community of fellow JavaScript
              developers on Discord
            </p>
            <div className='mt-6 relative w-full flex items-center justify-center'>
              {/* 3x3 Grid with Discord in center and alternating images/sparkles */}
              <div className="relative w-60 h-60 grid grid-cols-3 gap-2">
                {/* Top Row */}
                <div className="relative">
                  <img
                    src='/lovable-uploads/07d84dbe-195e-401b-8452-d75a59ced836.png'
                    alt="Community member"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#212121]" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Sparkle fill="#FFD37D" width={56} height={56} />
                </div>
                <div className="relative">
                  <img
                    src='/lovable-uploads/07d84dbe-195e-401b-8452-d75a59ced836.png'
                    alt="Community member"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#212121]" />
                  </div>
                </div>

                {/* Middle Row */}
                <div className="flex items-center justify-center">
                  <Sparkle fill="#FFD37D" width={56} height={56} />
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-20 h-20 rounded-full bg-[#5865F2] flex items-center justify-center">
                    <DiscordIcon className="text-white w-10 h-10" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Sparkle fill="#FFD37D" width={56} height={56} />
                </div>

                {/* Bottom Row */}
                <div className="relative">
                  <img
                    src='/lovable-uploads/07d84dbe-195e-401b-8452-d75a59ced836.png'
                    alt="Community member"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#212121]" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Sparkle fill="#FFD37D" width={56} height={56} />
                </div>
                <div className="relative">
                  <img
                    src='/lovable-uploads/07d84dbe-195e-401b-8452-d75a59ced836.png'
                    alt="Community member"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#212121]" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className='h-full min-w-[500px] p-16 bg-[#212121] text-white border-none rounded-xl shrink-0'>
            <h3 className='text-4xl font-bold mb-4'>Weekly Quizzes & Gifts</h3>
            <p className='text-gray-300 mb-8 text-xl font-medium'>
              Weekly quizzes to earn exclusive rewards and gifts to celebrate your
              progress.
            </p>
            <div className='relative'>
              {/* Option Bars */}
              <div className='space-y-3 font-medium text-lg'>
                <div className='bg-[#70A2E1] text-black px-6 py-3 rounded-lg w-3/4'>
                  Option A
                </div>
                <div className='bg-[#FFBABA] text-black px-6 py-3 rounded-lg w-3/4'>
                  Option B
                </div>
                <div className='bg-[#FFD37D] text-black px-6 py-3 rounded-lg w-3/4'>
                  Option C
                </div>
              </div>

              {/* SVG Gift Badge */}
              <svg
                width="209"
                height="209"
                viewBox="0 0 209 209"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48"
              >
                <path d="M209 104.5C209 112.604 205.838 120.229 200.114 125.953L187.277 138.789V156.932C187.277 173.652 173.666 187.271 156.952 187.271H138.803L125.973 200.107C120.229 205.838 112.611 209 104.5 209C96.3895 209 88.7711 205.838 83.0337 200.101L70.2173 187.298H52.068C43.9574 187.298 36.3458 184.129 30.6084 178.412C24.871 172.661 21.7293 165.07 21.7293 156.959V138.796L8.89261 125.973C3.16197 120.229 0 112.604 0 104.5C0 96.3962 3.16197 88.7711 8.88587 83.0472L21.7225 70.2173V52.0747C21.7225 35.348 35.3345 21.736 52.0477 21.736H70.197L83.0404 8.89261C88.7711 3.16197 96.3895 0 104.5 0C112.611 0 120.229 3.16197 125.966 8.89935L138.783 21.7158H156.932C165.029 21.7158 172.654 24.871 178.385 30.5949C184.129 36.339 187.271 43.9507 187.271 52.0545V70.2038L200.107 83.0404C205.838 88.7711 209 96.3962 209 104.5Z" fill="#D9DFF8"/>
                <g clipPath="url(#clip0_150_220)">
                  <path d="M68.375 86.1875L104 104L139.625 86.1875V124.188L104 142L68.375 124.188V86.1875Z" fill="#DB5449"/>
                  <path d="M68.375 89.75V100.853L103.881 118.25L139.625 100.794V89.75L104 107.206L68.375 89.75Z" fill="#C54B42"/>
                  <path d="M104 142V104L70.75 87.375H68.375V124.188L104 142Z" fill="#D05045"/>
                  <path d="M68.375 89.75V100.853L103.881 118.25L104 118.191V107.147V107.206L68.375 89.75Z" fill="#BB483E"/>
                  <path d="M66 84.9406L104 66L142 84.9406V87.4344L104 106.375L66 87.4937V84.9406Z" fill="#EB6258"/>
                  <path d="M125.791 71.9969C124.544 69.7406 121.872 68.375 118.725 68.375C111.541 68.375 106.494 75.0844 104 79.3594C101.506 75.0844 96.4 68.4344 89.275 68.4344C84.7031 68.4344 81.4375 71.225 81.4375 75.025C81.4375 81.7937 88.8594 86.1875 103.762 86.1875C118.666 86.1875 126.562 80.5469 126.562 75.0844C126.562 74.0156 126.325 72.9469 125.791 71.9969ZM90.8187 79.3C89.1562 78.1719 88.5625 76.925 88.5625 76.0938C88.5625 75.0844 89.5125 74.3125 90.8781 74.3125C94.0844 74.3125 96.6375 78.5281 98.0625 81.4375C94.3219 81.1406 92.125 80.1312 90.8187 79.3ZM117.181 79.3C115.875 80.1312 113.678 81.1406 109.938 81.4375C111.303 78.5281 113.856 74.3125 117.122 74.3125C118.487 74.3125 119.438 75.0844 119.438 76.0938C119.438 76.925 118.844 78.1719 117.181 79.3Z" fill="#EFEFEF"/>
                  <path d="M66 85L104 103.584L142 85V97.2906L103.881 115.875L66 97.2906V85Z" fill="#E2574C"/>
                  <path d="M118.25 98.2407V96.875L104 89.1563L89.75 96.875V98.2407L80.25 94.0844V92.1844L103.525 79.8938L104 80.1313L104.475 79.8938L127.75 92.125V94.025L118.25 98.2407Z" fill="#EFEFEF"/>
                  <path d="M118.25 96.875V134.816L127.75 130.066V92.125L118.25 96.875Z" fill="#DCDCDC"/>
                  <path d="M80.25 130.125L89.75 134.875V96.9344L80.25 92.125V130.125Z" fill="#D1D1D1"/>
                </g>
                <defs>
                  <clipPath id="clip0_150_220">
                    <rect width="76" height="76" fill="white" transform="translate(66 66)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Card>
        </animated.div>
      </div>
    </section>
  )
}

export default FeaturesSection
