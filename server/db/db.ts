import Database from 'better-sqlite3';
import { z } from 'zod'; // Import corrigé
import path from 'path';
import { fileURLToPath } from 'url';

// Simulation de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialise SQLite (base de données locale)
const dbPath = path.resolve(__dirname, 'data.sqlite');
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
    createdAt TEXT NOT NULL DEFAULT (datetime('now'))
  )
`).run();

// === Typage TypeScript ===
export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  createdAt: string;
};

// === Schéma Zod (validation) ===
export const ContactInputSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  service: z.string().min(1, "Le service est requis"),
  message: z.string().nullable().optional(),
});

// === Fonctions CRUD ===

// Récupérer tous les messages
export function getAllContactMessages(): ContactMessage[] {
  return db.prepare(`SELECT * FROM contact ORDER BY datetime(createdAt) DESC`).all() as ContactMessage[];
}

// Récupérer un message par ID
export function getContactMessageById(id: number): ContactMessage | undefined {
  return db.prepare(`SELECT * FROM contact WHERE id = ?`).get(id) as ContactMessage | undefined;
}

// Créer un message
export function createContactMessage(data: z.infer<typeof ContactInputSchema>): ContactMessage {
  const info = db.prepare(`
    INSERT INTO contact (name, email, phone, service, message, createdAt)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
  `).run(data.name, data.email, data.phone, data.service, data.message ?? null);

  return getContactMessageById(Number(info.lastInsertRowid))!;
}

// Mettre à jour le statut d'un message
export function updateContactMessageStatus(id: number, httpStatus: string): ContactMessage | undefined {
  const result = db.prepare(`UPDATE contact SET httpStatus = ? WHERE id = ?`).run(httpStatus, id);

  return result.changes > 0 ? getContactMessageById(id) : undefined;
}

export default db;