import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve(__dirname, 'data.db'));

// Exemple : créer une table si elle n'existe pas
db.prepare(`
  CREATE TABLE IF NOT EXISTS items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
  )
`).run();

export default db;
