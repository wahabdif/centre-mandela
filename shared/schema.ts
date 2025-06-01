import { z } from "zod";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

// Schéma utilisateur
export const insertUserSchema = z.object({
  username: z.string().min(1, "Le nom d'utilisateur est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
  confirmPassword: z.string().min(1, "La confirmation du mot de passe est requise"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export type User = {
  id: number;
  username: string;
  password: string;
  email?: string;
  role?: string;
};

// --- Schéma/table users pour Drizzle ORM ---
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
  password: text("password").notNull(),
  email: text("email"),
  role: text("role"),
});

// Schéma message de contact
export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  message: z.string().min(1, "Le message est requis"),
  id: z.number().positive({ message: "L'ID doit être un nombre positif valide." }), // Validation ajoutée
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: number;
  status: "pending" | "read" | "archived";
  httpStatus: "pending" | "read" | "archived";
};

// Schéma rendez-vous
export const insertAppointmentSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  service: z.string().min(1, "Le service est requis"),
  message: z.string().optional(),
  status: z.enum(["pending", "confirmed", "cancelled"]).default("pending"),
  id: z.number().positive({ message: "L'ID doit être un nombre positif valide." }), // Validation ajoutée
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

// --- Schéma/table appointments pour Drizzle ORM ---
export const appointments = sqliteTable("appointments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message"),
  status: text("status").notNull(),
  createdAt: integer("createdAt").notNull(),
});

// --- Schéma/table newsPosts pour Drizzle ORM ---
export const newsPosts = sqliteTable("newsPosts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: text("createdAt").notNull(),
  authorId: integer("authorId").notNull(),
  // Ajoute d'autres champs si besoin
});