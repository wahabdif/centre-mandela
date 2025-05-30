import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
// Gestion __dirname en mode ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Chemin absolu vers la base de données SQLite
const dbPath = path.resolve(__dirname, 'db', 'database.sqlite');
// Initialisation de la connexion à la base SQLite
const db = new Database(dbPath, { verbose: console.log });
// Création de la table 'contact' si elle n'existe pas encore
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
/**
 * Récupère tous les messages de contact, triés du plus récent au plus ancien
 */
export function getAllContactMessages() {
    const stmt = db.prepare('SELECT * FROM contact ORDER BY datetime(createdAt) DESC');
    return stmt.all();
}
/**
 * Crée un nouveau message de contact et retourne l'enregistrement complet
 */
export function createContactMessage(data) {
    const createdAt = new Date().toISOString();
    const status = data.status ?? 'pending';
    const insert = db.prepare(`
    INSERT INTO contact (name, email, phone, service, message, status, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
    const info = insert.run(data.name, data.email, data.phone, data.service, data.message ?? null, status, createdAt);
    const get = db.prepare('SELECT * FROM contact WHERE id = ?');
    return get.get(info.lastInsertRowid);
}
/**
 * Met à jour le statut d'un message identifié par son id.
 * Lance une erreur si le statut est invalide.
 * Retourne le message mis à jour ou null si l'id n'existe pas.
 */
export function updateContactMessageStatus(id, status) {
    const allowedStatuses = ['pending', 'read', 'archived'];
    if (!allowedStatuses.includes(status)) {
        throw new Error(`Statut invalide : ${status}`);
    }
    const update = db.prepare('UPDATE contact SET status = ? WHERE id = ?');
    const info = update.run(status, id);
    if (info.changes === 0)
        return null;
    const get = db.prepare('SELECT * FROM contact WHERE id = ?');
    return get.get(id);
}
/**
 * Récupère un message de contact par son id ou retourne null si non trouvé
 */
export function getContactMessageById(id) {
    const get = db.prepare('SELECT * FROM contact WHERE id = ?');
    return get.get(id) ?? null;
}
