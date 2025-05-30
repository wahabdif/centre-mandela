import Database from 'better-sqlite3';
import path from 'path';

// Création du chemin absolu vers la base SQLite dans le dossier actuel
const dbPath = path.resolve(__dirname, 'data.db');

// Initialisation de la connexion à la base SQLite
const db = new Database(dbPath, { verbose: console.log });

// Création de la table 'items' si elle n'existe pas déjà
db.prepare(`
  CREATE TABLE IF NOT EXISTS items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
  )
`).run();

export default db;
