import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  QrCode,
  Download,
  Dumbbell,
  ArrowRight,
  Phone,
  Flame,
  Award,
  Maximize2,
  Layers,
  MessageCircle,
} from 'lucide-react';
import { ServiceItem, TrainerProfile, PricingPlan, BillingCycle, FacilityZone, TrialBookingData, ScheduleClass } from '../types';
import { GYM_INFO } from '../data/gymData';

// 1. Service Detail Modal
export const ServiceDetailModal: React.FC<{
  service: ServiceItem | null;
  onClose: () => void;
  onBookTrial: () => void;
}> = ({ service, onClose, onBookTrial }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-56 bg-zinc-900 flex-shrink-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover filter brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/60"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-amber-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider">
                {service.intensity} Intensity
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-wide uppercase mt-1">
                {service.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Discipline Overview</h4>
            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">{service.fullDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
              <span className="text-[11px] text-zinc-400 font-semibold block">Session Duration</span>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                {service.duration}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
              <span className="text-[11px] text-zinc-400 font-semibold block">Lead Coach</span>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-400" />
                {service.trainerName}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Key Advantages & Equipment</h4>
            <div className="space-y-2">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-950/60 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <span className="text-xs text-zinc-400 font-mono">Available with Starter, Pro & Elite</span>
          <button
            onClick={() => {
              onClose();
              onBookTrial();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>TRY IN FREE DEMO PASS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Trainer Booking Modal
export const TrainerModal: React.FC<{
  trainer: TrainerProfile | null;
  onClose: () => void;
  onBookSuccess: (msg: string) => void;
}> = ({ trainer, onClose, onBookSuccess }) => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow Morning (07:00 AM)');
  const [isBooked, setIsBooked] = useState(false);

  if (!trainer) return null;

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;
    setIsBooked(true);
    setTimeout(() => {
      onBookSuccess(`Consultation booked with ${trainer.name} for ${selectedSlot}!`);
      setIsBooked(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500"
          />
          <div>
            <h3 className="font-display text-2xl text-white font-bold uppercase">{trainer.name}</h3>
            <p className="text-amber-400 text-xs font-semibold">{trainer.role}</p>
            <p className="text-zinc-400 text-[11px]">{trainer.experience}</p>
          </div>
        </div>

        <div className="space-y-2 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
          <p className="font-semibold text-white">Coach Bio:</p>
          <p className="leading-relaxed">{trainer.bio}</p>
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] text-zinc-400 font-bold uppercase">Certifications</span>
          <div className="flex flex-wrap gap-1.5">
            {trainer.certifications.map((c, i) => (
              <span key={i} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-amber-300">
                ✓ {c}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={handleConsultSubmit} className="space-y-4 pt-2 border-t border-zinc-800">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Book Free 15-Min Coach Clinic</h4>
          
          <div className="space-y-2">
            <input
              type="text"
              required
              placeholder="Your Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number (+91 ...)"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
            />
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
            >
              <option value="Tomorrow Morning (07:00 AM)">Tomorrow Morning (07:00 AM)</option>
              <option value="Tomorrow Midday (01:00 PM)">Tomorrow Midday (01:00 PM)</option>
              <option value="Tomorrow Evening (06:30 PM)">Tomorrow Evening (06:30 PM)</option>
              <option value="Weekend Special (10:00 AM)">Weekend Special (10:00 AM)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isBooked}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            {isBooked ? 'CONFIRMING CONSULTATION...' : 'CONFIRM FREE COACH CONSULTATION'}
          </button>
        </form>
      </div>
    </div>
  );
};

// 3. Plan Checkout Simulation Modal
export const PlanCheckoutModal: React.FC<{
  plan: PricingPlan | null;
  cycle: BillingCycle;
  onClose: () => void;
  onComplete: (msg: string) => void;
}> = ({ plan, cycle, onClose, onComplete }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);

  if (!plan) return null;

  const priceMap: Record<BillingCycle, number> = {
    monthly: plan.prices.monthly,
    quarterly: plan.prices.quarterly,
    halfYearly: plan.prices.halfYearly,
    yearly: plan.prices.yearly,
  };

  const cycleNameMap: Record<BillingCycle, string> = {
    monthly: '1 Month Standard',
    quarterly: '3 Months Commitment (15% Saved)',
    halfYearly: '6 Months Commitment (25% Saved)',
    yearly: '12 Months Annual VIP (35% Saved)',
  };

  const amount = priceMap[cycle];

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onComplete(`Welcome to APEXFORGE! Your ${plan.name} (${cycle}) membership registration is confirmed for demo testing.`);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
            MEMBERSHIP REGISTRATION (DEMO)
          </span>
          <h3 className="font-display text-3xl text-white font-black uppercase">
            JOIN {plan.name} PLAN
          </h3>
          <p className="text-zinc-400 text-xs">{plan.tagline}</p>
        </div>

        {/* Order Summary Box */}
        <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs">
          <div className="flex justify-between items-center text-zinc-300">
            <span>Selected Tier:</span>
            <span className="font-bold text-white uppercase">{plan.name}</span>
          </div>
          <div className="flex justify-between items-center text-zinc-300">
            <span>Billing Period:</span>
            <span className="font-semibold text-amber-300">{cycleNameMap[cycle]}</span>
          </div>
          <div className="pt-2 border-t border-zinc-800 flex justify-between items-baseline">
            <span className="font-bold text-white text-sm">Total Demo Price:</span>
            <span className="font-display text-3xl font-black text-amber-400">
              ₹{amount.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <form onSubmit={handleCheckout} className="space-y-3">
          <input
            type="text"
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
          />
          <input
            type="tel"
            required
            placeholder="Phone Number (+91 ...)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
          />
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            disabled={processing}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
          >
            {processing ? 'CONFIRMING DEMO REGISTRATION...' : `PROCEED WITH ₹${amount.toLocaleString('en-IN')} (DEMO)`}
          </button>
        </form>

        <p className="text-[10px] text-center text-zinc-400 font-mono">
          *No actual payment processed. Simulated registration pass for preview.
        </p>
      </div>
    </div>
  );
};

// 4. VIP Digital Pass Generator Modal
export const VipPassModal: React.FC<{
  booking: TrialBookingData | null;
  onClose: () => void;
}> = ({ booking, onClose }) => {
  if (!booking) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#09090b] border border-amber-500/60 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 glow-amber">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pass Top Banner */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> OFFICIAL DEMO PASS
          </div>
          <h3 className="font-display text-3xl text-white font-black uppercase tracking-wider">
            VIP 1-DAY ACCESS PASS
          </h3>
          <p className="text-zinc-400 text-xs font-mono">Pass Code: {booking.passId}</p>
        </div>

        {/* Digital Card Preview */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-700 p-5 space-y-4 shadow-inner">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <p className="text-xs text-zinc-400">Guest Member</p>
              <p className="font-bold text-white text-base">{booking.fullName}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-zinc-950 font-bold">
              <Dumbbell className="w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-zinc-400 block text-[10px]">Location:</span>
              <span className="text-zinc-200 font-semibold">{GYM_INFO.location}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px]">Preferred Slot:</span>
              <span className="text-zinc-200 font-semibold">{booking.preferredTime.split('(')[0]}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px]">Fitness Goal:</span>
              <span className="text-amber-400 font-semibold truncate block">{booking.fitnessGoal}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px]">Issue Date:</span>
              <span className="text-zinc-200 font-semibold">{booking.date}</span>
            </div>
          </div>

          {/* Simulated QR & Barcode */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white p-1 rounded-md flex items-center justify-center">
                <QrCode className="w-10 h-10 text-zinc-950" />
              </div>
              <div className="text-[10px] text-zinc-400 font-mono">
                <p>SCAN AT FRONT DESK</p>
                <p className="text-amber-400 font-bold">VALID 24 HOURS</p>
              </div>
            </div>

            <div className="text-right font-mono text-[10px] text-zinc-400">
              ||||| | |||| ||||
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>SAVE PASS</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

// 5. Facility Lightbox Modal
export const LightboxModal: React.FC<{
  zone: FacilityZone | null;
  onClose: () => void;
}> = ({ zone, onClose }) => {
  if (!zone) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="relative h-80 sm:h-96 bg-zinc-950 flex-shrink-0">
          <img
            src={zone.image}
            alt={zone.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 px-3 py-1 rounded bg-zinc-950/80 backdrop-blur border border-zinc-800 text-xs text-amber-400 font-mono uppercase">
            {zone.category}
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-white font-bold uppercase">
            {zone.name}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{zone.description}</p>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Specifications & Equipment</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {zone.specs.map((spec, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Legal / Privacy / Terms Modal
export const LegalModal: React.FC<{
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:text-zinc-950 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-3xl text-white font-bold uppercase">
          {type === 'terms' ? 'Terms & Conditions (Demo)' : 'Privacy Policy (Demo)'}
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800 pt-4">
          <p className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
            NOTICE: APEXFORGE FITNESS is a fictional demonstration website. No actual commercial transactions, memberships, or physical gym contracts are formed.
          </p>

          <h4 className="text-white font-bold pt-2">1. Demonstration Scope</h4>
          <p>All brand marks, coaches, testimonials, and address coordinates are created strictly for presentation and web craftsmanship preview.</p>

          <h4 className="text-white font-bold pt-2">2. User Data Handling</h4>
          <p>Any details entered into the trial booking form remain inside client-side component memory during your browser session and are not stored in permanent external marketing lists.</p>

          <h4 className="text-white font-bold pt-2">3. Health & Exercise Safety</h4>
          <p>Physical fitness programs should always be approached with appropriate personal medical clearance. The calculators provided on this demo are for general illustrative purposes only.</p>
        </div>

        <div className="pt-4 border-t border-zinc-800 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

// 7. WhatsApp Demo Modal
export const WhatsAppDemoModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-[#121216] border border-zinc-800 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-emerald-500 hover:text-zinc-950 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">APEXFORGE Support</h4>
            <p className="text-emerald-400 text-xs font-mono">Online • WhatsApp Demo</p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 space-y-2">
          <div className="bg-zinc-900 p-3 rounded-xl rounded-tl-none border border-zinc-800 text-zinc-200 leading-relaxed">
            👋 Hello! Welcome to APEXFORGE FITNESS Nova City. How can our coaching team assist your training goals today?
          </div>
          <p className="text-[10px] text-zinc-400 text-right">09:42 AM</p>
        </div>

        {sent ? (
          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-semibold text-center animate-in fade-in">
            ✓ Demo WhatsApp consultation request dispatched! Our team will contact you shortly.
          </div>
        ) : (
          <div className="space-y-2 text-xs">
            <button
              onClick={() => {
                setSent(true);
                setTimeout(() => {
                  setSent(false);
                  onClose();
                }, 2000);
              }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wide transition-colors cursor-pointer min-h-[44px]"
            >
              SEND INQUIRY VIA WHATSAPP (DEMO)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
