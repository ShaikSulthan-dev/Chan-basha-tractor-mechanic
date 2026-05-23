import React from 'react';
import { 
  Settings, 
  Wrench, 
  Droplet, 
  PhoneCall, 
  Cpu, 
  Hammer,
  ArrowRight 
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Tractor Engine Repair',
      desc: 'Complete engine overhauls, piston assemblies, valve tuning, cylinder boring, and smoke emission solutions for maximum horsepower.',
      icon: Settings,
      details: 'For Mahindra, John Deere, Massey Ferguson, Swaraj, Sonalika, etc.',
    },
    {
      title: 'Tractor Maintenance',
      desc: 'Regular multi-point checkups, clutch replacements, brake adjustment, hydraulic calibration, and radiator cooling system service.',
      icon: Wrench,
      details: 'Includes mechanical tuning & filter checkups.',
    },
    {
      title: 'Oil & Lube Change',
      desc: 'Premium grade engine oil, high-viscosity hydraulic fluids, gear oil replenishment, and thorough grease point lubrication.',
      icon: Droplet,
      details: 'Ensures rust protection & seamless gear transitions.',
    },
    {
      title: 'Breakdown Support',
      desc: 'Stuck in the field? Our mobile mechanic service comes directly to your agricultural field or village for immediate rescue repairs.',
      icon: PhoneCall,
      details: 'Pedapavani, Mutyalapadu, and Kavali road areas covered.',
    },
    {
      title: 'Spare Parts Assistance',
      desc: 'Sourcing and fitting original manufacturer components, seals, gaskets, filters, electrical starters, and high-durability tractor batteries.',
      icon: Cpu,
      details: '100% genuine spares & accessories.',
    },
    {
      title: 'Welding & Structural Works',
      desc: 'Heavy-duty arc welding for broken plows, rotavator shaft alignments, cultivator repair, trailer modification, and frame reinforcements.',
      icon: Hammer,
      details: 'Reinforced custom welding and mechanical assemblies.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark-900 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-950/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green-950/80 border border-brand-green-500/30 px-3 py-1 rounded-md mb-4">
            <span className="text-xs font-bold text-brand-yellow-500 uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            Heavy-Duty <span className="text-brand-yellow-500">Tractor Services</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We handle everything from major engine overhauls to on-field breakdown emergencies. Trusted solutions tailored to keep farmers productive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="bg-brand-dark-950/60 border border-zinc-800/60 rounded-2xl p-8 hover:border-brand-yellow-500/30 hover:bg-brand-dark-950 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Service Icon with Glow */}
                <div className="bg-brand-green-950/50 text-brand-yellow-500 border border-brand-green-500/20 p-4 rounded-xl inline-block mb-6 group-hover:border-brand-yellow-500/30 group-hover:bg-brand-green-900 transition-all">
                  <service.icon className="h-6 w-6 transform group-hover:rotate-12 transition-transform" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
              </div>

              {/* Action and Highlights */}
              <div className="mt-6 pt-6 border-t border-zinc-900/60">
                <span className="text-xs font-semibold text-brand-green-400 block mb-4">
                  {service.details}
                </span>
                
                {/* Book service CTA */}
                <a
                  href={`https://wa.me/919999999999?text=Hello%20Chan%20Basha%20Tractor%20Mechanic,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-brand-yellow-500 uppercase tracking-widest group-hover:text-white transition-colors gap-1.5"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
