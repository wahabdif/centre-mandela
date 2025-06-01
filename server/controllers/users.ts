import * as db from '../db/index';
import { Request, Response } from 'express';

export async function getUsers(req: Request, res: Response) {
  const users = await db.getAllUsers();
  res.json(users);
}

export async function getUser(req: Request, res: Response) {
  const user = await db.getUserById(Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
}
