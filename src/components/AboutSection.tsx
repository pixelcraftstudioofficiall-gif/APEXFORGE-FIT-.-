import React from 'react';
import { Check, Shield, Zap, Sparkles, Compass, MapPin, ArrowUpRight } from 'lucide-react';
import { GYM_INFO, ABOUT_IMAGE } from '../data/gymData';

interface AboutSectionProps {
  onExploreFacilities: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreFacilities }) => {
  const highlights = [
    {
      title: '18,000+ Sq. Ft. Architecture',
      desc: 'High-ceiling open layout engineered with acoustic absorption and dual-stage air filtration.',
    },
    {
      title: 'Modern Training Zones',
      desc: 'Specialized spaces for heavy Olympic lifting, high-intensity turf conditioning, and cardio stadiums.',
    },
    {
      title: 'Dedicated Coaching Areas',
      desc: 'Private biometric assessment pods and private technique mirrors for uninterrupted coach guidance.',
    },
    {
      title: 'Comfortable Changing Facilities',
      desc: 'Air-conditioned locker suites with private rain showers, keyless locks, and grooming stations.',
    },
    {
      title: 'Personal Training Spaces',
      desc: 'Exclusive 1-on-1 performance bays with dedicated equipment sets to keep workouts focused.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={ABOUT_IMAGE}
                alt="Inside APEXFORGE FITNESS premium 18,000 sq ft facility in Nova City"
                className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500 flex items-center justify-center text-zinc-950 font-bold flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-bold text-xs sm:text-sm tracking-wide truncate">18,000+ SQ. FT. FACILITY</p>
                    <p className="text-zinc-400 text-[11px] sm:text-xs flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" /> {GYM_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Border Card Behind */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl border border-amber-500/20 bg-amber-500/5"></div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5 flex-shrink-0" />
              <span>ABOUT APEXFORGE</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-[0.95] break-words">
              A MODERN FITNESS DESTINATION <br />
              <span className="text-gradient-amber">BUILT WITHOUT COMPROMISE</span>
            </h2>

            {/* Description Paragraphs */}
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Founded on the belief that environment dictates performance, <strong className="text-white font-semibold">APEXFORGE FITNESS</strong> delivers an elite fitness space in Nova City. Our 18,000+ sq. ft. flagship facility unites heavy strength equipment, athletic turf tracks, high-tempo cardio bays, and modern recovery spaces under one roof.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether you are an experienced lifter striving for raw power or stepping into structured training for the first time, our expert coaching and motivating atmosphere are designed to support your personal journey.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  id={`about-highlight-${index}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-white text-xs sm:text-sm font-bold tracking-wide">{item.title}</h3>
                      <p className="text-zinc-400 text-xs mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Facility CTA */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button
                id="about-explore-facilities-btn"
                onClick={onExploreFacilities}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/60 text-white hover:text-amber-300 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer min-h-[44px]"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>EXPLORE ALL 8 FACILITY ZONES</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] sm:text-xs text-zinc-500 flex items-center gap-1.5 font-mono">
                <Shield className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                <span>100% Fictional Demonstration Facility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
