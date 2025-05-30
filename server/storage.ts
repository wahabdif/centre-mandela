import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(__dirname, 'db', 'database.sqlite');
const db = new Database(dbPath);

// Création de la table si elle n'existe pas
db.prepare(`
  CREATE TABLE IF NOT EXISTS contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    createdAt TEXT NOT NULL
  )
`).run();

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  status: string;
  createdAt: string; // ISO string
};

export type InsertContactMessage = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string | null;
  status?: string;
};

export async function getAllContactMessages(): Promise<ContactMessage[]> {
  const stmt = db.prepare('SELECT * FROM contact ORDER BY datetime(createdAt) DESC');
  return stmt.all();
}

export async function createContactMessage(data: InsertContactMessage): Promise<ContactMessage> {
  const createdAt = new Date().toISOString();
  const status = data.status ?? 'pending';

  const insert = db.prepare(`
    INSERT INTO contact (name, email, phone, service, message, status, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const info = insert.run(data.name, data.email, data.phone, data.service, data.message ?? null, status, createdAt);

  const get = db.prepare('SELECT * FROM contact WHERE id = ?');
  return get.get(info.lastInsertRowid) as ContactMessage;
}

export async function updateContactMessageStatus(id: number, status: string): Promise<ContactMessage | null> {
  const allowedStatuses = ['pending', 'read', 'archived'];
  if (!allowedStatuses.includes(status)) throw new Error(`Statut invalide : ${status}`);

  const update = db.prepare('UPDATE contact SET status = ? WHERE id = ?');
  const info = update.run(status, id);
  if (info.changes === 0) return null;

  const get = db.prepare('SELECT * FROM contact WHERE id = ?');
  return get.get(id) as ContactMessage;
}

export async function getContactMessageById(id: number): Promise<ContactMessage | null> {
  const get = db.prepare('SELECT * FROM contact WHERE id = ?');
  return get.get(id) ?? null;
}
