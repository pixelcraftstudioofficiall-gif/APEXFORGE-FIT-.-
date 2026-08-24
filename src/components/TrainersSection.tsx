import React from 'react';
import { Award, Calendar, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';
import { TRAINERS_LIST } from '../data/gymData';
import { TrainerProfile } from '../types';

interface TrainersSectionProps {
  onBookTrainer: (trainer: TrainerProfile) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookTrainer }) => {
  return (
    <section id="trainers" className="py-16 sm:py-24 lg:py-28 bg-[#0c0c10] relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <UserCheck className="w-3.5 h-3.5 flex-shrink-0" />
            <span>ELITE COACHING STAFF</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            EXPERT GUIDANCE FOR <br />
            <span className="text-gradient-amber">EVERY REP & MILESTONE</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Our certified coaching team brings deep knowledge in progressive strength, metabolic conditioning, and mobility protocols to elevate your results safely.
          </p>
        </div>

        {/* 4 Trainer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TRAINERS_LIST.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="group bg-[#121216] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 w-full">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role} at APEXFORGE FITNESS`}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-90"></div>

                {/* Experience Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-[10px] sm:text-[11px] font-bold text-amber-300 flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>{trainer.experience}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-amber-400/90 text-xs font-semibold tracking-wide">
                    {trainer.role}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {trainer.bio}
                  </p>
                </div>

                {/* Specialties Pills */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 text-[10px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Coach Action */}
                <div className="pt-2 sm:pt-3 border-t border-zinc-800/80">
                  <button
                    id={`book-coach-btn-${trainer.id}`}
                    onClick={() => onBookTrainer(trainer)}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 group-hover:bg-amber-500 group-hover:text-zinc-950 text-zinc-300 border border-zinc-800 group-hover:border-amber-500 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer min-h-[40px]"
                  >
                    <span>BOOK CONSULTATION</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fictional disclaimer notice */}
        <div className="mt-6 sm:mt-8 text-center text-[11px] sm:text-xs text-zinc-500 font-mono">
          <span>All coach names and biographies shown above are 100% fictional for demonstration purposes.</span>
        </div>
      </div>
    </section>
  );
};
