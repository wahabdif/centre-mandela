import type {
  ServiceProps,
  Testimonial,
  WorkingHour,
  ContactInfo,
  Feature,
  TeamBenefit,
  SocialLink,
  HeroImages,
  EquipmentImage
} from '../type/index'; 

// Services — description minimale, textes en JSON trad
export const services: ServiceProps[] = [
  {
    id: "radiologie",
    icon: "x-ray",
    title: "Radiologie générale",
    description: "Radiographies numériques, examens standards et spécialisés.",
    image: "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1500"
  },
  {
    id: "irm",
    icon: "magnet",
    title: "IRM",
    description: "Imagerie par résonance magnétique pour un diagnostic précis.",
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1500"
  },
  {
    id: "scanner",
    icon: "laptop-medical",
    title: "Scanner",
    description: "Tomodensitométrie multi-coupes pour l’exploration du corps.",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1500"
  },
  {
    id: "echographie",
    icon: "search",
    title: "Échographie",
    description: "Exploration non invasive par ultrasons de haute précision.",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1500"
  }
];

// Testimonials — ici textes courts, mais on peut aussi les externaliser
export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Service rapide et personnel très professionnel.",
    author: "Nadia M.",
    role: "Patient",
    initials: "NM",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "Explications claires et équipements modernes.",
    author: "Karim B.",
    role: "Patient",
    initials: "KB",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Accueil excellent et diagnostic précis.",
    author: "Yacine T.",
    role: "Patient",
    initials: "YT",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

// Working hours
export const workingHours: WorkingHour[] = [
  { days: "Lundi - Vendredi", hours: "8h00 - 18h00" },
  { days: "Samedi", hours: "8h00 - 13h00" },
  { days: "Dimanche", hours: "Fermé" }
];

// Contact info
export const contactInfo: ContactInfo = {
  address: "32 Boulevard Hammou Boutlelis, Oran 31000, Algérie",
  phone: "+213 41 56 78 90",
  email: "contact@imagerie-benameur.com",
  location: { lat: 35.6980, lng: -0.6435 }
};

// Features
export const features: Feature[] = [
  {
    icon: "users",
    title: "Personnel expérimenté",
    description: "Équipe de radiologues et de techniciens qualifiés.",
    image: "https://images.unsplash.com/photo-1622253694242-abeb37a33e97?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: "cog",
    title: "Équipements modernes",
    description: "Technologies d'imagerie de pointe.",
    image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: "clock",
    title: "Résultats rapides",
    description: "Délais courts pour rendez-vous et résultats.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=400&auto=format&fit=crop"
  }
];

// Team benefits
export const teamBenefits: TeamBenefit[] = [
  {
    icon: "user-md",
    title: "Radiologues experts",
    subtitle: "Spécialistes certifiés",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop"
  },
  {
    icon: "certificate",
    title: "Équipe certifiée",
    subtitle: "Formation continue",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=300&auto=format&fit=crop"
  }
];

// Social links
export const socialLinks: SocialLink[] = [
  { platform: "facebook", url: "#", icon: "facebook" },
  { platform: "instagram", url: "#", icon: "instagram" },
  { platform: "linkedin", url: "#", icon: "linkedin" }
];

// Hero images
export const heroImages: HeroImages = {
  home: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1800",
  services: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1800",
  appointment: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1800",
  testimonials: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1800",
  contact: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1800"
};

// Equipment images
export const equipmentImages: EquipmentImage[] = [
  {
    title: "IRM dernière génération",
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Système IRM 3 Tesla avec logiciels avancés"
  },
  {
    title: "Scanner multi-coupes",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Scanner 128 barrettes avec reconstruction 3D"
  },
  {
    title: "Échographe haute définition",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Échographie doppler couleur avancée"
  },
  {
    title: "Radiologie numérique",
    image: "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Système numérique direct avec post-traitement"
  }
];