import { db } from '../db/contact';
import { users } from 'shared/schema.';
import { eq } from 'drizzle-orm';
// Update the import path below to the correct relative path, for example:
import type { NewUser, User } from '../../client/src/type/index';
// Or, if the types do not exist, create them in a new file and import from there.

/** Récupérer un utilisateur par ID */
export async function getUserById(id: number): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.id, id));
  return result[0];
}

/** Récupérer un utilisateur par email */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.email, email));
  return result[0];
}

/** Créer un nouvel utilisateur */
export async function createUser(data: NewUser): Promise<User> {
  const inserted = await db.insert(users).values(data).returning();
  return inserted[0];
}

/** Supprimer un utilisateur par ID */
export async function deleteUser(id: number): Promise<void> {
  await db.delete(users).where(eq(users.id, id));
}

/** Lister tous les utilisateurs */
export async function getAllUsers(): Promise<User[]> {
  return db.select().from(users);
}
