import React from 'react';
import { ShieldCheck, UserCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Experienced Tractor Mechanic',
      desc: 'Over a decade of master hands-on experience handling all tractor models and engines.',
      icon: UserCheck,
    },
    {
      title: 'Trusted Local Service',
      desc: 'Proudly serving Pedapavani, Mutyalapadu, Kavali, and surrounding farming villages.',
      icon: ShieldCheck,
    },
    {
      title: 'Fast & Timely Repairs',
      desc: 'We value your farming schedule. Get your tractor serviced and returned to the field quickly.',
      icon: Clock,
    },
  ];

  const valueProps = [
    '100% Customer Satisfaction Guarantee',
    'Genuine Spare Parts & Component Upgrades',
    'Advanced Engine Diagnostics & Repair',
    'Heavy-Duty Welding & Structural Maintenance',
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark-950 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-green-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visual Assets with Floating Badge */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden border border-brand-green-900/40 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop"
                alt="Expert mechanic working on a heavy machinery engine"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-950 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 bg-gradient-to-br from-brand-green-900 to-brand-green-950 border border-brand-yellow-500/30 p-6 rounded-2xl shadow-2xl max-w-xs text-center backdrop-blur-md">
              <div className="text-4xl font-extrabold text-brand-yellow-500 mb-1">10+</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">Years of Trust</div>
              <div className="text-xs text-zinc-400 mt-1">Servicing agricultural power machines since 2016.</div>
            </div>
          </div>

          {/* Right Column: Copywriting & Value Pillars */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-green-900/50 border border-brand-green-500/20 px-3 py-1 rounded-md mb-4">
              <span className="text-xs font-bold text-brand-yellow-500 uppercase tracking-widest">About Our Workshop</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 uppercase">
              Keep Your Farm Moving With <span className="text-brand-yellow-500">Unmatched Power</span>
            </h2>

            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              At <strong className="text-white font-semibold">Chan Basha Tractor Mechanic</strong>, we understand that a tractor is not just a vehicle—it is the lifeblood of a farmer's livelihood. Centrally located on Kavali - Udayagiri Road in Pedapavani, we have earned the reputation of being the most trusted, reliable, and expert tractor garage in the region. 
            </p>

            {/* Core Pillars List */}
            <div className="space-y-6 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex space-x-4 items-start">
                  <div className="flex-shrink-0 bg-brand-green-950 text-brand-yellow-500 border border-brand-green-500/30 p-3 rounded-lg mt-1">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkmark Bullets */}
            <div className="border-t border-brand-green-900/30 pt-8">
              <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Why Local Farmers Choose Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {valueProps.map((prop, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-yellow-500 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
