import React from 'react';
import {
  Dumbbell,
  Award,
  Sparkles,
  CalendarCheck,
  FileText,
  TrendingUp,
  Users,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

export const WhyApexForge: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-5 h-5 text-amber-400" />,
    Award: <Award className="w-5 h-5 text-amber-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    CalendarCheck: <CalendarCheck className="w-5 h-5 text-amber-400" />,
    FileText: <FileText className="w-5 h-5 text-amber-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
    Users: <Users className="w-5 h-5 text-amber-400" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="why-apexforge" className="py-16 sm:py-24 lg:py-28 bg-[#0c0c10] relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
            <span>THE APEXFORGE ADVANTAGE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            WHY MEMBERS CHOOSE <br />
            <span className="text-gradient-amber">APEXFORGE FITNESS</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            We deliver a premier training environment where modern equipment, expert coaching, and clean amenities empower your individual consistency.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={idx}
              id={`why-card-${idx}`}
              className="p-5 sm:p-6 rounded-2xl bg-[#121216] border border-zinc-800/80 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-amber-500/15 group-hover:border-amber-500/40 transition-colors">
                  {iconMap[feature.icon] || <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide uppercase group-hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-400 text-base">✓</span>
                    <span>{feature.title}</span>
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500 font-mono">
                <span>Standard Feature</span>
                <span className="text-amber-400/80 font-semibold">Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible fitness disclaimer */}
        <div className="mt-8 sm:mt-12 p-3.5 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-center text-[11px] sm:text-xs text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          <span>
            *Disclaimer: All workout programs and coaching advice are designed to promote general physical fitness and athletic conditioning. Results vary by individual consistency and baseline.
          </span>
        </div>
      </div>
    </section>
  );
};
