import type { Request, Response } from 'express';
import * as db from '../db';
import { appointmentSchema } from '../../shared/zod';
import { NewAppointment, UpdateAppointment } from '../../shared/types';

// Validation simple de l'ID depuis les params
function validateId(req: Request): number | null {
  const id = Number(req.params.id);
  return !Number.isNaN(id) && id > 0 ? id : null;
}

/**
 * GET /api/appointments
 * Récupère tous les rendez-vous
 */
export async function getAppointments(_req: Request, res: Response) {
  try {
    const appointments = await db.getAllAppointments();
    res.json(appointments);
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous:', error);
    res.status(500).json({ error: 'Erreur interne lors de la récupération des rendez-vous.' });
  }
}

/**
 * GET /api/appointments/:id
 * Récupère un rendez-vous par son ID
 */
export async function getAppointment(req: Request, res: Response) {
  const id = validateId(req);
  if (!id) return res.status(400).json({ error: 'ID invalide.' });

  try {
    const appointment = await db.getAppointmentById(id);
    if (!appointment) {
      return res.status(404).json({ error: 'Rendez-vous introuvable.' });
    }
    res.json(appointment);
  } catch (error) {
    console.error('Erreur lors de la récupération du rendez-vous:', error);
    res.status(500).json({ error: 'Erreur interne lors de la récupération du rendez-vous.' });
  }
}

/**
 * POST /api/appointments
 * Crée un nouveau rendez-vous
 */
export async function createAppointment(req: Request, res: Response) {
  try {
    const result = appointmentSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ error: 'Données invalides', details: result.error.format() });
    }

    const appointmentData: NewAppointment = {
      name: result.data.fullName,
      email: result.data.email,
      phone: result.data.phone,
      service: result.data.date, // Assuming date is used as service
      message: result.data.message,
      status: 'pending',
      createdAt: Date.now(),
    };

    const newAppointment = await db.createAppointment(appointmentData);

    console.log('Rendez-vous créé avec succès:', newAppointment);
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error);
    res.status(500).json({ error: 'Erreur interne lors de la création du rendez-vous.' });
  }
}

/**
 * PUT /api/appointments/:id
 * Met à jour un rendez-vous
 */
export async function updateAppointment(req: Request, res: Response) {
  const id = validateId(req);
  if (!id) return res.status(400).json({ error: 'ID invalide.' });

  try {
    const updates: UpdateAppointment = req.body;
    const updated = await db.updateAppointment(id, updates);

    if (!updated) {
      return res.status(404).json({ error: 'Rendez-vous introuvable.' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du rendez-vous:', error);
    res.status(500).json({ error: 'Erreur interne lors de la mise à jour du rendez-vous.' });
  }
}

/**
 * PATCH /api/appointments/:id/status
 * Met à jour le statut d'un rendez-vous
 */
export async function updateAppointmentStatus(req: Request, res: Response) {
  const id = validateId(req);
  if (!id) return res.status(400).json({ error: 'ID invalide.' });

  try {
    const { status } = req.body;

    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Statut invalide.' });
    }

    const updated = await db.updateAppointmentStatus(id, status);

    if (!updated) {
      return res.status(404).json({ error: 'Rendez-vous introuvable.' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut:', error);
    res.status(500).json({ error: 'Erreur interne lors de la mise à jour du statut.' });
  }
}

/**
 * DELETE /api/appointments/:id
 * Supprime un rendez-vous
 */
export async function deleteAppointment(req: Request, res: Response) {
  const id = validateId(req);
  if (!id) return res.status(400).json({ error: 'ID invalide.' });

  try {
    const deleted = await db.deleteAppointment(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Rendez-vous introuvable.' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression du rendez-vous:', error);
    res.status(500).json({ error: 'Erreur interne lors de la suppression du rendez-vous.' });
  }
}