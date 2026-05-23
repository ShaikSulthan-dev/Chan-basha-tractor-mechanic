import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* 1. Mobile Quick-Action Sticky Bottom Bar (Visible on mobile screens < 768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark-950/95 backdrop-blur-md border-t border-brand-green-900/40 px-4 py-3 flex gap-3 md:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.4)] animate-fade-in-up">
        {/* Call Now Action */}
        <a
          href="tel:+919999999999"
          id="mobile-bottom-call"
          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-yellow-500 to-amber-600 text-brand-dark-950 font-extrabold py-3.5 rounded-xl text-sm uppercase tracking-wider"
        >
          <Phone className="h-4.5 w-4.5 animate-bounce" />
          <span>Call Now</span>
        </a>
        
        {/* WhatsApp Action */}
        <a
          href="https://wa.me/919999999999?text=Hello%20Chan%20Basha%20Tractor%20Mechanic,%20I'm%20writing%20from%20your%20website%20and%20need%20tractor%20service."
          id="mobile-bottom-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 text-white font-extrabold py-3.5 rounded-xl text-sm uppercase tracking-wider"
        >
          <MessageSquare className="h-4.5 w-4.5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* 2. Desktop Floating WhatsApp Button (Pulsing, visible on screens >= 768px when scrolled) */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden md:flex items-center space-x-2 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        {/* Text Tooltip Badge */}
        <div className="bg-brand-dark-900 border border-brand-green-900 text-zinc-100 text-xs font-bold px-3 py-2 rounded-lg shadow-2xl pointer-events-none border-glow-hover">
          Need Field Help? <span className="text-brand-yellow-500 font-extrabold">Chat Now!</span>
        </div>

        {/* WhatsApp Pulsing Ring Icon */}
        <a
          href="https://wa.me/919999999999?text=Hello%20Chan%20Basha%20Tractor%20Mechanic,%20I'm%20writing%20from%20your%20website%20and%20need%20tractor%20service."
          target="_blank"
          rel="noopener noreferrer"
          id="desktop-floating-whatsapp"
          aria-label="Chat with Chan Basha on WhatsApp"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:scale-110 relative flex items-center justify-center group"
        >
          {/* Pulsing visual circles */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10 group-hover:animate-none"></span>
          
          <MessageSquare className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
