import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare,
  Navigation,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const contactDetails = {
    address: 'Kavali - Udayagiri Rd, Pedapavani, Mutyalapadu, Andhra Pradesh 523115',
    phone: '+91 99999 99999',
    whatsapp: '+91 99999 99999',
    hours: [
      { days: 'Monday - Saturday', time: '8:00 AM - 8:00 PM' },
      { days: 'Sunday', time: '8:00 AM - 2:00 PM (Emergency Call Support)' },
    ],
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green-900/50 border border-brand-green-500/20 px-3 py-1 rounded-md mb-4">
            <span className="text-xs font-bold text-brand-yellow-500 uppercase tracking-widest">Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            Visit Our <span className="text-brand-yellow-500">Workshop</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Stop by for routine checkups or call us for field breakdown assistance. Located right on the highway for easy tractor transport.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details (Left Column - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Info Cards */}
            <div className="space-y-6">
              
              {/* Address Card */}
              <div className="bg-brand-dark-900/40 border border-zinc-800 p-6 rounded-2xl flex items-start space-x-4 hover:border-brand-green-500/20 transition-colors">
                <div className="bg-brand-green-950/80 text-brand-yellow-500 border border-brand-green-500/20 p-3.5 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Our Workshop Location</h4>
                  <p className="text-white text-base font-semibold leading-relaxed">
                    {contactDetails.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-yellow-500 font-bold text-xs uppercase tracking-wider mt-3 hover:text-white transition-colors"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-brand-dark-900/40 border border-zinc-800 p-6 rounded-2xl flex items-start space-x-4 hover:border-brand-green-500/20 transition-colors">
                <div className="bg-brand-green-950/80 text-brand-yellow-500 border border-brand-green-500/20 p-3.5 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">Call Now (Phone support)</h4>
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                    id="contact-call-link"
                    className="text-white text-xl font-extrabold hover:text-brand-yellow-500 transition-colors block"
                  >
                    {contactDetails.phone}
                  </a>
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mt-1 block">Tap to call from your mobile device</span>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-brand-dark-900/40 border border-zinc-800 p-6 rounded-2xl flex items-start space-x-4 hover:border-brand-green-500/20 transition-colors">
                <div className="bg-brand-green-950/80 text-brand-yellow-500 border border-brand-green-500/20 p-3.5 rounded-xl flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3">Business Hours</h4>
                  <div className="space-y-2">
                    {contactDetails.hours.map((h, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row justify-between text-sm pb-2 border-b border-zinc-900/60 last:border-0 last:pb-0">
                        <span className="text-zinc-200 font-semibold">{h.days}</span>
                        <span className="text-brand-green-400 font-bold">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Contact Form Button or Direct WhatsApp Card */}
            <div className="bg-gradient-to-br from-brand-green-950 to-brand-dark-900 border border-brand-green-500/20 p-8 rounded-2xl text-center shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Need Immediate Field Rescue?</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Send us details of your tractor breakdown or service requirement directly on WhatsApp for lightning-fast replies.
              </p>
              <a
                href="https://wa.me/919999999999?text=Hello%20Chan%20Basha%20Tractor%20Mechanic,%20my%20tractor%20needs%20urgent%20repairs!"
                id="contact-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Text On WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed (Right Column - 7 cols) */}
          <div className="lg:col-span-7 h-[450px] lg:h-auto min-h-[400px] relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-brand-dark-900 flex flex-col">
            
            {/* Real Styled Google Map Iframe */}
            <iframe
              title="Chan Basha Tractor Mechanic Location Map in Pedapavani"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.757134370217!2d79.79979927591605!3d14.887208885633887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb398be3855ff5f%3A0x8687ea7ce424e88d!2sKavali%20-%20Udayagiri%20Rd%2C%20Pedapavani%2C%20Andhra%20Pradesh%20523115!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-grow"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Bottom Floating Map Details */}
            <div className="absolute bottom-4 left-4 right-4 bg-brand-dark-950/90 border border-zinc-800 p-4 rounded-xl backdrop-blur-md flex items-center justify-between shadow-2xl pointer-events-auto">
              <div>
                <h5 className="text-white text-sm font-bold uppercase tracking-wide">Chan Basha Garage</h5>
                <p className="text-zinc-400 text-xs mt-0.5">Pedapavani, Andhra Pradesh</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-dark-950 font-bold text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Open App</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
