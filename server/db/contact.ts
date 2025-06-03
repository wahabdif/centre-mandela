// ------------------------------
// CONTACT : Gestion des messages de contact
// ------------------------------

// Exemple d’imports et fonctions à compléter selon ta logique
import { eq } from 'drizzle-orm';
import { db } from './index';
import { contactMessages } from '../../shared/schema';
import { ContactMessage, NewContactMessage, UpdateContactMessageStatus } from '../../shared/types';

// GET
export async function getAllContactMessages(): Promise<ContactMessage[]> {
  return db.select().from(contactMessages);
}

export async function getContactMessageById(id: number): Promise<ContactMessage | undefined> {
  const result = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
  return result[0];
}

// CREATE
export async function createContactMessage(data: NewContactMessage): Promise<ContactMessage> {
  const messageWithTimestamp = {
    ...data,
    createdAt: Date.now(),
    status: 'unread' as const,
  };
  const result = await db.insert(contactMessages).values(messageWithTimestamp).returning();
  return result[0];
}

// UPDATE status
export async function updateContactMessageStatus(id: number, status: UpdateContactMessageStatus): Promise<ContactMessage | undefined> {
  const result = await db.update(contactMessages).set({ status }).where(eq(contactMessages.id, id)).returning();
  return result[0];
}
