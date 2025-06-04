import { drizzle } from 'drizzle-orm/sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../shared/schema'; // ← adapté ici

const sqlite = new Database('sqlite.db');

export const db = drizzle(sqlite, { schema });
