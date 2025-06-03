import type { User, InsertUser, Appointment, InsertAppointment, NewsPost, InsertNewsPost, ContactMessage, InsertContactMessage } from './schema';

export type { User, InsertUser, Appointment, InsertAppointment, NewsPost, InsertNewsPost, ContactMessage, InsertContactMessage };

// Alias pour compatibilité
export type NewUser = InsertUser;
export type NewAppointment = InsertAppointment;
export type NewNewsPost = InsertNewsPost;
export type NewContactMessage = InsertContactMessage;

// Type pour mettre à jour le statut des messages de contact
export interface UpdateContactMessageStatus {
  status: 'read' | 'unread' | 'archived';
}