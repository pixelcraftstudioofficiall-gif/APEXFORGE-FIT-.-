import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Compass,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Shield,
  Layers,
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface ContactSectionProps {
  onOpenWhatsAppDemo: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsAppDemo }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-[#0c0c10] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5 flex-shrink-0" />
            <span>FACILITY ACCESS & INQUIRIES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            FIND APEXFORGE <br />
            <span className="text-gradient-amber">IN NOVA CITY</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Conveniently located on Fitness Avenue with ample dedicated parking, private valet spots, and direct access from central transit routes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121216] border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase font-bold">Location</span>
                  <h3 className="text-white font-bold text-sm sm:text-base break-words">{GYM_INFO.address}</h3>
                  <p className="text-xs text-zinc-400">Near Nova Central Plaza, Nova City, Bihar</p>
                  <button
                    type="button"
                    onClick={() => handleCopy(GYM_INFO.address, 'address')}
                    className="mt-2 text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                  >
                    {copiedField === 'address' ? '✓ Copied Address' : 'Copy Fictional Address'}
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121216] border border-zinc-800/80 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase font-bold">Opening Hours</span>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <div className="flex justify-between items-center py-1 border-b border-zinc-800/60">
                      <span className="text-zinc-400">Monday – Saturday:</span>
                      <span className="font-bold text-white font-mono">5:30 AM – 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-zinc-400">Sunday:</span>
                      <span className="font-bold text-amber-300 font-mono">7:00 AM – 1:00 PM</span>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 pt-1 font-mono">
                    *Biometric 24/7 keycard access available for Elite annual members.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#121216] border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Front Desk</span>
                  <p className="text-white font-bold text-xs sm:text-sm">{GYM_INFO.phone}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(GYM_INFO.phone, 'phone')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {copiedField === 'phone' ? '✓ Copied' : 'Copy Number'}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#121216] border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">Inquiries</span>
                  <p className="text-white font-bold text-xs truncate">{GYM_INFO.email}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(GYM_INFO.email, 'email')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {copiedField === 'email' ? '✓ Copied' : 'Copy Email'}
                </button>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <button
              id="contact-whatsapp-btn"
              onClick={onOpenWhatsAppDemo}
              className="w-full py-3 sm:py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
              <span>CHAT ON WHATSAPP (DEMO)</span>
            </button>
          </div>

          {/* Right Column: Fictional Stylized Map Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#121216] border border-zinc-800 p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl space-y-4 sm:space-y-6">
              {/* Header inside Map Box */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-wide uppercase">
                      NOVA CITY FACILITY MAP
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400">Fictional architectural radar & zone navigator</p>
                </div>

                <div className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] sm:text-[11px] text-zinc-400 font-mono self-start sm:self-auto">
                  Coordinates: 25.5941° N, 85.1376° E (Demo)
                </div>
              </div>

              {/* Fictional Stylized Dark Radar Map Grid */}
              <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl bg-[#09090b] border border-zinc-800 overflow-hidden flex items-center justify-center">
                {/* Radar Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a33_1px,transparent_1px),linear-gradient(to_bottom,#27272a33_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_75%)]"></div>
                
                {/* Concentric distance rings */}
                <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-full border border-zinc-800/80 absolute pointer-events-none"></div>
                <div className="w-40 sm:w-48 h-40 sm:h-48 rounded-full border border-amber-500/20 absolute pointer-events-none animate-pulse"></div>

                {/* Simulated Street Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800/80"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-zinc-800/80"></div>
                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-zinc-800/60 rounded-xl pointer-events-none"></div>

                {/* Street Label Tags */}
                <span className="absolute top-4 sm:top-10 left-3 sm:left-6 text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                  Nova Avenue North
                </span>
                <span className="absolute bottom-4 sm:bottom-10 right-3 sm:right-6 text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                  Metro Line 1 (Nova East)
                </span>
                <span className="hidden sm:inline absolute top-1/2 right-4 -translate-y-6 text-[10px] font-mono font-bold text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                  Fitness Avenue Expressway
                </span>

                {/* Central Gym Pin Beacon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-zinc-950 font-black shadow-2xl shadow-amber-500/50 ring-4 ring-amber-500/30 animate-bounce">
                      <Navigation className="w-5 h-5 sm:w-6 sm:h-6 rotate-45" />
                    </div>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/80 rounded-full blur-xs"></span>
                  </div>

                  <div className="mt-2.5 sm:mt-3 px-3 py-1.5 rounded-xl bg-zinc-950/95 border border-amber-500/60 text-center shadow-xl backdrop-blur-md">
                    <p className="font-display text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
                      APEXFORGE FITNESS
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-amber-400 font-mono">21 Fitness Avenue, Nova City</p>
                  </div>
                </div>

                {/* Surrounding Landmark Markers */}
                <div className="hidden sm:flex absolute top-14 right-16 items-center gap-1.5 bg-zinc-900/85 px-2.5 py-1 rounded-lg border border-zinc-800 text-[10px] text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span>Nova Central Mall (300m)</span>
                </div>

                <div className="hidden sm:flex absolute bottom-16 left-12 items-center gap-1.5 bg-zinc-900/85 px-2.5 py-1 rounded-lg border border-zinc-800 text-[10px] text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Dedicated Member Parking (120 Bays)</span>
                </div>
              </div>

              {/* Transit & Accessibility Legend */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-zinc-400 pt-2">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="font-bold text-white block mb-0.5">🚇 METRO CONNECT</span>
                  <span>2 mins walk from Nova Central Station</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="font-bold text-white block mb-0.5">🚗 FREE PARKING</span>
                  <span>Complimentary basement parking for members</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="font-bold text-white block mb-0.5">⚡ EV CHARGERS</span>
                  <span>4 Level-2 EV charging bays on-site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
