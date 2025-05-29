export interface LocalizedText {
  fr: string;
  ar: string;
  en: string;
}

export interface Service {
  id: string;
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface Testimonial {
  id: number;
  text: LocalizedText;
  author: string;
  role: LocalizedText;
  initials: string;
  rating: number;
  avatar: string;
}

export interface WorkingHour {
  days: LocalizedText;
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
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export interface EquipmentImage {
  title: LocalizedText;
  image: string;
  description: LocalizedText;
}

export interface TeamBenefit {
  icon: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "radiologie",
    icon: "x-ray",
    title: {
      fr: "Radiologie générale",
      ar: "الأشعة العامة",
      en: "General Radiology"
    },
    description: {
      fr: "Examens radiologiques standards pour diagnostiquer diverses conditions médicales avec précision.",
      ar: "فحوصات أشعة قياسية لتشخيص حالات طبية مختلفة بدقة.",
      en: "Standard radiological exams to accurately diagnose various medical conditions."
    },
    image: "https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1500"
  },
  {
    id: "irm",
    icon: "magnet",
    title: {
      fr: "IRM",
      ar: "الرنين المغناطيسي",
      en: "MRI"
    },
    description: {
      fr: "Imagerie par résonance magnétique haute définition pour des diagnostics avancés et précis.",
      ar: "تصوير بالرنين المغناطيسي عالي الدقة للتشخيصات المتقدمة والدقيقة.",
      en: "High-definition magnetic resonance imaging for advanced and precise diagnostics."
    },
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1500"
  },
  {
    id: "scanner",
    icon: "laptop-medical",
    title: {
      fr: "Scanner",
      ar: "التصوير المقطعي",
      en: "CT Scan"
    },
    description: {
      fr: "Tomodensitométrie de dernière génération pour une visualisation détaillée des organes et tissus.",
      ar: "التصوير المقطعي الحديث لرؤية مفصلة للأعضاء والأنسجة.",
      en: "Latest generation computed tomography for detailed visualization of organs and tissues."
    },
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1500"
  },
  {
    id: "echographie",
    icon: "search",
    title: {
      fr: "Échographie",
      ar: "التصوير بالموجات فوق الصوتية",
      en: "Ultrasound"
    },
    description: {
      fr: "Examens échographiques réalisés par des médecins spécialistes expérimentés.",
      ar: "فحوصات بالموجات فوق الصوتية يتم إجراؤها من قبل أطباء متخصصين ذوي خبرة.",
      en: "Ultrasound exams conducted by experienced specialist doctors."
    },
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1500"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: {
      fr: "Service rapide et personnel très professionnel. Je recommande vivement !",
      ar: "خدمة سريعة وطاقم محترف للغاية. أوصي بشدة!",
      en: "Fast service and very professional staff. Highly recommended!"
    },
    author: "Nadia M.",
    role: {
      fr: "Patient",
      ar: "مريض",
      en: "Patient"
    },
    initials: "NM",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    id: 2,
    text: {
      fr: "Des explications claires et des équipements modernes. Très satisfait.",
      ar: "تفسيرات واضحة وأجهزة حديثة. راضٍ جداً.",
      en: "Clear explanations and modern equipment. Very satisfied."
    },
    author: "Karim B.",
    role: {
      fr: "Patient",
      ar: "مريض",
      en: "Patient"
    },
    initials: "KB",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    id: 3,
    text: {
      fr: "Excellent accueil et diagnostic précis. Merci au Dr. Benameur !",
      ar: "استقبال ممتاز وتشخيص دقيق. شكراً للدكتور بن عامر!",
      en: "Excellent welcome and accurate diagnosis. Thanks to Dr. Benameur!"
    },
    author: "Yacine T.",
    role: {
      fr: "Patient",
      ar: "مريض",
      en: "Patient"
    },
    initials: "YT",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

export const workingHours: WorkingHour[] = [
  {
    days: {
      fr: "Lundi - Vendredi",
      ar: "الإثنين - الجمعة",
      en: "Monday - Friday"
    },
    hours: "8h00 - 18h00"
  },
  {
    days: {
      fr: "Samedi",
      ar: "السبت",
      en: "Saturday"
    },
    hours: "8h00 - 13h00"
  },
  {
    days: {
      fr: "Dimanche",
      ar: "الأحد",
      en: "Sunday"
    },
    hours: "Fermé"
  }
];

export const contactInfo: ContactInfo = {
  address: "32 Boulevard Hammou Boutlelis, Oran 31000, Algérie",
  phone: "+213 41 56 78 90",
  email: "contact@imagerie-benameur.com",
  location: {
    lat: 35.6980,
    lng: -0.6435
  }
};

export const features: Feature[] = [
  {
    icon: "users",
    title: {
      fr: "Personnel expérimenté",
      ar: "طاقم ذو خبرة",
      en: "Experienced Staff"
    },
    description: {
      fr: "Équipe de radiologues et de techniciens hautement qualifiés et expérimentés.",
      ar: "فريق من أخصائيي الأشعة والفنيين ذوي الكفاءة العالية والخبرة.",
      en: "Team of highly qualified and experienced radiologists and technicians."
    },
    image: "https://images.unsplash.com/photo-1622253694242-abeb37a33e97?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: "cog",
    title: {
      fr: "Équipements modernes",
      ar: "معدات حديثة",
      en: "Modern Equipment"
    },
    description: {
      fr: "Technologies d'imagerie de pointe pour des diagnostics précis et fiables.",
      ar: "تقنيات تصوير متطورة لتشخيص دقيق وموثوق.",
      en: "Advanced imaging technologies for precise and reliable diagnostics."
    },
    image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: "clock",
    title: {
      fr: "Résultats rapides",
      ar: "نتائج سريعة",
      en: "Fast Results"
    },
    description: {
      fr: "Délais courts pour les rendez-vous et les résultats d'examens.",
      ar: "فترات انتظار قصيرة للمواعيد ونتائج الفحوصات.",
      en: "Short delays for appointments and exam results."
    },
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=400&auto=format&fit=crop"
  }
];

export const equipmentBenefits: string[] = [
  "Appareils dernière génération",
  "Environnement confortable et rassurant",
  "Protocoles adaptés à chaque patient",
  "Résultats rapides et précis"
];

export const teamBenefits: TeamBenefit[] = [
  {
    icon: "user-md",
    title: {
      fr: "Radiologues experts",
      ar: "أخصائيو أشعة خبراء",
      en: "Expert Radiologists"
    },
    subtitle: {
      fr: "Spécialistes certifiés",
      ar: "أخصائيون معتمدون",
      en: "Certified Specialists"
    },
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&auto=format&fit=crop"
  },
  {
    icon: "certificate",
    title: {
      fr: "Équipe certifiée",
      ar: "طاقم معتمد",
      en: "Certified Team"
    },
    subtitle: {
      fr: "Formation continue",
      ar: "تدريب مستمر",
      en: "Continuous Training"
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=300&auto=format&fit=crop"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "facebook",
    url: "#",
    icon: "facebook"
  },
  {
    platform: "instagram",
    url: "#",
    icon: "instagram"
  },
  {
    platform: "linkedin",
    url: "#",
    icon: "linkedin"
  }
];

export const heroImages = {
  home: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1800",
  services: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1800",
  appointment: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1800",
  testimonials: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1800",
  contact: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1800"
};

export const equipmentImages: EquipmentImage[] = [
  {
    title: {
      fr: "IRM dernière génération",
      ar: "الرنين المغناطيسي الأحدث",
      en: "Latest Generation MRI"
    },
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: {
      fr: "Système IRM 3 Tesla avec logiciels avancés pour des examens détaillés",
      ar: "نظام رنين مغناطيسي 3 تسلا مع برامج متقدمة لفحوصات مفصلة",
      en: "3 Tesla MRI system with advanced software for detailed exams"
    }
  },
  {
    title: {
     
