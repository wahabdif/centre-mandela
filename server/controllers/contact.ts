import {
  getAllContactMessages,
  createContactMessage
} from '../db/contact';
import { contactMessageSchema } from '../../shared/zod';
import { Request, Response } from 'express';

export async function getMessages(req: Request, res: Response) {
  const messages = await getAllContactMessages();
  res.json(messages);
}

export async function sendMessage(req: Request, res: Response) {
  const result = contactMessageSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  // Correction : transformer null en undefined pour le champ message
  const data = {
    ...result.data,
    message: result.data.message ?? undefined,
  };

  const message = await createContactMessage(data);
  res.status(201).json(message);
}