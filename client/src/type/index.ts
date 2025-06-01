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