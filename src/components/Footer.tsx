import React from 'react';
import {
  Dumbbell,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  ArrowUp,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { GYM_INFO, SERVICES_LIST, PRICING_PLANS } from '../data/gymData';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy, onOpenTrialModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070709] border-t border-zinc-800 text-zinc-400 pt-12 sm:pt-16 pb-12 relative">
      <div className="site-container">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 flex-shrink-0">
                <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-wider text-white font-bold leading-none">
                  APEX<span className="text-amber-400">FORGE</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold leading-tight">
                  FITNESS
                </span>
              </div>
            </div>

            <p className="font-display text-lg sm:text-xl text-zinc-200 tracking-wide">
              "{GYM_INFO.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              An 18,000+ sq. ft. modern fitness destination in Nova City offering powerlifting racks, functional turf conditioning, cardio decks, and certified coaching.
            </p>

            {/* Social Icons (Fictional Demo) */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="#demo-social"
                aria-label="Instagram (Demo)"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                aria-label="YouTube (Demo)"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                aria-label="Facebook (Demo)"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                aria-label="Twitter (Demo)"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-white font-display text-base sm:text-lg font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500 flex-shrink-0" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500 flex-shrink-0" /> About ApexForge
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500 flex-shrink-0" /> Coaching Staff
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500 flex-shrink-0" /> Facilities & Gallery
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500 flex-shrink-0" /> Studio Schedule
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500 flex-shrink-0" /> Community Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Memberships & Services */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-white font-display text-base sm:text-lg font-bold uppercase tracking-wider">
              Memberships & Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#memberships" className="hover:text-amber-400 transition-colors">
                  Starter Plan — ₹1,499/mo
                </a>
              </li>
              <li>
                <a href="#memberships" className="text-amber-400 hover:underline flex items-center gap-1">
                  Pro Plan (Most Popular) — ₹2,499/mo
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-amber-400 transition-colors">
                  Elite Coaching — ₹3,999/mo
                </a>
              </li>
              {SERVICES_LIST.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-zinc-200 transition-colors text-zinc-400">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-white font-display text-base sm:text-lg font-bold uppercase tracking-wider">
              Contact & Hours
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="break-words">{GYM_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{GYM_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="break-all">{GYM_INFO.email}</span>
              </p>
              <div className="pt-2 border-t border-zinc-850 text-xs space-y-1 text-zinc-400">
                <p className="font-semibold text-zinc-300">Operating Hours:</p>
                <p>{GYM_INFO.hours.weekdays}</p>
                <p>{GYM_INFO.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Required Fictional Demo Disclaimers */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs">
          {/* Prominent Fictional Demo Notice */}
          <div className="space-y-1">
            <p className="font-bold text-amber-400 tracking-wider">
              DEMO WEBSITE — ALL INFORMATION SHOWN IS FICTIONAL.
            </p>
            <p className="text-zinc-500">
              Created purely for demonstration purposes. Not a real fitness business or facility in Bihar.
            </p>
          </div>

          {/* Policy Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-zinc-400">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 transition-colors cursor-pointer flex items-center gap-1 min-h-[36px] min-w-[36px] justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
