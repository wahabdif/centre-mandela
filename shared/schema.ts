import { z } from "zod";

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

// --- Ajout du schéma/table appointments pour Drizzle ORM ---
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

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

// Schéma actualisé pour les rendez-vous
export const updateAppointmentSchema = z.object({
  name: z.string().min(1, "Le nom est requis").optional(),
  email: z.string().email("Email invalide").optional(),
  phone: z.string().min(1, "Le téléphone est requis").optional(),
  service: z.string().min(1, "Le service est requis").optional(),
  message: z.string().optional(),
  status: z.enum(["pending", "confirmed", "cancelled"]).optional(),
});
export type UpdateAppointment = z.infer<typeof updateAppointmentSchema>;

// Schéma pour les traductions
export const translationsSchema = z.object({
  appointment: z.object({
    title: z.string().min(1, "Le titre est requis"),
    description: z.string().min(1, "La description est requise"),
    preparationTitle: z.string().min(1, "Le titre de préparation est requis"),
    preparationSubtitle: z.string().min(1, "Le sous-titre de préparation est requis"),
    preparationDescription: z.string().min(1, "La description de préparation est requise"),
    stepsTitle: z.string().min(1, "Le titre des étapes est requis"),
    stepsDescription: z.string().min(1, "La description des étapes est requise"),
    finalNote: z.string().min(1, "La note finale est requise"),
    back: z.string().min(1, "Le texte de retour est requis"),
    updateAppointmentStatus: z.string().min(1, "Le texte de mise à jour du statut est requis"),
  }),
  doctors: z.object({
    sectionTitle: z.string().min(1, "Le titre de la section des médecins est requis"),
  }),
  footer: z.object({
    title: z.string().min(1, "Le titre du pied de page est requis"),
    subtitle: z.string().min(1, "Le sous-titre du pied de page est requis"),
    rights: z.string().min(1, "Le texte des droits est requis"),
  }),
  form: z.object({
    contactUsLabel: z.string().min(1, "Le label de contact est requis"),
    nameLabel: z.string().min(1, "Le label du nom est requis"),
    emailLabel: z.string().min(1, "Le label de l'email est requis"),
    phoneLabel: z.string().min(1, "Le label du téléphone est requis"),
    messageLabel: z.string().min(1, "Le label du message est requis"),
    submitButton: z.string().min(1, "Le texte du bouton de soumission est requis"),
    back: z.string().min(1, "Le texte de retour est requis"),
    successMessage: z.string().min(1, "Le message de succès est requis"),
    errorMessage: z.string().min(1, "Le message d'erreur est requis"),
  }),
  news: z.object({
    title: z.string().min(1, "Le titre des actualités est requis"),
    description: z.string().min(1, "La description des actualités est requise"),
    readMore: z.string().min(1, "Le texte 'Lire la suite' est requis"),
    back: z.string().min(1, "Le texte de retour est requis"),
    createPostButton: z.string().min(1, "Le texte du bouton de création de post est requis"),
    deletePostButton: z.string().min(1, "Le texte du bouton de suppression de post est requis"),
    updatePostButton: z.string().min(1, "Le texte du bouton de mise à jour de post est requis"),
    postCreatedMessage: z.string().min(1, "Le message de post créé est requis"),
    postUpdatedMessage: z.string().min(1, "Le message de post mis à jour est requis"),
    postDeletedMessage: z.string().min(1, "Le message de post supprimé est requis"),
    errorMessage: z.string().min(1, "Le message d'erreur est requis"),
    successMessage: z.string().min(1, "Le message de succès est requis"),
  }),
  user: z.object({
    username: z.string().min(1, "Le nom d'utilisateur est requis"),
    password: z.string().min(1, "Le mot de passe est requis"),
    confirmPassword: z.string().min(1, "La confirmation du mot de passe est requise"),
  }),
});
export type Translations = z.infer<typeof translationsSchema>;
export type InsertTranslations = z.infer<typeof translationsSchema>;
export const updateTranslationsSchema = translationsSchema.partial();
export type UpdateTranslations = z.infer<typeof updateTranslationsSchema>;

export const insertNewsPostSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  content: z.string().min(1, "Le contenu est requis"),
});
export type InsertNewsPost = z.infer<typeof insertNewsPostSchema>;

export const updateNewsPostSchema = z.object({
  title: z.string().min(1, "Le titre est requis").optional(),
  content: z.string().min(1, "Le contenu est requis").optional(),
});

// ----------- TYPE POUR LE CONTROLLER updateAppointmentStatus -----------
import type { Request, Response } from "express";
export type UpdateAppointmentStatus = (req: Request, res: Response) => Promise<void>;