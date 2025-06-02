// server/controllers/appointments.ts
import type { Request, Response } from 'express';

interface AppointmentParams {
  id: string; // toujours une string dans req.params
}

export async function getAppointments(req: Request, res: Response) {
  try {
    // logique de récupération
    res.json([]); // exemple de retour
  } catch (error) {
    console.error('Erreur getAppointments :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

export async function createAppointment(req: Request, res: Response) {
  try {
    const data = req.body;
    // logique de création
    res.status(201).json({ message: 'Rendez-vous créé', data });
  } catch (error) {
    console.error('Erreur createAppointment :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

export async function getAppointment(req: Request<AppointmentParams>, res: Response) {
  try {
    const id = Number(req.params.id);
    // logique de récupération
    res.json({ id });
  } catch (error) {
    console.error('Erreur getAppointment :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

export async function updateAppointment(req: Request<AppointmentParams>, res: Response) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    // logique de mise à jour
    res.json({ message: 'Rendez-vous mis à jour', id, data });
  } catch (error) {
    console.error('Erreur updateAppointment :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

export async function updateAppointmentStatus(req: Request<AppointmentParams>, res: Response) {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;
    // logique de mise à jour de statut
    res.json({ message: 'Statut mis à jour', id, status });
  } catch (error) {
    console.error('Erreur updateAppointmentStatus :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

export async function deleteAppointment(req: Request<AppointmentParams>, res: Response) {
  try {
    const id = Number(req.params.id);
    // logique de suppression
    res.json({ message: 'Rendez-vous supprimé', id });
  } catch (error) {
    console.error('Erreur deleteAppointment :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
