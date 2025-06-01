import { db } from './sqlite';
import { newsPosts } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import type { InsertNewsPost } from '../../client/src/type/index';

// Récupérer toutes les actualités
export async function getAllNewsPosts() {
  return db.select().from(newsPosts).orderBy(newsPosts.createdAt).all();
}

// Récupérer une actualité par ID
export async function getNewsPostById(id: number) {
  return db.select().from(newsPosts).where(eq(newsPosts.id, id)).get();
}

// Créer une nouvelle actualité
export async function createNewsPost(data: InsertNewsPost) {
  return db.insert(newsPosts).values(data).returning().get();
}

// Supprimer une actualité
export async function deleteNewsPost(id: number) {
  return db.delete(newsPosts).where(eq(newsPosts.id, id)).run();
}
// Mettre à jour une actualité
export async function updateNewsPost(id: number, data: Partial<InsertNewsPost>) {
  return db.update(newsPosts).set(data).where(eq(newsPosts.id, id)).returning().get();
}
// Mettre à jour le statut d'une actualité
