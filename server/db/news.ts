// ------------------------------
// NEWS : Gestion des articles / posts
// ------------------------------

import { eq } from 'drizzle-orm';
import { db } from './index';
import { newsPosts } from '../../shared/schema';
import { NewsPost, NewNewsPost, UpdateNewsPost } from '../../shared/types';

// GET
export async function getAllNewsPosts(): Promise<NewsPost[]> {
  return db.select().from(newsPosts);
}

export async function getNewsPostById(id: number): Promise<NewsPost | undefined> {
  const result = await db.select().from(newsPosts).where(eq(newsPosts.id, id));
  return result[0];
}

// CREATE
export async function createNewsPost(data: NewNewsPost): Promise<NewsPost> {
  const result = await db.insert(newsPosts).values(data).returning();
  return result[0];
}

// UPDATE
export async function updateNewsPost(id: number, updates: UpdateNewsPost): Promise<NewsPost | undefined> {
  const result = await db.update(newsPosts).set(updates).where(eq(newsPosts.id, id)).returning();
  return result[0];
}

// DELETE
export async function deleteNewsPost(id: number): Promise<boolean> {
  const result = await db.delete(newsPosts).where(eq(newsPosts.id, id));
  return result > 0;
}
