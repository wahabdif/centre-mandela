import type { Request, Response } from 'express';
import * as db from '../db';
import { contactMessageSchema } from '../../shared/zod';

/**
 * GET /api/contact
 * Récupère tous les messages de contact
 */
export async function getAllContactMessages(_req: Request, res: Response) {
  try {
    const messages = await db.getAllContactMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des messages.' });
  }
}

/**
 * GET /api/contact/:id
 * Récupère un message de contact par son ID
 */
export async function getContactMessageById(req: Request<{ id: string }>, res: Response) {
  try {
    const id = Number(req.params.id);
    const message = await db.getContactMessageById(id);

    if (!message) {
      return res.status(404).json({ error: 'Message introuvable.' });
    }

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du message.' });
  }
}

/**
 * POST /api/contact
 * Crée un nouveau message de contact
 */
export async function createContactMessage(req: Request, res: Response) {
  try {
    const result = contactMessageSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ error: 'Données invalides', details: result.error.format() });
    }

    const { email, name, phone, service, message } = result.data;

    const newMessage = await db.createContactMessage({
      email,
      name,
      phone,
      service,
      message: message ?? undefined, // ✅ null → undefined
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l’envoi du message.' });
  }
}

/**
 * PATCH /api/contact/:id/status
 * Met à jour le statut (lu/non lu) d'un message
 */
export async function updateContactMessageStatus(req: Request<{ id: string }>, res: Response) {
  try {
    const id = Number(req.params.id);
    const { isRead } = req.body;

    if (typeof isRead !== 'boolean') {
      return res.status(400).json({ error: 'Champ isRead manquant ou invalide.' });
    }

    await db.updateContactMessageStatus(id, isRead ? 'read' : 'unread');

    // Supposons que la fonction lève une erreur si le message n'existe pas
    // Sinon, vous pouvez vérifier l'existence avant la mise à jour

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du statut.' });
  }
}
export function getMessages(arg0: string, getMessages: any) {
    throw new Error('Function not implemented.');
}

export function sendMessage(arg0: string, sendMessage: any) {
    throw new Error('Function not implemented.');
}

