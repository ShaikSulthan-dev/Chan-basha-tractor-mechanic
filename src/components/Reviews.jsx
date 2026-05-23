import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "Excellent mechanic shop! Chan Basha fixed Swaraj tractor's engine smoke issues in just one day. Very professional and reasonable charges.",
      author: "Venkatesh Rao",
      role: "Paddy Farmer, Pedapavani",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      text: "Best garage in the Kavali - Udayagiri road. They provided prompt field breakdown support when my clutch plate failed in the middle of cultivating.",
      author: "Suresh Reddy",
      role: "Tractor Owner, Kavali",
      rating: 5,
      date: "1 month ago"
    },
    {
      text: "Exceptional welding and repair quality. Honest diagnostic process and transparent costing. My rotavator runs like brand new now!",
      author: "K. Rama Naidu",
      role: "Agriculturalist, Mutyalapadu",
      rating: 5,
      date: "3 weeks ago"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-dark-950 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-green-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green-900/50 border border-brand-green-500/20 px-3 py-1 rounded-md mb-4">
            <span className="text-xs font-bold text-brand-yellow-500 uppercase tracking-widest">Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            What Our <span className="text-brand-yellow-500">Farmers Say</span>
          </h2>
          
          {/* Main Trust Summary */}
          <div className="flex items-center justify-center space-x-2 mt-4 bg-brand-dark-900 border border-zinc-800 px-6 py-3 rounded-xl inline-flex">
            <span className="text-lg font-bold text-white">Google Rating:</span>
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-yellow-500 text-brand-yellow-500" />
              ))}
            </div>
            <span className="text-lg font-extrabold text-brand-yellow-500">5.0</span>
            <span className="text-zinc-500 border-l border-zinc-800 pl-2 text-sm hidden sm:inline">100% Recommended</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-brand-dark-900/50 border border-zinc-800/80 rounded-2xl p-8 relative flex flex-col justify-between hover:border-brand-green-500/30 transition-all duration-300 shadow-lg group"
            >
              {/* Quote Mark background */}
              <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-brand-green-950 transition-colors pointer-events-none -z-10">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div>
                {/* 5-Star Row */}
                <div className="flex items-center space-x-0.5 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-brand-yellow-500 text-brand-yellow-500" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-zinc-300 italic text-base leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="flex items-center space-x-3 pt-6 border-t border-zinc-800/60">
                <div className="bg-brand-green-900/30 border border-brand-green-500/20 text-brand-yellow-500 h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm uppercase">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1">
                    {review.author}
                    <ShieldCheck className="h-4 w-4 text-brand-green-500 inline" />
                  </h4>
                  <div className="flex justify-between items-center w-full min-w-[200px]">
                    <span className="text-xs text-zinc-400 font-medium">{review.role}</span>
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
