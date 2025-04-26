
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-16">
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-mono text-sm mb-4">COURSE</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-light">WHATS INCLUDED</Link></li>
              <li><Link to="/" className="hover:text-blue-light">THE JOURNEY</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-sm mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-light">PRACTICAL</Link></li>
              <li><Link to="/" className="hover:text-blue-light">MEET URVASHI</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-sm mb-4">REVIEWS</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-light">TESTIMONIALS</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-sm mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-light">COOKIES POLICY</Link></li>
              <li><Link to="/" className="hover:text-blue-light">LEGAL TERMS</Link></li>
              <li><Link to="/" className="hover:text-blue-light">PRIVACY POLICY</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="diagonal-stripes">
        <div className="relative overflow-hidden">
          {/* First marquee - moving right to left */}
          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-8 py-6">
              <span className="text-3xl font-extrabold text-white">JavaScript Mastery</span>
              <span className="text-yellow-mango text-3xl">★</span>
              <span className="text-3xl font-extrabold text-white">Filling the Gap</span>
              <span className="text-yellow-mango text-3xl">★</span>
              <span className="text-3xl font-extrabold text-white">JavaScript Mastery</span>
              <span className="text-yellow-mango text-3xl">★</span>
              <span className="text-3xl font-extrabold text-white">Filling the Gap</span>
              <span className="text-yellow-mango text-3xl">★</span>
            </div>
          </div>
          {/* Second marquee - moving left to right */}
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            <div className="flex items-center gap-8 py-6">
              <span className="text-3xl font-extrabold text-white">Starts 1 May 2025</span>
              <span className="text-yellow-mango text-3xl">★</span>
              <span className="text-3xl font-extrabold text-white">6 weeks duration</span>
              <span className="text-yellow-mango text-3xl">★</span>
              <span className="text-3xl font-extrabold text-white">Starts 1 May 2025</span>
              <span className="text-yellow-mango text-3xl">★</span>
              <span className="text-3xl font-extrabold text-white">6 weeks duration</span>
              <span className="text-yellow-mango text-3xl">★</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
