/** ----------------- APPOINTMENT ------------------ */
export interface Appointment {
  back: string;
  description: string;
  finalNote: string;
  preparationDescription: string;
  updateAppointmentStatus: string;
  InsertAppointment: InsertAppointment; // Ajout du type
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
  lastLogin?: string | null; // Optionnel, pour stocker la dernière connexion
  isActive: boolean; // Pour savoir si l'utilisateur est actif ou non
  };

/** ----------------- NEWS POST TYPE ------------------ */
  export type updateNewsPost = {
    title?: string;
    content?: string;
    createdAt?: string;
    authorId?: number;
    id: number;
    status?: 'draft' | 'published' | 'archived'; // Ajout du statut de l'actualité
    updatedAt?: string; // Optionnel, pour stocker la date de mise à jour
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
    lastLogin?: string | null; // Optionnel, pour stocker la dernière connexion
    isActive: boolean; // Pour savoir si l'utilisateur est actif ou non
  };
  status: 'draft' | 'published' | 'archived'; // Ajout du statut de l'actualité
  updatedAt?: string; // Optionnel, pour stocker la date de mise à jour
};

/** ----------------- NEWS POST STATUS TYPE ------------------ */
export type NewsPostStatus = {
  id: number;
  status: 'draft' | 'published' | 'archived';
  updatedAt: string;
  postId: number; // ID de l'actualité associée
  post?: NewsPost; // Optionnel, pour inclure l'actualité associée
  author?: {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    createdAt: string;
    updatedAt: string;
    lastLogin?: string | null; // Optionnel, pour stocker la dernière connexion
    isActive: boolean; // Pour savoir si l'utilisateur est actif ou non
  };
};