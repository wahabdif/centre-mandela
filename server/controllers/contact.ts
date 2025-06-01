import * as db from '../db/index';
import { contactMessageSchema } from '../../shared/zod';
import { Request, Response } from 'express';

export async function getMessages(req: Request, res: Response) {
  const messages = await db.getAllContactMessages();
  res.json(messages);
}

export async function sendMessage(req: Request, res: Response) {
  const result = contactMessageSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });

  const message = await db.createContactMessage(result.data);
  res.status(201).json(message);
}
export {};