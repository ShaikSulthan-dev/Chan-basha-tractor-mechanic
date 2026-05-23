import React from 'react';
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Engine Overhauls',
    'Hydraulic Calibration',
    'Welding & Structural',
    'Oil & Fluid Service',
    'Genuine Spare Parts',
    'Emergency Breakdown',
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-brand-dark-950 border-t border-brand-green-900/30 pt-16 pb-8 text-zinc-400 relative overflow-hidden">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Narrative (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <div className="bg-brand-green-900 text-brand-yellow-500 p-2 rounded-lg border border-brand-yellow-500/20">
                <Wrench className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white uppercase">
                  Chan Basha
                </span>
                <span className="text-xs font-semibold text-brand-yellow-500 uppercase tracking-widest -mt-1 flex items-center gap-1">
                  Tractor Mechanic <ShieldCheck className="h-3 w-3 text-brand-green-500 inline" />
                </span>
              </div>
            </a>
            
            <p className="text-sm leading-relaxed text-zinc-400">
              The premier tractor repair shop in Pedapavani, Andhra Pradesh. Dedicated to delivering reliable, professional, and rapid maintenance for farmers. We maximize your power!
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  aria-label={`Visit our ${soc.name} page`}
                  className="bg-brand-dark-900 hover:bg-brand-green-950 border border-zinc-800 hover:border-brand-yellow-500/30 p-2.5 rounded-lg text-zinc-300 hover:text-brand-yellow-500 transition-all duration-300"
                >
                  <soc.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-yellow-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-yellow-500 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered (3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-yellow-500 pl-3">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-3 text-sm">
              {services.map((srv) => (
                <li key={srv} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-green-500 rounded-full"></span>
                  <span className="hover:text-brand-yellow-500 transition-colors cursor-pointer">{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Footer (3 columns) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-yellow-500 pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-yellow-500 flex-shrink-0 mt-0.5" />
                <span>Kavali - Udayagiri Rd, Pedapavani, Andhra Pradesh 523115</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-yellow-500 flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-brand-yellow-500 transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-yellow-500 flex-shrink-0" />
                <a href="mailto:chanbashatractors@gmail.com" className="hover:text-brand-yellow-500 transition-colors">
                  chanbashatractors@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-zinc-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chan Basha Tractor Mechanic. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-zinc-600 font-bold uppercase tracking-wider">Trusted Agriculture Service</span>
            <span className="text-zinc-600 font-bold uppercase tracking-wider">Pedapavani, AP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
