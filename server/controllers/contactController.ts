import { Request, Response } from 'express';
import { db } from '../db/sqlite';
import { contactMessages, insertContactMessageSchema } from '../../shared/schema';

export const submitContactForm = async (req: Request, res: Response) => {
  const parsed = insertContactMessageSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.errors });
  }

  const newMessage = {
    ...parsed.data,
    status: 'unread',
    createdAt: Date.now(),
  };

  const result = await db.insert(contactMessages).values(newMessage).returning();
  res.status(201).json(result[0]);
};
