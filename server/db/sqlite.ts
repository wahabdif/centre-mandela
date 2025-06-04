import { drizzle } from 'drizzle-orm/sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../../shared/schema';

// Initialise SQLite (le fichier sera créé s'il n'existe pas)
const sqlite = new Database('sqlite.db');

// Initialise Drizzle avec le schéma
export const db = drizzle(sqlite, { schema });
