import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../../shared/schema';

// Ouvre ou crée la base SQLite
const sqlite = new Database('data.sqlite');

// Initialise Drizzle avec le schéma
export const db = drizzle(sqlite, { schema });
