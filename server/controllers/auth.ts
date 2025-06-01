import * as db from '../db/index';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await db.getUserByEmail(email);

  if (!user || !user.passwordHash) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  res.json({ id: user.id, name: user.name, email: user.email, role: user.role });
}



