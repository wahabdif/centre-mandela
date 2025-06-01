// @ts-ignore
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

// Simulation de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialise SQLite (base de données locale)
const dbPath = path.resolve(__dirname, 'data.sqlite');
// @ts-ignore
const db = new Database(dbPath, { verbose: console.log });

// Création de la table 'contact' si elle n'existe pas
db.prepare(`
  CREATE TABLE IF NOT EXISTS contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT,
    createdAt TEXT NOT NULL DEFAULT (datetime('now')),
    httpStatus TEXT
  )
`).run();

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  createdAt: string;
  httpStatus?: string | null;
};

// === Schéma Zod (validation) ===
export const ContactInputSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  service: z.string().min(1, "Le service est requis"),
  message: z.string().nullable().optional(),
  id: z.number().positive({ message: "L'ID doit être un nombre positif valide." }), // Validation ajoutée
});

// === Fonctions CRUD ===

// Validation pour les IDs
function validateId(id: number): void {
  if (typeof id !== "number" || id <= 0 || isNaN(id)) {
    throw new Error("L'ID doit être un nombre positif valide.");
  }
}

// Récupérer tous les messages
export function getAllContactMessages(): ContactMessage[] {
  return db.prepare(`SELECT * FROM contact ORDER BY datetime(createdAt) DESC`).all() as ContactMessage[];
}

// Récupérer un message par ID
export function getContactMessageById(id: number): ContactMessage | undefined {
  validateId(id); // Ajout de validation
  return db.prepare(`SELECT * FROM contact WHERE id = ?`).get(id) as ContactMessage | undefined;
}

// Créer un message
export function createContactMessage(data: z.infer<typeof ContactInputSchema>): ContactMessage {
  const info = db.prepare(`
    INSERT INTO contact (name, email, phone, service, message, createdAt)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
  `).run(data.name, data.email, data.phone, data.service, data.message ?? null);

  const newId = Number(info.lastInsertRowid);
  validateId(newId); // Ajout de validation pour l'ID généré

  return getContactMessageById(newId)!;
}

// Mettre à jour le statut d'un message
export function updateContactMessageStatus(id: number, httpStatus: string): ContactMessage | undefined {
  validateId(id); // Ajout de validation
  const result = db.prepare(`UPDATE contact SET httpStatus = ? WHERE id = ?`).run(httpStatus, id);

  return result.changes > 0 ? getContactMessageById(id) : undefined;
}

export default db;