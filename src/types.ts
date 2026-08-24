export type BillingCycle = 'monthly' | 'quarterly' | 'halfYearly' | 'yearly';

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  prices: {
    monthly: number;
    quarterly: number; // 3 months
    halfYearly: number; // 6 months
    yearly: number; // 12 months
  };
  features: string[];
  notIncluded?: string[];
  badge?: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Extreme' | 'All Levels';
  targetGoals: string[];
  keyBenefits: string[];
  trainerName: string;
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
  certifications: string[];
  schedule: string;
}

export interface FacilityZone {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  duration: string;
  goal: string;
}

export interface ScheduleClass {
  id: string;
  time: string;
  name: string;
  trainer: string;
  category: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  spotsLeft: number;
}

export interface TrialBookingData {
  fullName: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredTime: string;
  message?: string;
  passId?: string;
  date?: string;
}
