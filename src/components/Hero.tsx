import React from 'react';
import { ArrowRight, ShieldCheck, Dumbbell, Award, Flame, CheckCircle2 } from 'lucide-react';
import { GYM_INFO, HERO_IMAGE } from '../data/gymData';

interface HeroProps {
  onStartJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney }) => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-6 sm:pt-10 pb-16 sm:pb-20"
    >
      {/* Background Image with Dark Luxury Gradients and Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="APEXFORGE Luxury Gym Floor with modern barbell and strength equipment"
          className="w-full h-full object-cover object-center filter brightness-45 contrast-125 saturate-75"
          loading="eager"
        />
        {/* Multi-layered Gradients for Deep Black Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="site-container relative z-10 w-full pt-4 sm:pt-8">
        <div className="max-w-3xl space-y-5 sm:space-y-7 text-left">
          {/* Brand Eyebrow Badge */}
          <div
            id="hero-badge-pill"
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/40 text-amber-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-md glow-amber-sm"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20 flex-shrink-0" />
            <span className="truncate">{GYM_INFO.name} • {GYM_INFO.location}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1
              id="hero-main-headline"
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-black uppercase leading-[0.95] sm:leading-[0.92] break-words"
            >
              BUILD YOUR <br />
              <span className="text-gradient-amber drop-shadow-sm">STRONGEST</span> SELF.
            </h1>
          </div>

          {/* Subheadline */}
          <p
            id="hero-subheadline"
            className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl"
          >
            Premium training, expert guidance and a motivating environment designed for your fitness journey.
          </p>

          {/* Value Props Bar */}
          <div
            id="hero-value-props"
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-zinc-200 pt-1"
          >
            {GYM_INFO.heroBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-zinc-900/70 px-2.5 sm:px-3 py-1.5 rounded-lg border border-zinc-800/80 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{badge}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            id="hero-action-buttons"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <button
              id="hero-start-journey-btn"
              onClick={onStartJourney}
              className="group bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm md:text-base tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="hero-view-memberships-btn"
              href="#memberships"
              className="bg-zinc-900/80 hover:bg-zinc-800 text-white hover:text-amber-300 font-bold text-xs sm:text-sm md:text-base tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-zinc-700/80 hover:border-amber-500/60 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md text-center min-h-[44px]"
            >
              VIEW MEMBERSHIPS
            </a>
          </div>

          {/* Quick Facility Highlights Footer Strip */}
          <div
            id="hero-facility-quick-features"
            className="pt-6 sm:pt-8 border-t border-zinc-800/70 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 sm:bg-transparent sm:border-0 sm:p-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-amber-400">
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">18,000+ SQ. FT.</p>
                <p className="text-zinc-400 text-[11px]">8 Specialized Zones</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 sm:bg-transparent sm:border-0 sm:p-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-amber-400">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">CERTIFIED COACHES</p>
                <p className="text-zinc-400 text-[11px]">Custom Form Clinics</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 sm:bg-transparent sm:border-0 sm:p-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-amber-400">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">NO HIDDEN CLAIMS</p>
                <p className="text-zinc-400 text-[11px]">Pure Demo Website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
