import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone, Sparkles, ChevronRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: () => void;
  onOpenJoinModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal, onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'about', 'memberships', 'services', 'trainers', 'facilities', 'schedule', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'MEMBERSHIPS', href: '#memberships', id: 'memberships' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'TRAINERS', href: '#trainers', id: 'trainers' },
    { label: 'FACILITIES', href: '#facilities', id: 'facilities' },
    { label: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Demo Notice Banner */}
      <aside
        aria-label="Demo Notice"
        id="top-demo-banner"
        className="bg-amber-500/10 border-b border-amber-500/20 py-1 px-3 sm:px-4 text-[11px] sm:text-xs text-amber-300 flex items-center justify-between text-center backdrop-blur-md"
      >
        <div className="mx-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0"></span>
          <span className="font-bold tracking-wider uppercase text-[10px] sm:text-[11px] bg-amber-500/20 px-1.5 py-0.5 rounded">
            DEMO:
          </span>
          <span className="text-[11px] sm:text-xs">
            100% fictional gym created strictly for demonstration.
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[11px] text-zinc-400 flex-shrink-0">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-amber-400" /> {GYM_INFO.phone}
          </span>
          <span className="text-zinc-600">•</span>
          <span>{GYM_INFO.location}</span>
        </div>
      </aside>

      {/* Main Navbar */}
      <header
        id="main-navbar"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/60 py-2.5 sm:py-3'
            : 'bg-[#09090b]/85 backdrop-blur-sm border-b border-zinc-800/40 py-3 sm:py-4'
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all flex-shrink-0">
              <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-wider text-white font-bold leading-none">
                APEX<span className="text-amber-400">FORGE</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold leading-tight">
                FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation" id="desktop-nav-menu" className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-2.5 xl:px-3 py-1.5 text-xs font-bold tracking-wider transition-colors rounded-md ${
                  activeSection === link.id
                    ? 'text-amber-400 bg-amber-500/10'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <button
              id="nav-free-trial-btn"
              onClick={onOpenTrialModal}
              className="text-xs font-bold tracking-wider text-zinc-300 hover:text-amber-400 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg border border-zinc-800 hover:border-amber-500/50 transition-all hover:bg-zinc-900 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>FREE TRIAL</span>
            </button>
            <button
              id="nav-join-now-btn"
              onClick={() => onOpenJoinModal()}
              className="text-xs font-bold tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>JOIN NOW</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-join-shortcut-btn"
              onClick={() => onOpenJoinModal()}
              className="sm:hidden text-xs font-bold bg-amber-500 text-zinc-950 px-3 py-1.5 rounded-md flex items-center gap-1"
            >
              JOIN
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200 max-h-[80vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-xs font-bold tracking-wider rounded-lg flex items-center justify-between min-h-[44px] ${
                    activeSection === link.id
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'text-zinc-300 hover:bg-zinc-900 bg-zinc-900/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3 h-3 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2.5">
              <button
                id="mobile-drawer-trial-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full text-center py-3 rounded-xl border border-amber-500/40 text-amber-300 font-bold text-xs tracking-wider bg-amber-500/10 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                BOOK FREE DEMO TRIAL
              </button>
              <button
                id="mobile-drawer-join-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-xs tracking-wider shadow-lg shadow-amber-500/25 min-h-[44px]"
              >
                JOIN APEXFORGE NOW
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
