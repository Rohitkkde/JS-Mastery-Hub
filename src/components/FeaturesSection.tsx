import React from 'react';
import { Card } from './ui/card';

const FeaturesSection = () => {
  return <section className="bg-black min-h-screen relative overflow-x-auto">
      <div className="flex items-center gap-8 px-8 py-20">
        {/* Decorative Angular Bracket */}
        <div className="absolute top-[20%] left-[15%] transform -translate-x-1/2 -translate-y-1/2">
          
        </div>

        {/* Title */}
        <div className="min-w-[600px] text-white pl-20">
          <h2 className="text-7xl font-bold leading-tight">
            What's in<br />the box?
          </h2>
        </div>
        
        {/* Feature Cards */}
        <Card className="min-w-[400px] p-8 bg-zinc-900 text-white border-none rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Exclusive Content</h3>
          <p className="text-gray-300">
            Gain access to exclusive video tutorials structured into various modules that build upon each other.
            Each module also includes practice questions and weekly live doubt sessions along with live webinars.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Video tutorials', 'Practice Questions', 'JS Guides', 'Webinars', 'Doubt Sessions', 'Exclusive content'].map(tag => <span key={tag} className="px-3 py-1 rounded-full text-sm bg-zinc-800">
                {tag}
              </span>)}
          </div>
        </Card>

        <Card className="min-w-[400px] p-8 bg-zinc-900 text-white border-none rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Private Community</h3>
          <p className="text-gray-300">
            Join a supportive and interactive community of fellow JavaScript developers on Discord
          </p>
          <div className="mt-6 relative w-full h-48 flex items-center justify-center">
            {/* Discord Logo in Center */}
            <div className="absolute z-20 bg-[#5865F2] rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z"/>
                <path d="M15.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z"/>
                <path d="M18 6.75c-1.748-.667-3.8-1-6-1s-4.252.333-6 1"/>
                <path d="M18 17.25c-1.748.667-3.8 1-6 1s-4.252-.333-6-1"/>
                <path d="M20.25 12c0 4.557-3.694 8.25-8 8.25s-8-3.693-8-8.25S8.444 3.75 12.25 3.75s8 3.693 8 8.25z"/>
              </svg>
            </div>

            {/* Profile Images with Star Background */}
            <div className="absolute top-0 w-10 h-10">
              <div className="absolute inset-0 bg-yellow-mango rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
              <img src="/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png" alt="Community member" className="absolute inset-0 w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10">
              <div className="absolute inset-0 bg-yellow-mango rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
              <img src="/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png" alt="Community member" className="absolute inset-0 w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute bottom-0 w-10 h-10">
              <div className="absolute inset-0 bg-yellow-mango rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
              <img src="/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png" alt="Community member" className="absolute inset-0 w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10">
              <div className="absolute inset-0 bg-yellow-mango rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
              <img src="/lovable-uploads/cfa2c4b4-8953-4fa0-9eda-faace741926e.png" alt="Community member" className="absolute inset-0 w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </Card>

        <Card className="min-w-[400px] p-8 bg-zinc-900 text-white border-none rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Live Sessions</h3>
          <p className="text-gray-300">
            Participate in regular live coding sessions, workshops, and Q&A sessions to enhance your learning experience
            and get immediate feedback on your progress.
          </p>
          <div className="mt-6">
            <div className="px-4 py-2 bg-blue-600 rounded-lg inline-block">
              Join next session
            </div>
          </div>
        </Card>
      </div>
    </section>;
};

export default FeaturesSection;
