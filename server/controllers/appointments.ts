import * as db from '../db/index';
import { appointmentSchema } from '../../shared/zod';
import { Request, Response, Router } from 'express';

/**
 * Utilitaire pour valider et extraire l'ID
 * @param req - La requête Express
 * @returns L'ID validé ou null
 */
function validateId(req: Request): number | null {
    const id = Number(req.params.id);
    return Number.isNaN(id) || id <= 0 ? null : id;
}

/**
 * GET /api/appointments
 * Récupère tous les rendez-vous
 */
export async function getAppointments(req: Request, res: Response) {
    try {
        const appointments = await db.getAllAppointments();
        res.json(appointments);
    } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
        res.status(500).json({ error: "Erreur interne lors de la récupération des rendez-vous." });
    }
}

/**
 * POST /api/appointments
 * Crée un nouveau rendez-vous
 */
export async function createAppointment(req: Request, res: Response) {
    const result = appointmentSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ 
            error: 'Données invalides.', 
            details: result.error.flatten() 
        });
    }

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
        console.error('Erreur lors de la création du rendez-vous:', error);
        res.status(500).json({ error: "Erreur interne lors de la création du rendez-vous." });
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
            return res.status(404).json({ error: 'Rendez-vous introuvable ou déjà supprimé.' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Erreur lors de la suppression du rendez-vous:', error);
        res.status(500).json({ error: "Erreur interne lors de la suppression du rendez-vous." });
    }
}

/**
 * GET /api/appointments/:id
 * Récupère un rendez-vous par ID
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
        res.status(500).json({ error: "Erreur interne lors de la récupération du rendez-vous." });
    }
}

/**
 * PUT /api/appointments/:id
 * Met à jour un rendez-vous
 */
export async function updateAppointment(req: Request, res: Response) {
    const id = validateId(req);
    if (!id) return res.status(400).json({ error: 'ID invalide.' });

    const result = appointmentSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ 
            error: 'Données invalides.', 
            details: result.error.flatten() 
        });
    }

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
        if (!updatedAppointment) {
            return res.status(404).json({ error: 'Rendez-vous introuvable.' });
        }
        res.json(updatedAppointment);
    } catch (error) {
        console.error('Erreur lors de la mise à jour du rendez-vous:', error);
        res.status(500).json({ error: "Erreur interne lors de la mise à jour du rendez-vous." });
    }
}

/**
 * PATCH /api/appointments/:id/status
 * Met à jour uniquement le statut d'un rendez-vous
 */
export async function updateAppointmentStatus(req: Request, res: Response) {
    const id = validateId(req);
    if (!id) return res.status(400).json({ error: 'ID invalide.' });

    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'cancelled'];
    if (!status || !validStatuses.includes(status)) {
        return res.status(400).json({ 
            error: `Statut invalide. Valeurs autorisées : ${validStatuses.join(', ')}.` 
        });
    }

    try {
        const updatedAppointment = await db.updateAppointmentStatus(id, status);
        if (!updatedAppointment) {
            return res.status(404).json({ error: 'Rendez-vous introuvable.' });
        }
        res.json(updatedAppointment);
    } catch (error) {
        console.error('Erreur lors de la mise à jour du statut du rendez-vous:', error);
        res.status(500).json({ error: "Erreur interne lors de la mise à jour du statut du rendez-vous." });
    }
}

/**
 * Routeur des rendez-vous
 */
const router = Router();

router.get('/', getAppointments);
router.post('/', createAppointment);
router.get('/:id', getAppointment);
router.put('/:id', updateAppointment);
router.patch('/:id/status', updateAppointmentStatus);
router.delete('/:id', deleteAppointment);

export const appointmentRoutes = router;