import React, { useState } from 'react';
import { Calendar, Clock, User, Flame, Users, CheckCircle2 } from 'lucide-react';
import { SCHEDULE_DAYS, WEEKLY_SCHEDULE } from '../data/gymData';
import { ScheduleClass } from '../types';

interface ClassScheduleProps {
  onBookClass: (cls: ScheduleClass, day: string) => void;
}

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const classes = WEEKLY_SCHEDULE[selectedDay] || [];

  return (
    <section id="schedule" className="py-16 sm:py-24 lg:py-28 bg-[#09090b] relative">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span>STUDIO TIMETABLE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            LIVE WEEKLY <br />
            <span className="text-gradient-amber">CLASS TIMETABLE</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Energizing group sessions, strength clinics, and mobility workshops led daily by certified coaches in our acoustic studio.
          </p>

          {/* Day Selector Tabs */}
          <div className="pt-3 sm:pt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {SCHEDULE_DAYS.map((day) => (
              <button
                key={day}
                id={`schedule-day-${day.toLowerCase()}`}
                onClick={() => setSelectedDay(day)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer min-h-[36px] ${
                  selectedDay === day
                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Classes Table / Cards */}
        <div className="bg-[#121216] border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-zinc-800/80 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl sm:text-2xl font-bold text-white uppercase">{selectedDay} Schedule</span>
              <span className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                {classes.length} Sessions
              </span>
            </div>
            <span className="text-xs text-zinc-500 hidden sm:inline font-mono">
              Group Studio & Turf Floor
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {classes.map((item) => (
              <div
                key={item.id}
                id={`class-item-${item.id}`}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-3 sm:space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 sm:px-2.5 py-1 rounded border border-amber-500/20 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>

                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                    <span className="flex items-center gap-1.5 truncate">
                      <User className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                      <span className="truncate">{item.trainer}</span>
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400 flex-shrink-0">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      {item.intensity}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {item.spotsLeft} spots left
                  </span>

                  <button
                    onClick={() => onBookClass(item, selectedDay)}
                    className="px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer min-h-[36px]"
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
