import { eq } from 'drizzle-orm';
import { db } from './index';
import { contactMessages } from '../../shared/schema';
import type { ContactMessage, InsertContactMessage } from '../../shared/schema';

import type { ContactMessage, NewContactMessage, UpdateContactMessageStatus } from '../../shared/types';

export type { ContactMessage, NewContactMessage, UpdateContactMessageStatus };

export async function getAllContactMessages(): Promise<ContactMessage[]> {
  return await db.select().from(contactMessages);
}

export async function getContactMessageById(id: number): Promise<ContactMessage | undefined> {
  const result = await db.select().from(contactMessages).where(eq(contactMessages.id, id)).limit(1);
  return result[0];
}

export async function createContactMessage(messageData: Omit<InsertContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage> {
  const now = Date.now();
  const result = await db.insert(contactMessages).values({
    ...messageData,
    createdAt: now,
  }).returning();
  return result[0];
}

export async function updateContactMessageStatus(id: number, status: string): Promise<ContactMessage | undefined> {
  await db.update(contactMessages).set({ status }).where(eq(contactMessages.id, id));
  return getContactMessageById(id);
}

export async function deleteContactMessage(id: number): Promise<void> {
  await db.delete(contactMessages).where(eq(contactMessages.id, id));
}

// Export types for use in controllers
export type { ContactMessage, InsertContactMessage };
export type NewContactMessage = Omit<InsertContactMessage, 'id' | 'createdAt'>;
export type UpdateContactMessageStatus = 'read' | 'unread';