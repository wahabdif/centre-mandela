export interface ServiceProps {
  id: string;
  icon: string;
  title: string;
  description?: string;
  image?: string;
}

export interface ServiceDetail {
  fullDescription: string;
  uses: string[];
  preparation: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
  avatar: string;
}

export interface WorkingHour {
  days: string;
  hours: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface EquipmentBenefit {
  description: string;
}

export interface TeamBenefit {
  icon: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface HeroImages {
  home: string;
  services: string;
  appointment: string;
  testimonials: string;
  contact: string;
}

export interface EquipmentImage {
  title: string;
  image: string;
  description: string;
}
