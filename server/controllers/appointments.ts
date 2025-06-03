// server/controllers/appointments.ts
import type { Request, Response } from 'express';

// Interface pour req.params
interface AppointmentParams {
  id: string; // req.params.id est toujours string
}

// Typage simplifié du corps des requêtes
interface CreateAppointmentBody {
  date: string;
  clientName: string;
  // ajoute ici d'autres champs nécessaires
}

interface UpdateAppointmentBody {
  date?: string;
  clientName?: string;
  // autres champs modifiables
}

interface UpdateAppointmentStatusBody {
  status: 'pending' | 'confirmed' | 'cancelled';
}
