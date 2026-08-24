import React from 'react';
import { Star, MessageSquareQuote, ShieldAlert, CheckCircle2, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-28 bg-[#09090b] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <MessageSquareQuote className="w-3.5 h-3.5 flex-shrink-0" />
            <span>COMMUNITY FEEDBACK</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            WHAT OUR MEMBERS SAY <br />
            <span className="text-gradient-amber">ABOUT THE APEXFORGE EXPERIENCE</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Real training vibes, supportive culture, and modern equipment that make fitness a seamless part of your daily lifestyle.
          </p>

          {/* Demo Disclaimer Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-semibold text-center">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>DEMO REVIEWS — Fictional member feedback illustrated for website demonstration.</span>
          </div>
        </div>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-[#121216] border border-zinc-800/80 rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 relative group"
            >
              {/* Quote Icon watermark */}
              <MessageSquareQuote className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-zinc-800/60 pointer-events-none group-hover:text-amber-500/10 transition-colors" />

              <div className="space-y-3 sm:space-y-4">
                {/* 5-Star Ratings */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] sm:text-xs font-bold text-zinc-400 ml-2 font-mono">5.0 / 5.0</span>
                </div>

                {/* Quote Text */}
                <p className="text-zinc-200 text-xs sm:text-sm md:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400 font-bold text-xs sm:text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-xs sm:text-sm tracking-wide truncate">
                      {t.name}
                    </h3>
                    <p className="text-zinc-400 text-[11px] sm:text-xs truncate">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-[9px] sm:text-[10px] text-amber-400/90 font-semibold block uppercase tracking-wider">
                    {t.goal}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-zinc-400 block font-mono">
                    {t.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Bar */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">4.9 / 5.0 Average Community Rating</p>
              <p className="text-zinc-400 text-xs">Based on simulated demo reviews in Nova City, Bihar</p>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-zinc-400 font-mono">
            Demo Environment • No Real Reviews Claimed
          </div>
        </div>
      </div>
    </section>
  );
};
