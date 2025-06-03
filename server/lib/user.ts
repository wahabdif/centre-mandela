
import { db } from '../db/index';
import { users } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import type { User, InsertUser } from '../../shared/schema';

/**
 * Récupérer un utilisateur par ID
 */
export async function getUserById(id: number): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0] as User | undefined;
}

/**
 * Récupérer un utilisateur par email
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0] as User | undefined;
}

/**
 * Récupérer un utilisateur par username
 */
export async function getUserByUsername(username: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
  return result[0] as User | undefined;
}

/**
 * Créer un nouvel utilisateur
 */
export async function createUser(data: InsertUser): Promise<User> {
  const result = await db.insert(users).values(data).returning();
  return result[0] as User;
}

/**
 * Supprimer un utilisateur par ID
 */
export async function deleteUser(id: number): Promise<void> {
  await db.delete(users).where(eq(users.id, id));
}

/**
 * Lister tous les utilisateurs
 */
export async function getAllUsers(): Promise<User[]> {
  const result = await db.select().from(users);
  return result as User[];
}
