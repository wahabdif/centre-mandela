// types.ts

// Section Rendez-vous (Appointment)
export interface AppointmentTranslation {
  back: string;
  description: string;
  finalNote: string;
  preparationDescription: string;
  preparationTitle: string;
  stepsDescription: string;
  stepsTitle: string;
  title: string;
}

// Section Formulaire
export interface FormTranslation {
  back: string;
  contactUsLabel: string;
  email: string;
  emailLabel: string;
  emailPlaceholder: string;
  error: {
    message: string;
    title: string;
  };
  fastResponseDesc: string;
  fastResponseTitle: string;
  loading: string;
  message: string;
  messageLabel: string;
  messagePlaceholder: string;
  name: string;
  nameLabel: string;
  namePlaceholder: string;
  phone: string;
  phoneLabel: string;
  phonePlaceholder: string;
  qualityServiceDesc: string;
  qualityServiceTitle: string;
  sendButton: string;
  sending: string;
  sendMessageSubtitle: string;
  sendMessageTitle: string;
  service: string;
  servicePlaceholder: string;
  submit: string;
  success: {
    message: string;
    title: string;
  };
}

// Section Héros
export interface HeroTranslation {
  cta: string;
  description: string;
  title: string;
}

// Navigation principale
export interface NavTranslation {
  appointment: string;
  contact: string;
  home: string;
  services: string;
  testimonials: string;
}

// Pied de page
export interface FooterTranslation {
  rights: string;
  subtitle: string;
  title: string;
}

// Équipe médicale
export interface DoctorsTranslation {
  section_title: string;
}

// Informations pratiques
export interface PracticalInfoTranslation {
  section_title: string;
}

// Services
export interface ServicesTranslation {
  section_title: string;
}

// Témoignages (Testimonial)
export interface TestimonialsTranslation {
  appointment: string;
  care: {
    points: string;
    text: string;
    title: string;
  };
  commitmentTitle: string;
  ctaButton: string;
  ctaText: string;
  ctaTitle: string;
  excellence: {
    points: string;
    text: string;
    title: string;
  };
  extended: Array<{
    author: string;
    role: string;
    text: string;
  }>;
  intro: string;
  section_title: string;
  title: string;
}

// Toast notifications
export interface ToastTranslation {
  errorDescription: string;
  errorTitle: string;
  messageSentDescription: string;
  messageSentTitle: string;
}

// Type global pour les traductions générales utilisées dans le site
export interface Translations {
  appointment: AppointmentTranslation;
  form: FormTranslation;
  hero: HeroTranslation;
  nav: NavTranslation;
  footer: FooterTranslation;
  doctors: DoctorsTranslation;
  practicalInfo: PracticalInfoTranslation;
  services: ServicesTranslation;
  testimonials: TestimonialsTranslation;
  toast: ToastTranslation;
}
