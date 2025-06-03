// ------------------------------
// APPOINTMENTS : Gestion des rendez-vous
// ------------------------------

import { eq } from 'drizzle-orm';
import { db } from './index';
import { appointments } from '../../shared/schema';
import { Appointment, NewAppointment, UpdateAppointment, UpdateAppointmentStatus } from '../../shared/types';

// GET
export async function getAllAppointments(): Promise<Appointment[]> {
  return db.select().from(appointments);
}

export async function getAppointmentById(id: number): Promise<Appointment | undefined> {
  const result = await db.select().from(appointments).where(eq(appointments.id, id));
  return result[0];
}

// CREATE
export async function createAppointment(data: NewAppointment): Promise<Appointment> {
  const result = await db.insert(appointments).values(data).returning();
  return result[0];
}

// UPDATE
export async function updateAppointment(id: number, updates: UpdateAppointment): Promise<Appointment | undefined> {
  const result = await db.update(appointments).set(updates).where(eq(appointments.id, id)).returning();
  return result[0];
}

export async function updateAppointmentStatus(id: number, status: UpdateAppointmentStatus): Promise<Appointment | undefined> {
  const result = await db.update(appointments).set({ status }).where(eq(appointments.id, id)).returning();
  return result[0];
}

// DELETE
export async function deleteAppointment(id: number): Promise<boolean> {
  const result = await db.delete(appointments).where(eq(appointments.id, id));
  return result > 0;
}
