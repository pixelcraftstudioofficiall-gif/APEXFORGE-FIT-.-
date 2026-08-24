import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#09090b] relative">
      <div className="site-container max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>FREQUENT QUESTIONS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-black tracking-tight uppercase leading-tight break-words">
            EVERYTHING YOU NEED <br />
            <span className="text-gradient-amber">TO KNOW BEFORE VISITING</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              id={`faq-item-${index}`}
              className="rounded-2xl bg-[#121216] border border-zinc-800/80 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-zinc-900/50 transition-colors min-h-[48px]"
              >
                <span className="font-bold text-white text-xs sm:text-sm md:text-base pr-2 break-words">
                  {faq.q}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-900 flex items-center justify-center text-amber-400 flex-shrink-0">
                  {openIndex === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 pt-1 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/60">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
