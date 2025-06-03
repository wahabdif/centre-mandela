// Re-export everything from individual files
export * from './sqlite';
export * from './users';
export * from './appointments';
export * from './contact';
export * from './news';

// Export the main db instance
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { users, appointments, contactMessages, newsPosts } from '../../shared/schema';

const sqlite = new Database('./data.sqlite');
export const db = drizzle(sqlite, { 
  schema: { users, appointments, contactMessages, newsPosts } 
});