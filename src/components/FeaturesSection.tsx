import React from "react"
import { Card } from "./ui/card"
import { Gift } from "lucide-react"
import AngularBracket from "./icons/AngularBracket"

const FeaturesSection = () => {
  return (
    <section className='bg-black min-h-screen relative flex justify-between overflow-x-auto'>
      <div className='flex items-center justify-between gap-8 px-16 py-28'>
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
        <Card className='h-full min-w-[500px] p-16 bg-[#212121] text-white border-none rounded-xl'>
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
                className='px-3 py-1 rounded-full text-sm bg-zinc-800'
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>

        <Card className='h-full min-w-[500px] p-16 bg-[#212121] text-white border-none rounded-xl'>
          <h3 className='text-4xl font-bold mb-4'>Private Community</h3>
          <p className='text-gray-300 text-xl font-medium'>
            Join a supportive and interactive community of fellow JavaScript
            developers on Discord
          </p>
          <div className='mt-6 relative w-full h-48 flex items-center justify-center'>
            {/* Discord Logo in Center */}
            <div className='absolute z-20 bg-[#5865F2] rounded-full p-4 w-16 h-16 flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M8.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z' />
                <path d='M15.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z' />
                <path d='M18 6.75c-1.748-.667-3.8-1-6-1s-4.252.333-6 1' />
                <path d='M18 17.25c-1.748.667-3.8 1-6 1s-4.252-.333-6-1' />
                <path d='M20.25 12c0 4.557-3.694 8.25-8 8.25s-8-3.693-8-8.25S8.444 3.75 12.25 3.75s8 3.693 8 8.25z' />
              </svg>
            </div>

            {/* Profile Images with Star Background */}
            <div className='absolute top-0 w-10 h-10'>
              <div
                className='absolute inset-0 bg-yellow-mango rotate-45'
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              ></div>
              <img
                src='/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png'
                alt='Community member'
                className='absolute inset-0 w-full h-full rounded-full object-cover'
              />
            </div>
            <div className='absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10'>
              <div
                className='absolute inset-0 bg-yellow-mango rotate-45'
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              ></div>
              <img
                src='/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png'
                alt='Community member'
                className='absolute inset-0 w-full h-full rounded-full object-cover'
              />
            </div>
            <div className='absolute bottom-0 w-10 h-10'>
              <div
                className='absolute inset-0 bg-yellow-mango rotate-45'
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              ></div>
              <img
                src='/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png'
                alt='Community member'
                className='absolute inset-0 w-full h-full rounded-full object-cover'
              />
            </div>
            <div className='absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10'>
              <div
                className='absolute inset-0 bg-yellow-mango rotate-45'
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              ></div>
              <img
                src='/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png'
                alt='Community member'
                className='absolute inset-0 w-full h-full rounded-full object-cover'
              />
            </div>
          </div>
        </Card>

        <Card className='h-full min-w-[500px] p-16 bg-[#212121] text-white border-none rounded-xl'>
          <h3 className='text-4xl font-bold mb-4'>Weekly Quizzes & Gifts</h3>
          <p className='text-gray-300 mb-8 text-xl font-medium'>
            Weekly quizzes to earn exclusive rewards and gifts to celebrate your
            progress.
          </p>
          <div className='relative'>
            {/* Option Bars */}
            <div className='space-y-3'>
              <div className='bg-[#D3E4FD] text-black px-4 py-2 rounded-lg w-3/4'>
                Option A
              </div>
              <div className='bg-[#FFDEE2] text-black px-4 py-2 rounded-lg w-3/4'>
                Option B
              </div>
              <div className='bg-[#FEF7CD] text-black px-4 py-2 rounded-lg w-3/4'>
                Option C
              </div>
            </div>

            {/* Gift Icon Circle */}
            <div className='absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center'>
              <Gift size={32} className='text-[#ea384c]' />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default FeaturesSection
