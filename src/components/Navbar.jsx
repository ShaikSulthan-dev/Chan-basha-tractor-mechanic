import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark-950/90 backdrop-blur-md border-b border-brand-green-900/30 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="bg-brand-green-900 text-brand-yellow-500 p-2 rounded-lg border border-brand-yellow-500/20 group-hover:border-brand-yellow-500/50 transition-colors">
              <Wrench className="h-6 w-6 transform group-hover:rotate-45 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-sans uppercase">
                Chan Basha
              </span>
              <span className="text-xs font-semibold text-brand-yellow-500 uppercase tracking-widest -mt-1 flex items-center gap-1">
                Tractor Mechanic <ShieldCheck className="h-3 w-3 inline text-brand-green-500" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-brand-yellow-500 text-sm font-medium transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="tel:+919999999999" // Placeholder number
              id="nav-cta-call"
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-yellow-500 to-amber-600 text-brand-dark-950 font-bold px-5 py-2.5 rounded-lg hover:from-brand-yellow-400 hover:to-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 99999 99999</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="text-zinc-300 hover:text-brand-yellow-500 p-2 rounded-md transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-brand-dark-950/95 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden border-t border-brand-green-900/30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-200 hover:text-brand-yellow-500 text-lg font-semibold border-b border-zinc-800/40 pb-3 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919999999999"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-yellow-500 to-amber-600 text-brand-dark-950 font-bold py-3.5 rounded-lg hover:shadow-lg transition-all"
          >
            <Phone className="h-5 w-5" />
            <span>Call +91 99999 99999</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
