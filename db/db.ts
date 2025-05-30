import Database from 'better-sqlite3';
import { z } from 'zod';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour ESM (__dirname simulation)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialise SQLite
const dbPath = path.resolve(__dirname, 'data.sqlite');
const db = new Database(dbPath);

// === Typage TypeScript ===
export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  status: 'pending' | 'read' | 'archived';
  createdAt: string;
};

// === Schéma Zod (optionnel si besoin en interne) ===
export const ContactInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string().nullable().optional(),
});

// === Fonctions CRUD ===

// Tous les messages
export function getAllContactMessages(): ContactMessage[] {
  return db.prepare(`SELECT * FROM contact ORDER BY createdAt DESC`).all();
}

// Message par ID
export function getContactMessageById(id: number): ContactMessage | undefined {
  return db.prepare(`SELECT * FROM contact WHERE id = ?`).get(id);
}

// Créer un message
export function createContactMessage(data: z.infer<typeof ContactInputSchema>): ContactMessage {
  const stmt = db.prepare(`
    INSERT INTO contact (name, email, phone, service, message, status, createdAt)
    VALUES (?, ?, ?, ?, ?, 'pending', datetime('now'))
  `);

  const info = stmt.run(data.name, data.email, data.phone, data.service, data.message ?? null);

  return getContactMessageById(Number(info.lastInsertRowid))!;
}

// Mettre à jour le statut
export function updateContactMessageStatus(id: number, status: 'pending' | 'read' | 'archived'): ContactMessage | undefined {
  const stmt = db.prepare(`UPDATE contact SET status = ? WHERE id = ?`);
  const result = stmt.run(status, id);

  if (result.changes === 0) return undefined;
  return getContactMessageById(id);
}

export default db;
