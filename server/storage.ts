import * as Database from 'better-sqlite3';
import path from 'path';

// Création du chemin absolu vers la base SQLite dans le dossier `server/db`
const dbPath = path.resolve(__dirname, 'db', 'data.sqlite');

// Initialisation de la connexion à la base SQLite
const db = new Database(dbPath, { verbose: process.env.NODE_ENV === 'development' ? console.log : undefined });

// Interface pour définir les types des données
interface Item {
  id: string;
  name: string;
  description?: string;
}

// Création de la table 'items' si elle n'existe pas déjà
try {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS items (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT
    )
  `).run();
} catch (error) {
  console.error('Erreur lors de la création de la table items :', error);
}

// Exportation de la connexion à la base de données
export default db;