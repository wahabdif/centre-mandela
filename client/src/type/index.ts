/** ----------------- SERVICE TYPE ------------------ */
export type Service = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export type ServiceProps = Service;

/** ----------------- TESTIMONIAL TYPE ------------------ */
export type Testimonial = {
  id: number;
  text: string;
  author: string;
  role?: string;
  initials?: string;
  rating?: number;
  avatar?: string;
};

/** ----------------- WORKING HOUR TYPE ------------------ */
export type WorkingHour = {
  days: string;
  hours: string;
};

/** ----------------- CONTACT INFO TYPE ------------------ */
export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  location?: { lat: number; lng: number };
};

/** ----------------- FEATURE TYPE ------------------ */
export type Feature = {
  icon: string;
  title: string;
  description: string;
  image?: string;
};

/** ----------------- TEAM BENEFIT TYPE ------------------ */
export type TeamBenefit = {
  icon: string;
  title: string;
  subtitle: string;
  image?: string;
};

/** ----------------- SOCIAL LINK TYPE ------------------ */
export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

/** ----------------- HERO IMAGES TYPE ------------------ */
export type HeroImages = {
  home: string;
  services: string;
  appointment: string;
  testimonials: string;
  contact: string;
};

/** ----------------- EQUIPMENT IMAGE TYPE ------------------ */
export type EquipmentImage = {
  title: string;
  image: string;
  description?: string;
};

/** ----------------- APPOINTMENT TYPE ------------------ */
export interface Appointment {
  back: string;
  description: string;
  finalNote: string;
  preparationDescription: string;
  updateAppointmentStatus: string;
  InsertAppointment: InsertAppointment;
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

/** ----------------- INSERT APPOINTMENT TYPE ------------------ */
export type InsertAppointment = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string | null;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
};

/** ----------------- INSERT NEWS POST TYPE ------------------ */
export type InsertNewsPost = {
  title: string;
  content: string;
  createdAt: string;
  authorId: number;
};

/** ----------------- NEW USER TYPE ------------------ */
export type NewUser = {
  name: string;
  email: string;
  password: string;
};

/** ----------------- USER TYPE ------------------ */
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
  lastLogin?: string | null;
  isActive: boolean;
};

/** ----------------- NEWS POST TYPE ------------------ */
export type updateNewsPost = {
  title?: string;
  content?: string;
  createdAt?: string;
  authorId?: number;
  id: number;
  status?: 'draft' | 'published' | 'archived';
  updatedAt?: string;
};

/** ----------------- NEWS POST TYPE ------------------ */
export type NewsPost = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  authorId: number;
  author?: {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    createdAt: string;
    updatedAt: string;
    lastLogin?: string | null;
    isActive: boolean;
  };
  status: 'draft' | 'published' | 'archived';
  updatedAt?: string;
};

/** ----------------- NEWS POST STATUS TYPE ------------------ */
export type NewsPostStatus = {
  id: number;
  status: 'draft' | 'published' | 'archived';
  updatedAt: string;
  postId: number;
  post?: NewsPost;
  author?: {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    createdAt: string;
    updatedAt: string;
    lastLogin?: string | null;
    isActive: boolean;
  };
};
