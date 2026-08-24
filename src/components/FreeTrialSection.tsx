import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Dumbbell, Clock, Gift } from 'lucide-react';
import { CTA_BG_IMAGE, GYM_INFO } from '../data/gymData';

interface FreeTrialSectionProps {
  onScrollToForm: () => void;
}

export const FreeTrialSection: React.FC<FreeTrialSectionProps> = ({ onScrollToForm }) => {
  return (
    <section id="free-trial" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-zinc-950">
      {/* Background Image with Dark Gradient & Atmospheric Light */}
      <div className="absolute inset-0 z-0">
        <img
          src={CTA_BG_IMAGE}
          alt="APEXFORGE Gym Floor atmosphere with athletic equipment"
          className="w-full h-full object-cover object-center filter brightness-30 contrast-125 saturate-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)]"></div>
      </div>

      <div className="site-container relative z-10 text-center space-y-6 sm:space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase glow-amber-sm">
          <Gift className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>COMPLIMENTARY 1-DAY EXPERIENCE PASS</span>
        </div>

        {/* Big Headline */}
        <div className="space-y-2 sm:space-y-3">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-black tracking-tight uppercase leading-[0.95] break-words">
            READY TO <span className="text-gradient-amber">START?</span>
          </h2>
          <p className="text-zinc-200 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Book your complimentary demo session and explore the APEXFORGE experience.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto text-left pt-2">
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex items-center gap-3">
            <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase">18,000+ SQ. FT. ACCESS</p>
              <p className="text-zinc-400 text-[11px]">Explore all 8 dedicated training zones</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex items-center gap-3">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase">FREE 1-ON-1 FORM CHECK</p>
              <p className="text-zinc-400 text-[11px]">15-min consultation with a coach</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase">ZERO PRESSURE</p>
              <p className="text-zinc-400 text-[11px]">No automatic billing or credit card needed</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-book-free-trial-btn"
            onClick={onScrollToForm}
            className="w-full sm:w-auto group bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-zinc-950 font-black text-sm sm:text-base tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5 min-h-[48px]"
          >
            <span>BOOK FREE TRIAL</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">
          Demo pass is valid for 1 day at {GYM_INFO.address}. 100% Fictional Demo.
        </p>
      </div>
    </section>
  );
};
