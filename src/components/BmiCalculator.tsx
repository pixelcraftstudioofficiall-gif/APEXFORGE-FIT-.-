import React, { useState } from 'react';
import { Calculator, Sparkles, Flame, Check, RefreshCw } from 'lucide-react';

export const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const [age, setAge] = useState<number>(26);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.55); // 1.2, 1.375, 1.55, 1.725

  // Calculations
  const heightInMeters = height / 100;
  const bmi = +(weight / (heightInMeters * heightInMeters)).toFixed(1);

  // BMR & TDEE
  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  const tdee = Math.round(bmr * activity);

  let category = 'Normal Weight';
  let categoryColor = 'text-emerald-400';
  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = 'text-sky-400';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    categoryColor = 'text-amber-400';
  } else if (bmi >= 30) {
    category = 'Obesity Range';
    categoryColor = 'text-rose-400';
  }

  return (
    <section id="bmi-calculator" className="py-16 sm:py-20 lg:py-24 bg-[#0c0c10] relative">
      <div className="site-container">
        <div className="bg-[#121216] border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                <Calculator className="w-3.5 h-3.5 flex-shrink-0" />
                <span>MEMBER PERFORMANCE TOOLKIT</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-black tracking-tight uppercase leading-tight break-words">
                CALCULATE YOUR <br />
                <span className="text-gradient-amber">BMI & ESTIMATED TDEE</span>
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Estimate your Body Mass Index and Total Daily Energy Expenditure to understand baseline caloric targets before setting workout splits.
              </p>

              {/* Gender selector */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors min-h-[40px] cursor-pointer ${
                    gender === 'male'
                      ? 'bg-amber-500 text-zinc-950 font-black shadow-md shadow-amber-500/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors min-h-[40px] cursor-pointer ${
                    gender === 'female'
                      ? 'bg-amber-500 text-zinc-950 font-black shadow-md shadow-amber-500/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  Female
                </button>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                {/* Height */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-300">Height</span>
                    <span className="text-amber-400 font-mono font-bold">{height} cm ({Math.floor(height / 30.48)}' {Math.round((height % 30.48) / 2.54)}")</span>
                  </div>
                  <input
                    type="range"
                    min="130"
                    max="220"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Weight */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-300">Weight</span>
                    <span className="text-amber-400 font-mono font-bold">{weight} kg ({Math.round(weight * 2.20462)} lbs)</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="160"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-300">Age</span>
                    <span className="text-amber-400 font-mono font-bold">{age} years</span>
                  </div>
                  <input
                    type="range"
                    min="16"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Activity Level */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-zinc-300 text-xs font-semibold">Activity Routine</span>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-amber-500 min-h-[42px]"
                  >
                    <option value={1.2}>Sedentary (Little or no exercise)</option>
                    <option value={1.375}>Lightly Active (Gym 1-3 days/week)</option>
                    <option value={1.55}>Moderately Active (Gym 3-5 days/week)</option>
                    <option value={1.725}>Very Active (Hard training 6-7 days/week)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Readout Card */}
            <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800/90 rounded-2xl p-5 sm:p-7 space-y-5 sm:space-y-6">
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Estimated Score</span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-display text-5xl sm:text-6xl text-white font-black">{bmi}</span>
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${categoryColor}`}>
                    {category}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <p className="text-zinc-400 text-[10px] sm:text-[11px] uppercase font-bold">Base BMR</p>
                  <p className="font-display text-xl sm:text-2xl text-white font-bold mt-0.5">{Math.round(bmr)}</p>
                  <p className="text-zinc-400 text-[10px]">kcal / day at rest</p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <p className="text-amber-400 text-[10px] sm:text-[11px] uppercase font-bold">Daily TDEE</p>
                  <p className="font-display text-xl sm:text-2xl text-amber-300 font-bold mt-0.5">{tdee}</p>
                  <p className="text-zinc-400 text-[10px]">kcal to maintain</p>
                </div>
              </div>

              {/* Goal-oriented calorie brackets */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                  <span className="text-zinc-400">Fat Loss (Deficit):</span>
                  <span className="font-mono font-bold text-rose-300">~{tdee - 400} kcal</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                  <span className="text-zinc-400">Lean Muscle Gain (Surplus):</span>
                  <span className="font-mono font-bold text-emerald-300">~{tdee + 300} kcal</span>
                </div>
              </div>

              <a
                href="#trial-booking"
                className="flex items-center justify-center text-center w-full py-3 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-colors min-h-[44px]"
              >
                DISCUSS WITH A COACH IN DEMO TRIAL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
