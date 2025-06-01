import * as db from '../db/index';
import { appointmentSchema } from '../../shared/zod';
import { Request, Response } from 'express';

export async function getAppointments(req: Request, res: Response) {
  const appointments = await db.getAllAppointments();
  res.json(appointments);
}

export async function createAppointment(req: Request, res: Response) {
  const result = appointmentSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  const appointment = await db.createAppointment(result.data);
  res.status(201).json(appointment);
}
export async function deleteAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  await db.deleteAppointment(id);
  res.status(204).send();
}
export async function getAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const appointment = await db.getAppointmentById(id);
  if (!appointment) return res.status(404).json({ error: 'Appointment not found' });

  res.json(appointment);
}
export async function updateAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const result = appointmentSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  const updatedAppointment = await db.updateAppointment(id, result.data);
  if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });

  res.json(updatedAppointment);
}
export async function updateAppointmentStatus(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Status is required' });

  const updatedAppointment = await db.updateAppointmentStatus(id, status);
  if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });

  res.json(updatedAppointment);
}

