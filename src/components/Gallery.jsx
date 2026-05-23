import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Engine', 'Maintenance', 'Welding & Spares'];

  const galleryItems = [
    {
      id: 1,
      title: 'Mahindra Engine Overhaul',
      category: 'Engine',
      image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=800&auto=format&fit=crop',
      desc: 'Precision disassembly and assembly of a heavy-duty Mahindra tractor engine head.'
    },
    {
      id: 2,
      title: 'Hydraulic System Calibration',
      category: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop',
      desc: 'Calibrating tractor rear hydraulics for heavy cultivator loads.'
    },
    {
      id: 3,
      title: 'Arc Welding & Rotavator Repair',
      category: 'Welding & Spares',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
      desc: 'High-strength structural arc welding to reinforce a broken agricultural rotavator frame.'
    },
    {
      id: 4,
      title: 'Fuel Injector Cleaning & Service',
      category: 'Engine',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=800&auto=format&fit=crop',
      desc: 'Tuning diesel fuel injectors for optimal compression ratio and black smoke removal.'
    },
    {
      id: 5,
      title: 'On-Field Breakdown Diagnostics',
      category: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop',
      desc: 'Conducting emergency gearbox inspection directly in the wheat cultivation field.'
    },
    {
      id: 6,
      title: 'Premium Tractor Hub Assembly',
      category: 'Welding & Spares',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      desc: 'New front-wheel bearing replacement and planetary gear grease application.'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-brand-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green-950/80 border border-brand-green-500/30 px-3 py-1 rounded-md mb-4">
            <span className="text-xs font-bold text-brand-yellow-500 uppercase tracking-widest">Our Work Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            Workshop <span className="text-brand-yellow-500">Gallery</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Real pictures of engine diagnostics, heavy welding, and field breakdown rescues done by Chan Basha.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-brand-yellow-500 to-amber-600 border-brand-yellow-500 text-brand-dark-950 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-brand-dark-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/80 bg-brand-dark-950 shadow-xl aspect-video"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-950 via-brand-dark-950/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                {/* Details */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold text-brand-yellow-500 bg-brand-yellow-500/10 px-2 py-0.5 rounded border border-brand-yellow-500/20 uppercase tracking-widest mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-brand-yellow-500 font-bold text-[10px] uppercase tracking-wider mt-3">
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>Zoom Image</span>
                  </div>
                </div>
              </div>

              {/* Eye Button Overlay for tap on mobile */}
              <div className="absolute top-4 right-4 bg-brand-dark-950/80 border border-zinc-800/60 p-2.5 rounded-full text-zinc-300 md:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Eye className="h-4.5 w-4.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-brand-dark-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content Container */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video md:aspect-auto md:h-[450px]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between bg-brand-dark-950">
                <div>
                  <span className="text-[10px] font-bold text-brand-yellow-500 bg-brand-yellow-500/10 px-2 py-0.5 rounded border border-brand-yellow-500/20 uppercase tracking-widest mb-4 inline-block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-4 leading-snug">
                    {selectedImage.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {selectedImage.desc}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <span className="text-xs text-zinc-500 font-bold uppercase">Chan Basha Workshop</span>
                  <a
                    href="tel:+919999999999"
                    className="bg-brand-green-900 hover:bg-brand-green-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-brand-green-500/20 uppercase"
                  >
                    Ask About This
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
