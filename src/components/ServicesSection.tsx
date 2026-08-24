import React from 'react';
import { Sparkles, ArrowRight, Activity, Clock, Flame } from 'lucide-react';
import { SERVICES_LIST } from '../data/gymData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-[#0c0c10] relative">
      {/* Glow highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <Activity className="w-3.5 h-3.5 flex-shrink-0" />
            <span>SPECIALIZED TRAINING DISCIPLINES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            ENGINEERED SERVICES FOR <br />
            <span className="text-gradient-amber">MAXIMUM ATHLETIC RESULTS</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            From raw barbell power and functional agility to high-tempo metabolic conditioning, our structured training programs are built to deliver results safely.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-[#121216] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-zinc-900 w-full">
                <img
                  src={service.image}
                  alt={`${service.name} training at APEXFORGE FITNESS`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-90"></div>
                
                {/* Intensity Tag */}
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] sm:text-[11px] font-bold text-amber-300 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400" />
                  <span>{service.intensity}</span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] sm:text-[11px] font-medium text-zinc-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-wide group-hover:text-amber-400 transition-colors uppercase">
                    {service.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.targetGoals.slice(0, 2).map((goal, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800 text-[10px] font-medium"
                    >
                      {goal}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2 border-t border-zinc-800/80">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 group-hover:bg-amber-500 group-hover:text-zinc-950 text-zinc-300 border border-zinc-800 group-hover:border-amber-500 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer min-h-[40px]"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/40 to-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">Unsure which training style fits your current goals?</p>
              <p className="text-zinc-400 text-xs">Our coaches will conduct a complimentary movement & goal assessment during your demo trial.</p>
            </div>
          </div>

          <a
            href="#trial-booking"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase text-center whitespace-nowrap shadow-lg shadow-amber-500/20 min-h-[40px] flex items-center justify-center"
          >
            GET COACH ADVICE
          </a>
        </div>
      </div>
    </section>
  );
};
