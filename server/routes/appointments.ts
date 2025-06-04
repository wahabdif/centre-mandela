// ------------------------------
// ROUTES APPOINTMENTS
// ------------------------------

import { Router } from 'express';
import {
  getAppointments,
  createAppointment,
  getAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from '../controllers/appointmentController';

const router = Router();

// Récupérer tous les rendez-vous
router.get('/', getAppointments);

// Créer un nouveau rendez-vous
router.post('/', createAppointment);

// Récupérer un rendez-vous par id
router.get('/:id', getAppointment);

// Mettre à jour un rendez-vous par id
router.put('/:id', updateAppointment);

// Mettre à jour le statut d’un rendez-vous par id
router.patch('/:id/status', updateAppointmentStatus);

// Supprimer un rendez-vous par id
router.delete('/:id', deleteAppointment);

export default router;
