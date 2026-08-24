import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Users, Award, Maximize2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [Calendar, Users, Award, Maximize2];

  return (
    <section
      id="stats-section"
      ref={sectionRef}
      aria-label="Fictional Demo Statistics"
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="bg-[#121216]/95 border border-zinc-800/90 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl shadow-black/80">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {GYM_INFO.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                id={`stat-card-${index}`}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 lg:bg-transparent lg:border-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2 sm:mb-3 glow-amber-sm">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider flex items-baseline gap-0.5">
                  <span className={isVisible ? 'animate-pulse' : ''}>
                    {stat.value}
                  </span>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
                <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono mt-0.5">Fictional Demo Stat</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
