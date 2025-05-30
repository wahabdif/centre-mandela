import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers la base SQLite (dans le dossier data sous db)
const dbPath = path.resolve(__dirname, 'data', 'database.sqlite');

const db = new Database(dbPath);

// Création de la table contact si elle n'existe pas
db.prepare(`
  CREATE TABLE IF NOT EXISTS contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export default db;
