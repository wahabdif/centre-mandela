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

// Manquant dans ta version actuelle :
export type UpdateAppointment = Partial<Omit<InsertAppointment, 'createdAt'>>;
export type UpdateAppointmentStatus = 'pending' | 'confirmed' | 'cancelled';
