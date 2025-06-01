import { db } from './sqlite';
import { appointments } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import type { InsertAppointment } from '../../client/src/type/index';
// server/db/appointment.ts


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
  return db.insert(appointments).values(data).returning().get();
}

// Supprimer un rendez-vous
export async function deleteAppointment(id: number) {
  return db.delete(appointments).where(eq(appointments.id, id)).run();
}
