/**
 * Types pour la traduction du Centre d'Imagerie Benameur
 *
 * Chaque interface correspond à une section du fichier JSON de traduction.
 * Cela permet un typage strict et une meilleure auto-complétion dans l'éditeur.
 */

/** ----------------- APPOINTMENT ------------------ */
export interface Appointment {
  back: string;
  description: string;
  finalNote: string;
  preparationDescription: string;
  updateAppointmentStatus: string;
  InsertAppointment: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string | null;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string;
  };
  preparationSubtitle: string;
  preparationTitle: string;
  stepsDescription: string;
  uupdateAppointmentStatus: string;
  stepsTitle: string;
  title: string;
  appointment: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string | null;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string;
  };
  appointmentStatus: {
    pending: string;
    confirmed: string;
    cancelled: string;
  };
  
}
export interface IVIAppointment extends Appointment {}

/** ----------------- DOCTORS ------------------ */
export interface Doctors {
  section_title: string;
}
export interface IVIDoctors extends Doctors {}

/** ----------------- FOOTER ------------------ */
export interface Footer {
  rights: string;
  subtitle: string;
  title: string;
}
export interface IVIFooter extends Footer {}

/** ----------------- FORM ------------------ */
export interface Form {
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
export interface IVIForm extends Form {}

/** ----------------- HERO ------------------ */
export interface Hero {
  cta: string;
  description: string;
  title: string;
}
export interface IVIHero extends Hero {}

/** ----------------- NAV ------------------ */
export interface Nav {
  appointment: string;
  contact: string;
  home: string;
  services: string;
  testimonials: string;
}
export interface IVINav extends Nav {}

/** ----------------- PRACTICAL INFO ------------------ */
export interface PracticalInfo {
  section_title: string;
}
export interface IVIPracticalInfo extends PracticalInfo {}

/** ----------------- SERVICES ------------------ */
export interface Services {
  section_title: string;
  services: {
    description: string;
    title: string;
  }[];
  title: string;
  cta: {
    text: string;
    title: string;
  };
}
export interface IVIServices extends Services {}

/** ----------------- TESTIMONIALS ------------------ */
export interface TestimonialExtended {
  author: string;
  role: string;
  text: string;
  image: string;
}
export interface IVITestimonialExtended extends TestimonialExtended {}

export interface Testimonials {
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
  extended: TestimonialExtended[];
  intro: string;
  section_title: string;
  title: string;
}
export interface IVITestimonials extends Testimonials {}

/** ----------------- TOAST ------------------ */
export interface Toast {
  errorDescription: string;
  errorTitle: string;
  messageSentDescription: string;
  messageSentTitle: string;
}
export interface IVIToast extends Toast {}

/** ----------------- CONTACT MESSAGE ------------------ */
export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  httpStatus: 'pending' | 'read' | 'archived';
  createdAt: string;
}
export interface IVIContactMessage extends ContactMessage {}

/** ----------------- USER (admin/doctor) ------------------ */
export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash?: string;
  deleteUser: boolean;
  isActive: boolean;
  isVerified: boolean;
  role: 'admin' | 'doctor';
  createdAt: string;
}
export interface SafeUser extends Omit<User, 'passwordHash'> {}
export interface IVIUser extends User {}

export interface LoginInput {
  email: string;
  password: string;
}
export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}
export interface AuthResponse {
  token: string;
  user: SafeUser;
}

/** ----------------- MAIN TRANSLATIONS ------------------ */
export interface Translations {
  appointment: Appointment;
  doctors: Doctors;
  footer: Footer;
  form: Form;
  hero: Hero;
  nav: Nav;
  practicalInfo: PracticalInfo;
  services: Services;
  testimonials: Testimonials;
  toast: Toast;
  contactMessage: ContactMessage;
}
export interface IVITranslations extends Translations {}
