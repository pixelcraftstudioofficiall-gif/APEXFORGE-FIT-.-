import React from 'react';
import { Sparkles, Phone, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface StickyMobileCTAProps {
  onOpenTrialModal: () => void;
  onOpenJoinModal: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenTrialModal, onOpenJoinModal }) => {
  return (
    <aside
      aria-label="Quick Actions"
      id="sticky-mobile-cta"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#09090b]/95 border-t border-zinc-800/90 backdrop-blur-xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-2"
    >
      <a
        href={`tel:${GYM_INFO.phone}`}
        className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400 flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px] hover:bg-zinc-800 transition-colors"
        aria-label="Call Gym Front Desk"
      >
        <Phone className="w-5 h-5" />
      </a>

      <button
        type="button"
        onClick={onOpenTrialModal}
        className="flex-1 py-3 px-2 sm:px-3 rounded-xl bg-zinc-900 border border-amber-500/40 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 min-h-[44px] hover:bg-zinc-800 transition-colors cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
        <span className="truncate">FREE TRIAL</span>
      </button>

      <button
        type="button"
        onClick={onOpenJoinModal}
        className="flex-1 py-3 px-2 sm:px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center justify-center gap-1 min-h-[44px] hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer"
      >
        <span className="truncate">JOIN NOW</span>
        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
      </button>
    </aside>
  );
};
