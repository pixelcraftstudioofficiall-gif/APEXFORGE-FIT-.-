import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle2, User, Phone, Mail, Target, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { TrialBookingData } from '../types';

interface EnquiryFormSectionProps {
  onSubmitBooking: (data: TrialBookingData) => void;
}

export const EnquiryFormSection: React.FC<EnquiryFormSectionProps> = ({ onSubmitBooking }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('Muscle Building & Hypertrophy');
  const [preferredTime, setPreferredTime] = useState('Morning (06:00 AM - 09:00 AM)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fitnessGoals = [
    'Muscle Building & Hypertrophy',
    'Fat Loss & Body Recomposition',
    'Raw Strength & Powerlifting',
    'Functional Mobility & Athletic Conditioning',
    'General Health & Cardiovascular Fitness',
    'Personal 1-on-1 Coaching Inquiry',
  ];

  const timeSlots = [
    'Early Bird (05:30 AM - 07:30 AM)',
    'Morning (07:30 AM - 10:00 AM)',
    'Mid-Day (11:00 AM - 02:00 PM)',
    'Evening Prime (05:00 PM - 08:00 PM)',
    'Night Session (08:00 PM - 10:00 PM)',
    'Sunday Session (08:00 AM - 12:00 PM)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!email.trim()) newErrors.email = 'Please enter your email address';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const passId = `AF-${Math.floor(100000 + Math.random() * 900000)}`;
      onSubmitBooking({
        fullName,
        phone,
        email,
        fitnessGoal,
        preferredTime,
        message,
        passId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      });
    }, 600);
  };

  return (
    <section id="trial-booking" className="py-16 sm:py-24 lg:py-28 bg-[#09090b] relative">
      <div className="site-container">
        <div className="max-w-4xl mx-auto bg-[#121216] border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Form Header */}
          <div className="text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>BOOK YOUR DEMO VISIT</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-white font-black tracking-tight uppercase leading-tight break-words">
              ENQUIRY & <span className="text-gradient-amber">FREE TRIAL PASS</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Fill in your details below to generate your instant digital demo pass for APEXFORGE FITNESS.
            </p>
          </div>

          {/* Enquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  id="enquiry-fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vikram Singhania"
                  className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border ${
                    errors.fullName ? 'border-rose-500' : 'border-zinc-800'
                  } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors min-h-[42px]`}
                />
                {errors.fullName && <p className="text-rose-400 text-[11px] font-medium">{errors.fullName}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  id="enquiry-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border ${
                    errors.phone ? 'border-rose-500' : 'border-zinc-800'
                  } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors min-h-[42px]`}
                />
                {errors.phone && <p className="text-rose-400 text-[11px] font-medium">{errors.phone}</p>}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  id="enquiry-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. vikram@example.com"
                  className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border ${
                    errors.email ? 'border-rose-500' : 'border-zinc-800'
                  } text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors min-h-[42px]`}
                />
                {errors.email && <p className="text-rose-400 text-[11px] font-medium">{errors.email}</p>}
              </div>

              {/* Fitness Goal */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Fitness Goal</span>
                </label>
                <select
                  id="enquiry-fitness-goal"
                  value={fitnessGoal}
                  onChange={(e) => setFitnessGoal(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors min-h-[42px]"
                >
                  {fitnessGoals.map((goal, idx) => (
                    <option key={idx} value={goal} className="bg-zinc-900 text-white">
                      {goal}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Time Slot */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Preferred Time Slot</span>
              </label>
              <select
                id="enquiry-preferred-time"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors min-h-[42px]"
              >
                {timeSlots.map((slot, idx) => (
                  <option key={idx} value={slot} className="bg-zinc-900 text-white">
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Message (Optional)</span>
              </label>
              <textarea
                id="enquiry-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about any specific training interests, questions, or previous injuries..."
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="enquiry-submit-btn"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-zinc-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transform hover:-translate-y-0.5 min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                    <span>GENERATING VIP PASS...</span>
                  </>
                ) : (
                  <>
                    <span>BOOK MY FREE TRIAL</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Security footnote */}
            <div className="flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs text-zinc-400 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>100% Fictional Demo • Instant digital pass generation preview</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
