import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Nom d'utilisateur requis"),
  password: z.string().min(1, "Mot de passe requis"),
});

export const appointmentSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  date: z.string().min(1),
  message: z.string().optional(),
});

export const contactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  service: z.string().min(1),
  message: z.string().nullable().optional(),
});

export const newsPostSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  content: z.string().min(1),
  createdAt: z.string(), // ou z.date() si tu veux gérer des dates en objets JS
});
