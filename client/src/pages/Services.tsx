// services.tsx
import React from 'react';
import { Brain, Heart, Stethoscope, UserCheck } from 'lucide-react';

export interface Service {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'neurology',
    icon: Brain,
    title: 'Neurologie',
    description: 'Des services neurologiques complets pour votre santé cérébrale.',
    image: '/images/services/neurology.jpg',
  },
  {
    id: 'cardiology',
    icon: Heart,
    title: 'Cardiologie',
    description: 'Soins experts pour votre cœur et votre système cardiovasculaire.',
    image: '/images/services/cardiology.jpg',
  },
  {
    id: 'general-checkup',
    icon: Stethoscope,
    title: 'Bilan Général',
    description: 'Examens médicaux réguliers pour un suivi optimal de votre santé.',
    image: '/images/services/checkup.jpg',
  },
  {
    id: 'health-monitoring',
    icon: UserCheck,
    title: 'Surveillance de Santé',
    description: 'Suivi personnalisé pour vos conditions chroniques ou spécifiques.',
    image: '/images/services/monitoring.jpg',
  },
];
