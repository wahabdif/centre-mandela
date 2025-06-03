import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { users, appointments, newsPosts } from './schema';
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
export type UpdateUser = Partial<Omit<NewUser, 'id'>>;
export type Appointment = InferSelectModel<typeof appointments>;
export type NewAppointment = InferInsertModel<typeof appointments>;
export type UpdateAppointment = Partial<Omit<NewAppointment, 'id'>>;
export type UpdateAppointmentStatus = 'pending' | 'confirmed' | 'cancelled';
export type NewsPost = InferSelectModel<typeof newsPosts>;
export type NewNewsPost = InferInsertModel<typeof newsPosts>;
export type UpdateNewsPost = Partial<Omit<NewNewsPost, 'id'>>;
export interface ContactMessage {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    message?: string;
    status: string;
    createdAt: number;
}
export type NewContactMessage = Omit<ContactMessage, 'id' | 'createdAt'>;
export type UpdateContactMessageStatus = 'read' | 'unread';
