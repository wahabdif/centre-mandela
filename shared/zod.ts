
import { z } from 'zod';

// --- Zod: Schéma utilisateur ---
export const insertUserSchema = z
  .object({
    username: z.string().min(1, "Le nom d'utilisateur est requis"),
    password: z.string().min(1, 'Le mot de passe est requis'),
    confirmPassword: z.string().min(1, 'La confirmation du mot de passe est requise'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
  });

// --- Zod: Contact Message ---
export const contactMessageSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(1, 'Le téléphone est requis'),
  service: z.string().min(1, 'Le service est requis'),
  message: z.string().min(1, 'Le message est requis'),
});

// --- Zod: Appointment ---
export const appointmentSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(1, 'Le téléphone est requis'),
  service: z.string().min(1, 'Le service est requis'),
  message: z.string().optional(),
  status: z.enum(['pending', 'confirmed', 'cancelled']).default('pending'),
});

// Alias pour compatibilité
export const insertContactMessageSchema = contactMessageSchema;
export const insertAppointmentSchema = appointmentSchema;
