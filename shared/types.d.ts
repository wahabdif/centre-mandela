export type { User, InsertUser, Appointment, InsertAppointment, NewsPost, InsertNewsPost, ContactMessage, InsertContactMessage } from './schema';
export type { InsertUser as NewUser } from './schema';
export type { InsertAppointment as NewAppointment } from './schema';
export type { InsertNewsPost as NewNewsPost } from './schema';
export type { InsertContactMessage as NewContactMessage } from './schema';
export interface UpdateContactMessageStatus {
    status: 'read' | 'unread' | 'archived';
}
