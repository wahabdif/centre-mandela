import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

// Résolution __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin de la base de données
const dbPath = path.resolve(__dirname, 'data.sqlite');

// Connexion à SQLite
export const db = new Database(dbPath, { verbose: console.log });

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

// Type TypeScript pour une entrée de message de contact
export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  createdAt: string;
  httpStatus?: string;
};

// Schéma de validation avec Zod
export const ContactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  service: z.string().min(1),
  message: z.string().optional(),
});

// Fonctions d’accès à la base de données

export function getAllContactMessages(): ContactMessage[] {
  return db.prepare(`SELECT * FROM contact ORDER BY createdAt DESC`).all() as ContactMessage[];
}

export function getContactMessageById(id: number): ContactMessage | undefined {
  return db.prepare(`SELECT * FROM contact WHERE id = ?`).get(id) as ContactMessage | undefined;
}

export function createContactMessage(data: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage {
  const stmt = db.prepare(`
    INSERT INTO contact (name, email, phone, service, message, httpStatus)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(data.name, data.email, data.phone, data.service, data.message ?? null, data.httpStatus ?? null);

  return getContactMessageById(result.lastInsertRowid as number)!;
}

export function updateContactMessageStatus(id: number, status: string): void {
  db.prepare(`UPDATE contact SET httpStatus = ? WHERE id = ?`).run(status, id);
}