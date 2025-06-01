import * as db from '../db/index';
import { appointmentSchema } from '../../shared/zod';
import { Request, Response } from 'express';

// Récupérer tous les rendez-vous
export async function getAppointments(req: Request, res: Response) {
  const appointments = await db.getAllAppointments();
  res.json(appointments);
}

// Créer un rendez-vous
export async function createAppointment(req: Request, res: Response) {
  const result = appointmentSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

// Adapter les champs pour correspondre au schéma attendu par la base
const { fullName, email, phone, message, date } = result.data;
const appointmentData = {
  name: fullName, // mapping correct
  email,
  phone,
  service: date, // ou adapte selon ton besoin métier
  message,
  status: "pending" as const, // typage littéral
};

  const appointment = await db.createAppointment(appointmentData);
  res.status(201).json(appointment);
}

// Supprimer un rendez-vous
export async function deleteAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  await db.deleteAppointment(id);
  res.status(204).send();
}

// Récupérer un rendez-vous par ID
export async function getAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const appointment = await db.getAppointmentById(id);
  if (!appointment) return res.status(404).json({ error: 'Appointment not found' });

  res.json(appointment);
}

// Mettre à jour un rendez-vous
export async function updateAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const result = appointmentSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  // Adapter les champs pour correspondre au schéma attendu par la base
  const { fullName, email, phone, message, date } = result.data;
  const updateData = {
    name: fullName,
    email,
    phone,
    service: date, // adapte si besoin
    message,
    status: "pending" as const, // ou adapte selon le besoin
  };

  const updatedAppointment = await db.updateAppointment(id, updateData);
  if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });

  res.json(updatedAppointment);
}

// Mettre à jour uniquement le statut d'un rendez-vous
export async function updateAppointmentStatus(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Status is required' });

  const updatedAppointment = await db.updateAppointmentStatus(id, status);
  if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });

  res.json(updatedAppointment);
}

export {};