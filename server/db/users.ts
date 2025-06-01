import { eq } from 'drizzle-orm';
import { db } from './sqlite';
import { users } from '../../shared/schema';
import { hash, compare } from 'bcrypt';

export async function getUserById(id: number) {
  return db.select().from(users).where(eq(users.id, id)).get();
}

export async function getUserByUsername(username: string) {
  return db.select().from(users).where(eq(users.username, username)).get();
}

export async function createUser(username: string, password: string) {
  const hashedPassword = await hash(password, 10);
  return db.insert(users).values({ username, password: hashedPassword }).returning().get();
}

export async function verifyPassword(password: string, hash: string) {
  return compare(password, hash);
}

export async function hashPassword(password: string) {
  return hash(password, 10);
}
export async function updateUserPassword(id: number, newPassword: string) {
  const hashedPassword = await hashPassword(newPassword);
  return db.update(users).set({ password: hashedPassword }).where(eq(users.id, id)).returning().get();
}
export async function deleteUser(id: number) {
  return db.delete(users).where(eq(users.id, id)).run();
}
export async function getAllUsers() {
  return db.select().from(users).all();
}
export async function updateUser(id: number, data: Partial<{ username: string; password: string }>) {
  const updateData: Partial<{ username: string; password: string }> = {};
  if (data.username) {
    updateData.username = data.username;
  }
  if (data.password) {
    updateData.password = await hashPassword(data.password);
  }
  return db.update(users).set(updateData).where(eq(users.id, id)).returning().get();
}
export async function getUserByEmail(email: string) {
  return db.select().from(users).where(eq(users.email, email)).get();
}
export async function createUserWithEmail(username: string, email: string, password: string) {
  const hashedPassword = await hashPassword(password);
  return db.insert(users).values({ username, email, password: hashedPassword }).returning().get();
}
export async function updateUserEmail(id: number, newEmail: string) {
  return db.update(users).set({ email: newEmail }).where(eq(users.id, id)).returning().get();
}
export async function deleteUserByEmail(email: string) {
  return db.delete(users).where(eq(users.email, email)).run();
}
export async function getUserByUsernameOrEmail(usernameOrEmail: string) {
  return db.select().from(users).where(
    eq(users.username, usernameOrEmail)
    .or(eq(users.email, usernameOrEmail))
  ).get();
}
export async function updateUserByUsername(username: string, data: Partial<{ email: string; password: string }>) {