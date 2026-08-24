/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MembershipSection } from './components/MembershipSection';
import { TrainersSection } from './components/TrainersSection';
import { FacilitiesGallery } from './components/FacilitiesGallery';
import { WhyApexForge } from './components/WhyApexForge';
import { ClassSchedule } from './components/ClassSchedule';
import { BmiCalculator } from './components/BmiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FreeTrialSection } from './components/FreeTrialSection';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import {
  ServiceDetailModal,
  TrainerModal,
  PlanCheckoutModal,
  VipPassModal,
  LightboxModal,
  LegalModal,
  WhatsAppDemoModal,
} from './components/Modals';
import {
  ServiceItem,
  TrainerProfile,
  PricingPlan,
  BillingCycle,
  FacilityZone,
  TrialBookingData,
  ScheduleClass,
} from './types';
import { PRICING_PLANS } from './data/gymData';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function App() {
  // Modal States
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerProfile | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('monthly');
  const [selectedFacilityZone, setSelectedFacilityZone] = useState<FacilityZone | null>(null);
  const [activeTrialPass, setActiveTrialPass] = useState<TrialBookingData | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const scrollToTrialForm = () => {
    const el = document.getElementById('trial-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenJoinModal = (planId?: string) => {
    const targetPlan = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[1]; // default to PRO
    setSelectedPlan(targetPlan);
    setSelectedCycle('monthly');
  };

  const handleSelectPlan = (plan: PricingPlan, cycle: BillingCycle) => {
    setSelectedPlan(plan);
    setSelectedCycle(cycle);
  };

  const handleBookingSubmit = (data: TrialBookingData) => {
    setActiveTrialPass(data);
    showToast(`VIP Demo Pass generated for ${data.fullName}! (Code: ${data.passId})`);
  };

  const handleBookClass = (cls: ScheduleClass, day: string) => {
    showToast(`Spot reserved for ${cls.name} on ${day} (${cls.time})!`);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-amber-500 selection:text-black">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <aside
          aria-label="Notification"
          id="app-toast-notification"
          className="fixed top-16 right-4 z-50 max-w-md p-4 rounded-2xl bg-zinc-900 border border-amber-500/80 text-white shadow-2xl glow-amber-sm flex items-center gap-3 animate-in slide-in-from-top-4 duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-semibold flex-1 leading-snug">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-zinc-400 hover:text-white p-1 rounded-md"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {/* Main Website Structure */}
      <Navbar
        onOpenTrialModal={scrollToTrialForm}
        onOpenJoinModal={handleOpenJoinModal}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero onStartJourney={scrollToTrialForm} />

        {/* 2. Stats Section */}
        <StatsSection />

        {/* 3. About Section */}
        <AboutSection onExploreFacilities={() => {
          const el = document.getElementById('facilities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 4. Services Section (8 Services) */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Memberships Section (Monthly, 3M, 6M, 12M Plans) */}
        <MembershipSection onSelectPlan={handleSelectPlan} />

        {/* 6. Trainers Section (4 Coaches) */}
        <TrainersSection onBookTrainer={(trainer) => setSelectedTrainer(trainer)} />

        {/* 7. Facilities & Gallery (8 Zones + Lightbox) */}
        <FacilitiesGallery onOpenLightbox={(zone) => setSelectedFacilityZone(zone)} />

        {/* 8. Why ApexForge (8 Features) */}
        <WhyApexForge />

        {/* 9. Live Weekly Class Schedule Timetable */}
        <ClassSchedule onBookClass={handleBookClass} />

        {/* 10. BMI & Performance Calorie Target Calculator */}
        <BmiCalculator />

        {/* 11. Demo Testimonials (6 Fictional Reviews with 5-star ratings) */}
        <TestimonialsSection />

        {/* 12. Free Trial High-Converting Callout */}
        <FreeTrialSection onScrollToForm={scrollToTrialForm} />

        {/* 13. Trial Booking & Enquiry Form */}
        <EnquiryFormSection onSubmitBooking={handleBookingSubmit} />

        {/* 14. Contact Section with Fictional Stylized Map Visual */}
        <ContactSection onOpenWhatsAppDemo={() => setIsWhatsAppModalOpen(true)} />

        {/* 15. FAQ Section */}
        <FaqSection />
      </main>

      {/* 16. Footer */}
      <Footer
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTrialModal={scrollToTrialForm}
      />

      {/* 17. Sticky Mobile Action Bar */}
      <StickyMobileCTA
        onOpenTrialModal={scrollToTrialForm}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />

      {/* Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookTrial={scrollToTrialForm}
      />

      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        onBookSuccess={showToast}
      />

      <PlanCheckoutModal
        plan={selectedPlan}
        cycle={selectedCycle}
        onClose={() => setSelectedPlan(null)}
        onComplete={showToast}
      />

      <VipPassModal
        booking={activeTrialPass}
        onClose={() => setActiveTrialPass(null)}
      />

      <LightboxModal
        zone={selectedFacilityZone}
        onClose={() => setSelectedFacilityZone(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <WhatsAppDemoModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
}
