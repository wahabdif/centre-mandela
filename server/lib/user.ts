import { db } from '../db/contact';
import type { NewUser, User } from '../../client/src/type/index';

/**
 * Récupérer un utilisateur par ID
 */
export async function getUserById(id: number): Promise<User | undefined> {
  const row = db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
  return row as User | undefined;
}

/**
 * Récupérer un utilisateur par email
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  const row = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
  return row as User | undefined;
}

/**
 * Créer un nouvel utilisateur
 */
export async function createUser(data: NewUser): Promise<User> {
  const stmt = db.prepare(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`);
  const result = stmt.run(data.name, data.email, data.password);
  const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(result.lastInsertRowid);
  return user as User;
}

/**
 * Supprimer un utilisateur par ID
 */
export async function deleteUser(id: number): Promise<void> {
  db.prepare(`DELETE FROM users WHERE id = ?`).run(id);
}

/**
 * Lister tous les utilisateurs
 */
export async function getAllUsers(): Promise<User[]> {
  const rows = db.prepare(`SELECT * FROM users`).all();
  return rows as User[];
}
