
// ------------------------------
// CONTACT : Gestion des messages de contact
// ------------------------------

import { eq } from 'drizzle-orm';
import { db } from './index';

// Définition locale du schéma pour éviter les conflits de types
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Redéfinition locale de la table pour éviter les conflits
const localContactMessages = sqliteTable('contactMessages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  service: text('service').notNull(),
  message: text('message'),
  status: text('status').notNull().default('unread'),
  createdAt: integer('createdAt').notNull(),
});

// Types locaux
export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: string;
  createdAt: number;
}

export type NewContactMessage = Omit<ContactMessage, 'id' | 'createdAt' | 'status'>;
export type UpdateContactMessageStatus = 'read' | 'unread';

// GET
export async function getAllContactMessages(): Promise<ContactMessage[]> {
  try {
    const result = await db.select().from(localContactMessages);
    return result as ContactMessage[];
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    throw error;
  }
}

export async function getContactMessageById(id: number): Promise<ContactMessage | undefined> {
  try {
    const result = await db.select().from(localContactMessages).where(eq(localContactMessages.id, id));
    return result[0] as ContactMessage | undefined;
  } catch (error) {
    console.error('Erreur lors de la récupération du message:', error);
    throw error;
  }
}

// CREATE
export async function createContactMessage(data: NewContactMessage): Promise<ContactMessage> {
  try {
    const messageWithTimestamp = {
      ...data,
      createdAt: Date.now(),
      status: 'unread' as const,
    };
    const result = await db.insert(localContactMessages).values(messageWithTimestamp).returning();
    return result[0] as ContactMessage;
  } catch (error) {
    console.error('Erreur lors de la création du message:', error);
    throw error;
  }
}

// UPDATE status
export async function updateContactMessageStatus(id: number, status: UpdateContactMessageStatus): Promise<ContactMessage | undefined> {
  try {
    const result = await db.update(localContactMessages).set({ status }).where(eq(localContactMessages.id, id)).returning();
    return result[0] as ContactMessage | undefined;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut:', error);
    throw error;
  }
}
