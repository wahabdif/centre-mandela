import { Request, Response } from 'express';
import { db } from '../db/sqlite';
import { users } from '../../shared/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await db.select().from(users).where(eq(users.username, username)).get();
  if (!user) {
    return res.status(401).json({ error: 'Utilisateur introuvable' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  }

  res.json({ message: 'Connexion réussie', user: { id: user.id, username: user.username, role: user.role } });
};
