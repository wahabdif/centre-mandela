import { eq } from 'drizzle-orm';
import { db } from './index';
import { users } from '../../shared/schema';
import type { User, NewUser } from '../../shared/types';
import bcrypt from 'bcryptjs';

// GET USERS
export async function getAllUsers(): Promise<User[]> {
  return await db.select().from(users);
}

export async function getUserById(id: number): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result[0];
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
  return result[0];
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0];
}

export async function getUserByUsernameOrEmail(identifier: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(
    eq(users.username, identifier)
  );
  
  const result2 = await db.select().from(users).where(
    eq(users.email, identifier)
  );

  return result[0] || result2[0];
}

export async function getUserByIdOrUsername(identifier: number | string): Promise<User | undefined> {
  if (typeof identifier === 'number') {
    return getUserById(identifier);
  }
  return getUserByUsername(identifier);
}

// CREATE USERS
export async function createUser(userData: NewUser): Promise<User> {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const result = await db.insert(users).values({...userData, password: hashedPassword}).returning();
  return result[0];
}

export async function createUserWithEmail(email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.insert(users).values({ email, password: hashedPassword, username: email }).returning();
  return result[0];
}

export async function updateUser(id: number, userData: Partial<NewUser>): Promise<User | undefined> {
  const hashedPassword = userData.password ? await bcrypt.hash(userData.password, 10) : undefined;
  const updates = hashedPassword ? {...userData, password: hashedPassword} : userData;
  await db.update(users).set(updates).where(eq(users.id, id));
  return getUserById(id);
}

export async function updateUserByUsername(username: string, updates: Partial<NewUser>): Promise<User | undefined> {
  const hashedPassword = updates.password ? await bcrypt.hash(updates.password, 10) : undefined;
  const updatesWithHashedPassword = hashedPassword ? {...updates, password: hashedPassword} : updates;
  const result = await db.update(users).set(updatesWithHashedPassword).where(eq(users.username, username)).returning();
  return result[0];
}

export async function updateUserPassword(id: number, newPassword: string): Promise<User | undefined> {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const result = await db.update(users).set({ password: hashedPassword }).where(eq(users.id, id)).returning();
  return result[0];
}

export async function updateUserEmail(id: number, newEmail: string): Promise<User | undefined> {
  const result = await db.update(users).set({ email: newEmail }).where(eq(users.id, id)).returning();
  return result[0];
}

// DELETE USERS
export async function deleteUser(id: number): Promise<void> {
  await db.delete(users).where(eq(users.id, id));
}

export async function deleteUserByEmail(email: string): Promise<boolean> {
  const result = await db.delete(users).where(eq(users.email, email));
  return result.rowCount > 0;
}