// Re-export types from schema for backward compatibility
export type {
  User,
  InsertUser,
  Appointment,
  InsertAppointment,
  NewsPost,
  InsertNewsPost,
  ContactMessage,
  InsertContactMessage
} from './schema';

// Aliases for backward compatibility
export type { InsertUser as NewUser } from './schema';
export type { InsertAppointment as NewAppointment } from './schema';
export type { InsertNewsPost as NewNewsPost } from './schema';
export type { InsertContactMessage as NewContactMessage } from './schema';

// Additional types
export interface UpdateContactMessageStatus {
  status: 'read' | 'unread' | 'archived';
}

// Pour la mise à jour partielle d'un rendez-vous (sans createdAt ni id)
export type UpdateAppointment = Partial<Omit<InsertAppointment, 'createdAt'>>;

// Pour la mise à jour du statut uniquement
export type UpdateAppointmentStatus = 'pending' | 'confirmed' | 'cancelled';
