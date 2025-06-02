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
// --- Schéma/table users pour Drizzle ORM ---
export const users = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    username: text("username").notNull(),
    password: text("password").notNull(),
    email: text("email"),
    role: text("role"),
});
// Schéma message de contact (sans id)
export const insertContactMessageSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(1, "Le téléphone est requis"),
    message: z.string().min(1, "Le message est requis"),
});
// Schéma rendez-vous (sans id)
export const insertAppointmentSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(1, "Le téléphone est requis"),
    service: z.string().min(1, "Le service est requis"),
    message: z.string().optional(),
    status: z.enum(["pending", "confirmed", "cancelled"]).default("pending"),
});
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
    status: text("status").notNull().default("draft"),
});
// --- Fonction utilitaire pour la mise à jour d'une newsPost ---
/**
 * Met à jour une newsPost par son id.
 * @param id L'identifiant de la newsPost à mettre à jour.
 * @param data Les champs à mettre à jour (doit être un sous-ensemble de InsertNewsPost).
 */
export async function updateNewsPost(id, data) {
    // Cette fonction doit être implémentée dans la couche DB, pas dans le schéma partagé.
    // Ici, on ne met que la signature pour le typage partagé.
    throw new Error("Not implemented: à implémenter côté serveur dans la couche DB.");
}
