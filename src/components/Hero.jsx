import React from 'react';
import { Phone, MessageSquare, Star, ArrowRight, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark-950"
    >
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop"
          alt="Modern tractor and repair workshop background"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform transition-transform duration-10000"
        />
        {/* Dark Green & Black Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark-950 via-brand-dark-950/80 to-brand-green-950/45"></div>
        {/* Subtle grid pattern for modern developer look */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Decorative light glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green-700/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Google 5.0 Star Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-green-950/80 border border-brand-green-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md animate-fade-in-up">
          <Award className="h-5 w-5 text-brand-yellow-500" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
            Pedapavani's Top Rated Tractor Workshop
          </span>
          <div className="flex items-center space-x-0.5 border-l border-brand-green-500/20 pl-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-brand-yellow-500 text-brand-yellow-500" />
            ))}
            <span className="text-xs font-bold text-brand-yellow-500 ml-1">5.0</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 uppercase max-w-5xl mx-auto font-sans leading-none">
          Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow-500 to-amber-500 text-glow">Tractor Repair</span> Service in Pedapavani
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl text-zinc-300 max-w-3xl mx-auto font-light mb-10 leading-relaxed">
          Reliable Tractor Repairs, Maintenance & Professional Service for Farmers & Agriculture Businesses. Keep your farm running at peak power!
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto mb-16">
          <a
            href="tel:+919999999999"
            id="hero-cta-call"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-brand-yellow-500 to-amber-600 text-brand-dark-950 font-bold px-8 py-4 rounded-xl hover:from-brand-yellow-400 hover:to-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919999999999?text=Hello%20Chan%20Basha%20Tractor%20Mechanic,%20I%20need%20a%20repair%20service%20for%20my%20tractor."
            id="hero-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-1 duration-300 border border-emerald-500/20"
          >
            <MessageSquare className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Hero Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto border-t border-brand-green-900/30 pt-10">
          {[
            { value: '100%', label: 'Farmer Satisfaction' },
            { value: '10+', label: 'Years Experience' },
            { value: '24/7', label: 'Breakdown Support' },
            { value: '5.0 ★', label: 'Google Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-4xl font-extrabold text-brand-yellow-500 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
