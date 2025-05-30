// types.ts

// Type des services proposés
export interface ServiceProps {
  id: string;
  icon: string;
  title: string;
  image: string;
}

// Type des témoignages clients
export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  initials: string;
  rating: number;  // Note sur 5 par exemple
  avatar: string;
}

// Horaires d'ouverture
export interface WorkingHour {
  days: string;    // Ex: "Lundi - Vendredi"
  hours: string;   // Ex: "8h00 - 18h00"
}

// Informations de contact du centre
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };
}

// Caractéristiques / avantages du centre
export interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

// Bénéfices spécifiques de l'équipe
export interface TeamBenefit {
  icon: string;
  title: string;
  subtitle: string;
  image: string;
}

// Liens vers les réseaux sociaux
export interface SocialLink {
  platform: string;  // ex: facebook, instagram
  url: string;
  icon: string;      // nom de l'icône à afficher
}

// Images héro pour différentes sections
export interface HeroImages {
  home: string;
  services: string;
  appointment: string;
  testimonials: string;
  contact: string;
}

// Images et descriptions du matériel médical
export interface EquipmentImage {
  title: string;
  image: string;
  description: string;
}

// *** Types pour traductions complexes, ici exemple pour la section Testimonials ***

export interface TestimonialsTranslation {
  title: string;
  intro: string;
  extended: {
    text: string;
    author: string;
    role: string;
  }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  appointment: string;
  commitmentTitle: string;
  excellence: {
    title: string;
    text: string;
    points: string[];
  };
  care: {
    title: string;
    text: string;
    points: string[];
  };
}
