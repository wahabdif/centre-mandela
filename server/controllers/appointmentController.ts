import { Request, Response } from 'express';
import { db } from '../db/sqlite';
import { appointments, insertAppointmentSchema } from '../shared/schema';
import { eq } from 'drizzle-orm';

export const getAllAppointments = async (_req: Request, res: Response) => {
  const result = await db.select().from(appointments).all();
  res.json(result);
};

export const createAppointment = async (req: Request, res: Response) => {
  const parsed = insertAppointmentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.errors });
  }
  const newAppointment = {
    ...parsed.data,
    createdAt: Date.now(),
  };
  const result = await db.insert(appointments).values(newAppointment).returning();
  res.status(201).json(result[0]);
};
