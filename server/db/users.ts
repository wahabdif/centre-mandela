import { eq, or } from 'drizzle-orm';
import { db } from './sqlite';
import { users } from '../../shared/schema';
import { hash, compare } from 'bcrypt';

// Récupérer un utilisateur par ID
export async function getUserById(id: number) {
  return db.select().from(users).where(eq(users.id, id)).get();
}

// Récupérer un utilisateur par username
export async function getUserByUsername(username: string) {
  return db.select().from(users).where(eq(users.username, username)).get();
}

// Récupérer un utilisateur par email
export async function getUserByEmail(email: string) {
  return db.select().from(users).where(eq(users.email, email)).get();
}

// Récupérer tous les utilisateurs
export async function getAllUsers() {
  return db.select().from(users).all();
}

// Créer un utilisateur (username + password)
export async function createUser(username: string, password: string) {
  const hashedPassword = await hash(password, 10);
  return db.insert(users).values({ username, password: hashedPassword }).returning().get();
}

// Créer un utilisateur avec email
export async function createUserWithEmail(username: string, email: string, password: string) {
  const hashedPassword = await hash(password, 10);
  return db.insert(users).values({ username, email, password: hashedPassword }).returning().get();
}

// Vérifier un mot de passe
export async function verifyPassword(password: string, hashValue: string) {
  return compare(password, hashValue);
}

// Hasher un mot de passe
export async function hashPassword(password: string) {
  return hash(password, 10);
}

// Mettre à jour le mot de passe d'un utilisateur par ID
export async function updateUserPassword(id: number, newPassword: string) {
  const hashedPassword = await hashPassword(newPassword);
  return db
    .update(users)
    .set({ password: hashedPassword })
    .where(eq(users.id, id))
    .returning()
    .get();
}

// Mettre à jour l'email d'un utilisateur par ID
export async function updateUserEmail(id: number, newEmail: string) {
  return db.update(users).set({ email: newEmail }).where(eq(users.id, id)).returning().get();
}

// Mettre à jour un utilisateur par ID (username et/ou password)
export async function updateUser(
  id: number,
  data: Partial<{ username: string; password: string }>,
) {
  const updateData: Partial<{ username: string; password: string }> = {};
  if (data.username) {
    updateData.username = data.username;
  }
  if (data.password) {
    updateData.password = await hashPassword(data.password);
  }
  return db.update(users).set(updateData).where(eq(users.id, id)).returning().get();
}

// Mettre à jour un utilisateur par username (email et/ou password)
export async function updateUserByUsername(
  username: string,
  data: Partial<{ email: string; password: string }>,
) {
  const updateData: Partial<{ email: string; password: string }> = {};
  if (data.email) {
    updateData.email = data.email;
  }
  if (data.password) {
    updateData.password = await hashPassword(data.password);
  }
  return db.update(users).set(updateData).where(eq(users.username, username)).returning().get();
}

// Supprimer un utilisateur par ID
export async function deleteUser(id: number) {
  return db.delete(users).where(eq(users.id, id)).run();
}

// Supprimer un utilisateur par email
export async function deleteUserByEmail(email: string) {
  return db.delete(users).where(eq(users.email, email)).run();
}

// Récupérer un utilisateur par username OU email
export async function getUserByUsernameOrEmail(usernameOrEmail: string) {
  return db
    .select()
    .from(users)
    .where(or(eq(users.username, usernameOrEmail), eq(users.email, usernameOrEmail)))
    .get();
}

// Récupérer un utilisateur par ID OU username
export async function getUserByIdOrUsername(idOrUsername: number | string) {
  if (typeof idOrUsername === 'number') {
    return getUserById(idOrUsername);
  } else {
    return getUserByUsername(idOrUsername);
  }
}

export {};
