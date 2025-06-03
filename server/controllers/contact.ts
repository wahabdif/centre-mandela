import type { Request, Response } from 'express';
import * as db from '../db/contact';
import { contactMessageSchema } from '../../shared/zod';

/**
 * Validation simple de l'ID depuis les params
 */
function validateId(req: Request): number | null {
  const id = Number(req.params.id);
  return !Number.isNaN(id) && id > 0 ? id : null;
}

/**
 * GET /api/contact
 * Récupère tous les messages de contact
 */
export async function getAllContactMessages(_req: Request, res: Response) {
  try {
    const messages = await db.getAllContactMessages();
    res.json(messages);
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    res.status(500).json({ error: 'Erreur interne lors de la récupération des messages.' });
  }
}

/**
 * GET /api/contact/:id
 * Récupère un message de contact par son ID
 */
export async function getContactMessageById(req: Request, res: Response) {
  const id = validateId(req);
  if (!id) return res.status(400).json({ error: 'ID invalide.' });

  try {
    const message = await db.getContactMessageById(id);
    if (!message) {
      return res.status(404).json({ error: 'Message introuvable.' });
    }
    res.json(message);
  } catch (error) {
    console.error('Erreur lors de la récupération du message:', error);
    res.status(500).json({ error: 'Erreur interne lors de la récupération du message.' });
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

    const messageData: db.NewContactMessage = {
      email,
      name,
      phone,
      service,
      message: message || undefined,
    };

    const newMessage = await db.createContactMessage(messageData);

    console.log('Message créé avec succès:', newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Erreur lors de la création du message:', error);
    res.status(500).json({ error: 'Erreur interne lors de la création du message.' });
  }
}

/**
 * PATCH /api/contact/:id/status
 * Met à jour le statut (lu/non lu) d'un message
 */
export async function updateContactMessageStatus(req: Request, res: Response) {
  const id = validateId(req);
  if (!id) return res.status(400).json({ error: 'ID invalide.' });

  try {
    const { isRead } = req.body;

    if (typeof isRead !== 'boolean') {
      return res.status(400).json({ error: 'Champ isRead manquant ou invalide.' });
    }

    const status = isRead ? 'read' : 'unread';
    const updated = await db.updateContactMessageStatus(id, status);

    if (!updated) {
      return res.status(404).json({ error: 'Message introuvable.' });
    }

    console.log(`Statut du message ID ${id} mis à jour: ${status}`);
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut:', error);
    res.status(500).json({ error: 'Erreur interne lors de la mise à jour du statut.' });
  }
}

/**
 * POST /api/contact/send
 * Envoie un message (exemple simple)
 */
export async function sendMessage(req: Request, res: Response) {
  try {
    const { email, message } = req.body;
    if (typeof email !== 'string' || typeof message !== 'string' || !email || !message) {
      return res.status(400).json({ error: 'Email et message sont requis et doivent être des chaînes.' });
    }

    // Ici vous pouvez intégrer un service d'envoi d'email (ex: nodemailer, SendGrid, etc.)
    console.log(`Message envoyé par ${email}: ${message}`);

    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    res.status(500).json({ error: 'Erreur interne lors de l’envoi du message.' });
  }
}
