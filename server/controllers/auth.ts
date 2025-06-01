import * as db from '../db/index';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import type { User } from '../../shared/schema';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await db.getUserByEmail(email) as User | undefined;

  if (!user || !user.password) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  });
}
export {};


