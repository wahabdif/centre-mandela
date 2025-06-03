import { db } from './index';
import { contactMessages, type ContactMessage, type InsertContactMessage } from '../../shared/schema';
import { eq } from 'drizzle-orm';

export async function getAllContactMessages(): Promise<ContactMessage[]> {
  return await db.select().from(contactMessages);
}

export async function getContactMessageById(id: number): Promise<ContactMessage | undefined> {
  const result = await db.select().from(contactMessages).where(eq(contactMessages.id, id)).limit(1);
  return result[0] as ContactMessage | undefined;
}

export async function createContactMessage(data: InsertContactMessage): Promise<ContactMessage> {
  const result = await db.insert(contactMessages).values({
    ...data,
    createdAt: Date.now(),
    status: 'unread'
  }).returning();
  return result[0] as ContactMessage;
}

export async function updateContactMessageStatus(id: number, status: string): Promise<ContactMessage | undefined> {
  const result = await db.update(contactMessages).set({ status }).where(eq(contactMessages.id, id)).returning();
  return result[0] as ContactMessage | undefined;
}

export async function deleteContactMessage(id: number): Promise<void> {
  await db.delete(contactMessages).where(eq(contactMessages.id, id));
}