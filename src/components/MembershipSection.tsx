import React, { useState } from 'react';
import { Check, X, Sparkles, Shield, Flame, CreditCard, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { BillingCycle, PricingPlan } from '../types';

interface MembershipSectionProps {
  onSelectPlan: (plan: PricingPlan, cycle: BillingCycle) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');

  const cycles: { id: BillingCycle; label: string; discountText?: string; savePercent?: string }[] = [
    { id: 'monthly', label: 'MONTHLY' },
    { id: 'quarterly', label: '3 MONTHS', discountText: 'Save ~15%', savePercent: '15%' },
    { id: 'halfYearly', label: '6 MONTHS', discountText: 'Save ~25%', savePercent: '25%' },
    { id: 'yearly', label: '12 MONTHS', discountText: 'Best Value • Save ~35%', savePercent: '35%' },
  ];

  const getPlanPrice = (plan: PricingPlan) => {
    switch (cycle) {
      case 'monthly':
        return { amount: plan.prices.monthly, period: '/month', billedAs: 'Billed monthly' };
      case 'quarterly':
        return {
          amount: plan.prices.quarterly,
          period: ' / 3 months',
          billedAs: `₹${Math.round(plan.prices.quarterly / 3)}/mo equivalent (₹${plan.prices.quarterly} upfront)`,
          savings: (plan.prices.monthly * 3) - plan.prices.quarterly,
        };
      case 'halfYearly':
        return {
          amount: plan.prices.halfYearly,
          period: ' / 6 months',
          billedAs: `₹${Math.round(plan.prices.halfYearly / 6)}/mo equivalent (₹${plan.prices.halfYearly} upfront)`,
          savings: (plan.prices.monthly * 6) - plan.prices.halfYearly,
        };
      case 'yearly':
        return {
          amount: plan.prices.yearly,
          period: ' / 12 months',
          billedAs: `₹${Math.round(plan.prices.yearly / 12)}/mo equivalent (₹${plan.prices.yearly} upfront)`,
          savings: (plan.prices.monthly * 12) - plan.prices.yearly,
        };
    }
  };

  return (
    <section id="memberships" className="py-16 sm:py-24 lg:py-28 bg-[#09090b] relative">
      {/* Ambience Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <CreditCard className="w-3.5 h-3.5 flex-shrink-0" />
            <span>TRANSPARENT MEMBERSHIPS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight uppercase leading-tight break-words">
            INVEST IN YOUR HEALTH <br />
            <span className="text-gradient-amber">FLEXIBLE PLANS WITH ZERO SURPRISES</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Choose the membership commitment that fits your schedule. Enjoy full gym access with clear, predictable rates and no hidden registration fees.
          </p>

          {/* Pricing Toggle Controls */}
          <div className="pt-4 sm:pt-6 flex flex-col items-center w-full">
            <div
              id="billing-cycle-toggle"
              className="grid grid-cols-2 sm:flex sm:flex-row gap-1 sm:gap-1.5 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md w-full max-w-xl"
            >
              {cycles.map((item) => (
                <button
                  key={item.id}
                  id={`toggle-cycle-${item.id}`}
                  onClick={() => setCycle(item.id)}
                  className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-1 min-h-[40px] ${
                    cycle === item.id
                      ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30 font-black'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.savePercent && (
                    <span
                      className={`text-[9px] sm:text-[10px] px-1 py-0.5 rounded font-extrabold flex-shrink-0 ${
                        cycle === item.id
                          ? 'bg-zinc-950 text-amber-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      -{item.savePercent}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Savings Callout Notice */}
            {cycle !== 'monthly' && (
              <div
                id="savings-badge-callout"
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-in fade-in duration-300 text-center"
              >
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Save More with longer commitment plans! Prorated refund guarantee.</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const priceInfo = getPlanPrice(plan);
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl bg-[#121216] p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'border-amber-500/80 shadow-2xl shadow-amber-500/10 lg:-translate-y-2 ring-1 ring-amber-500/40'
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    id="popular-plan-badge"
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 font-black text-[11px] sm:text-xs tracking-widest uppercase shadow-lg shadow-amber-500/30 flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <Flame className="w-3.5 h-3.5 fill-zinc-950 flex-shrink-0" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Plan Header & Price */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-wider uppercase">
                      {plan.name}
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                      Tier {plan.id === 'starter' ? '01' : plan.id === 'pro' ? '02' : '03'}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs mt-2 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-400 text-xl sm:text-2xl font-bold font-sans">₹</span>
                      <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                        {priceInfo.amount.toLocaleString('en-IN')}
                      </span>
                      <span className="text-zinc-400 text-xs sm:text-sm font-semibold">{priceInfo.period}</span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center justify-between gap-1 text-xs">
                      <span className="text-zinc-400 font-mono text-[11px] sm:text-xs">{priceInfo.billedAs}</span>
                      {priceInfo.savings && priceInfo.savings > 0 && (
                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px] sm:text-xs">
                          Save ₹{priceInfo.savings.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="mt-6 sm:mt-8 space-y-3">
                    <p className="text-zinc-300 text-xs font-bold uppercase tracking-wider">
                      Included in {plan.name}:
                    </p>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <div className="w-4 h-4 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}

                      {plan.notIncluded && plan.notIncluded.map((feature, idx) => (
                        <li key={`not-${idx}`} className="flex items-start gap-2.5 text-xs text-zinc-600 opacity-60">
                          <div className="w-4 h-4 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-zinc-600">
                            <X className="w-3 h-3" />
                          </div>
                          <span className="line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Selection Action */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-800/80">
                  <button
                    id={`select-plan-${plan.id}-btn`}
                    onClick={() => onSelectPlan(plan, cycle)}
                    className={`w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] ${
                      isPopular
                        ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-zinc-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white hover:text-amber-300 border border-zinc-700 hover:border-amber-500/50'
                    }`}
                  >
                    <span>JOIN {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-zinc-400 mt-2 font-mono">
                    100% Fictional Demo Plan • Instant Digital Confirmation
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee & Transparency Footnote */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-center flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-400" />
            No Long-Term Lock-in Contracts
          </span>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Complimentary Induction & Form Check
          </span>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            Pause Membership up to 30 Days/Year
          </span>
        </div>
      </div>
    </section>
  );
};
