import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: './server/db/schema', // Chemin vers tes fichiers de tables (peut être ajusté)
  out: './server/db/migrations', // Où stocker les fichiers de migration générés
  driver: 'mysql2', // ou 'pg', 'better-sqlite3' selon ton usage
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
});
