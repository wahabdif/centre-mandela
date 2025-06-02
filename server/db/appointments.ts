import { db } from './sqlite';
import { appointments } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import type { InsertAppointment } from '../../shared/schema';

// Récupérer tous les rendez-vous
export async function getAllAppointments() {
  return db.select().from(appointments).all();
}

// Récupérer un rendez-vous par son ID
export async function getAppointmentById(id: number) {
  return db.select().from(appointments).where(eq(appointments.id, id)).get();
}

// Créer un nouveau rendez-vous
export async function createAppointment(data: InsertAppointment) {
  return db
    .insert(appointments)
    .values({
      ...data,
      createdAt: Date.now(), // Champ obligatoire pour Drizzle
    })
    .returning()
    .get();
}

// Supprimer un rendez-vous
export async function deleteAppointment(id: number) {
  return db.delete(appointments).where(eq(appointments.id, id)).run();
}

// Mettre à jour le statut d'un rendez-vous
export async function updateAppointmentStatus(id: number, status: string) {
  return db.update(appointments).set({ status }).where(eq(appointments.id, id)).returning().get();
}

// Mettre à jour un rendez-vous
export async function updateAppointment(id: number, data: Partial<InsertAppointment>) {
  return db.update(appointments).set(data).where(eq(appointments.id, id)).returning().get();
}
