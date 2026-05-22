export type ActiveTab = 'start' | 'story' | 'skills' | 'gallery' | 'contact';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  id: string;
}
