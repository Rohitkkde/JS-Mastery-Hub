
import React, { useRef, useEffect } from 'react';
import { Card } from './ui/card';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    
    if (!section || !container) return;
    
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        container.style.transform = `translateX(${-progress * 60}%)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-black min-h-screen relative overflow-hidden">
      <div ref={containerRef} className="flex items-center gap-8 px-8 py-20 transition-transform duration-100">
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
            {['Video tutorials', 'Practice Questions', 'JS Guides', 'Webinars', 'Doubt Sessions', 'Exclusive content'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm bg-zinc-800">
                {tag}
              </span>
            ))}
          </div>
        </Card>

        <Card className="min-w-[400px] p-8 bg-zinc-900 text-white border-none rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Private Community</h3>
          <p className="text-gray-300">
            Join a supportive and inclusive community of fellow JavaScript developers on Discord where you can share ideas,
            ask questions, and grow together.
          </p>
          <div className="mt-6">
            <img
              src="/lovable-uploads/74ae55b0-6252-48bd-8ed9-9b9e6d051c90.png"
              alt="Community members"
              className="w-32 h-32 object-cover rounded-lg"
            />
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
    </section>
  );
};

export default FeaturesSection;
