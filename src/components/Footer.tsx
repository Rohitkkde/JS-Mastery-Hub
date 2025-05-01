import React from "react"
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import Sparkle from "./icons/Sparkle"

const Footer = () => {
  return (
    <footer className='bg-black text-white rounded-tr-[100px]'>
      <div className='container mx-auto py-16 font-mono'>
        <nav className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'>
          <div>
            <h3 className='font-sans font-bold text-sm mb-4 text-zinc-500'>COURSE</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  WHATS INCLUDED
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  THE JOURNEY
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-sans font-bold text-sm mb-4 text-zinc-500'>ABOUT</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  PRACTICAL
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  MEET URVASHI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-sans font-bold text-sm mb-4 text-zinc-500'>REVIEWS</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  TESTIMONIALS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-sans font-bold text-sm mb-4 text-zinc-500'>LEGAL</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  COOKIES POLICY
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  LEGAL TERMS
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-blue-light'>
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='bg-black'>
        <div className='relative overflow-hidden'>
          {/* First marquee - moving right to left */}
          <Marquee speed={40} gradient={false}>
            <div className='flex items-center gap-8 py-12'>
              <span className='font-extrabold text-8xl text-white'>
                JavaScript Mastery
              </span>
              <Sparkle fill={"#FFD37D"} width={64} height={64} />
              <span className='font-extrabold text-8xl text-white'>
                Filling the Gap
              </span>
              <Sparkle fill={"#FFD37D"} width={64} height={64} />
            </div>
          </Marquee>
          {/* Second marquee - moving left to right */}
          <div className='bg-yellow-mango text-black font-bold'>
            <Marquee direction="right" speed={30} gradient={false}>
              <div className='flex items-center gap-8 py-6'>
                <span className='text-3xl font-extrabold'>Starts 1 May 2025</span>
                <Sparkle fill={"#3658D3"} />
                <span className='text-3xl font-extrabold'>6 weeks duration</span>
                <Sparkle fill={"#3658D3"} />
                <span className='text-3xl font-extrabold'>Starts 1 May 2025</span>
                <Sparkle fill={"#3658D3"} />
                <span className='text-3xl font-extrabold'>
                  6 weeks duration
                </span>
                <Sparkle fill={"#3658D3"} />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
