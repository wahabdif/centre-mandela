import { z } from "zod";

// Schéma utilisateur
export const insertUserSchema = z.object({
  username: z.string().min(1, "Le nom d'utilisateur est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export type User = {
  id: number;
  username: string;
  password: string;
};

// Schéma message de contact
export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  message: z.string().min(1, "Le message est requis"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: number;
};

// Schéma rendez-vous
export const insertAppointmentSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  service: z.string().min(1, "Le service est requis"),
  message: z.string().optional(),
});

export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;

export type Appointment = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: string;
  createdAt: number;
};