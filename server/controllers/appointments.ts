import * as db from '../db/index';
import { appointmentSchema } from '../../shared/zod';
import { Request, Response, Router } from 'express';

// Récupérer tous les rendez-vous
export async function getAppointments(req: Request, res: Response) {
  try {
    const appointments = await db.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des rendez-vous" });
  }
}

// Créer un rendez-vous
export async function createAppointment(req: Request, res: Response) {
  const result = appointmentSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  // Adapter les champs pour correspondre au schéma attendu par la base
  const { fullName, email, phone, message, date } = result.data;
  const appointmentData = {
    name: fullName,
    email,
    phone,
    service: date,
    message,
    status: "pending" as const,
  };

  try {
    const appointment = await db.createAppointment(appointmentData);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du rendez-vous" });
  }
}

// Supprimer un rendez-vous
export async function deleteAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    await db.deleteAppointment(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du rendez-vous" });
  }
}

// Récupérer un rendez-vous par ID
export async function getAppointment(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    const appointment = await db.getAppointmentById(id);
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du rendez-vous" });
  }
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
    service: date,
    message,
    status: "pending" as const,
  };

  try {
    const updatedAppointment = await db.updateAppointment(id, updateData);
    if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du rendez-vous" });
  }
}

// Mettre à jour uniquement le statut d'un rendez-vous
export async function updateAppointmentStatus(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Status is required' });

  try {
    const updatedAppointment = await db.updateAppointmentStatus(id, status);
    if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du statut du rendez-vous" });
  }
}

// Création du routeur Express pour les rendez-vous
import { Router as ExpressRouter } from 'express';
const router = ExpressRouter();

router.get('/', getAppointments);
router.post('/', createAppointment);
router.get('/:id', getAppointment);
router.put('/:id', updateAppointment);
router.patch('/:id/status', updateAppointmentStatus);
router.delete('/:id', deleteAppointment);

export const appointmentRoutes = router;