import type { User, InsertUser, Appointment, InsertAppointment, NewsPost, InsertNewsPost, ContactMessage, InsertContactMessage } from './schema';
export type { User, InsertUser, Appointment, InsertAppointment, NewsPost, InsertNewsPost, ContactMessage, InsertContactMessage };
export type NewUser = InsertUser;
export type NewAppointment = InsertAppointment;
export type NewNewsPost = InsertNewsPost;
export type NewContactMessage = InsertContactMessage;
export interface UpdateContactMessageStatus {
    status: 'read' | 'unread' | 'archived';
}
