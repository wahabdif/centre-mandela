import { eq, or } from 'drizzle-orm';
import { db } from './index';
import { users } from '../../shared/schema';
import { NewUser, UpdateUser, User } from '../../shared/types';
import bcrypt from 'bcryptjs';

// GET
export async function getUserById(id: number): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.id, id));
  return result[0];
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.username, username));
  return result[0];
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(eq(users.email, email));
  return result[0];
}

export async function getUserByUsernameOrEmail(identifier: string): Promise<User | undefined> {
  const result = await db.select().from(users).where(
    or(eq(users.username, identifier), eq(users.email, identifier))
  );
  return result[0];
}

export async function getUserByIdOrUsername(identifier: number | string): Promise<User | undefined> {
  if (typeof identifier === 'number') {
    return getUserById(identifier);
  }
  return getUserByUsername(identifier);
}

export async function getAllUsers(): Promise<User[]> {
  return db.select().from(users);
}

// CREATE
export async function createUser(data: NewUser): Promise<User> {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const result = await db
    .insert(users)
    .values({ ...data, password: hashedPassword })
    .returning();
  return result[0];
}

export async function createUserWithEmail(email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db
    .insert(users)
    .values({ email, password: hashedPassword, username: email })
    .returning();
  return result[0];
}

// UPDATE
export async function updateUser(id: number, updates: UpdateUser): Promise<User | undefined> {
  const result = await db.update(users).set(updates).where(eq(users.id, id)).returning();
  return result[0];
}

export async function updateUserByUsername(username: string, updates: UpdateUser): Promise
