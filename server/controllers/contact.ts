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
    console.error('Erreur lors de la récupération des messages:', error);
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
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID invalide.' });
    }

    const message = await db.getContactMessageById(id);
    if (!message) {
      return res.status(404).json({ error: 'Message introuvable.' });
    }

    res.json(message);
  } catch (error) {
    console.error('Erreur lors de la récupération du message:', error);
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

    console.log('Message créé avec succès:', newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Erreur lors de la création du message:', error);
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

    console.log(`Statut du message ID ${id} mis à jour: ${isRead ? 'read' : 'unread'}`);
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut:', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du statut.' });
  }
}

/**
 * GET /api/contact/messages
 * Récupère tous les messages de contact (fonction manquante)
 */
export async function getMessages(req: Request, res: Response) {
  try {
    const messages = await db.getAllContactMessages();
    console.log('Messages récupérés:', messages);
    res.json(messages);
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error);
    res.status(500).json({ error: 'Erreur interne.' });
  }
}

/**
 * POST /api/contact/send
 * Envoie un message (fonction manquante)
 */
export async function sendMessage(req: Request, res: Response) {
  try {
    const { email, message } = req.body;
    if (!email || !message) {
      return res.status(400).json({ error: 'Email et message sont requis.' });
    }

    // Logique pour envoyer un email ou un message
    console.log(`Message envoyé par ${email}: ${message}`);

    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    res.status(500).json({ error: 'Erreur interne.' });
  }
}