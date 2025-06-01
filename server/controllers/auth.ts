import * as db from '../db/index';
import bcrypt from 'bcryptjs'; // ou 'bcrypt' selon ce que tu as installé
import { Request, Response } from 'express';
import type { User } from '../../shared/schema';

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body as { email?: string; password?: string };
    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    const user = await db.getUserByEmail(email) as User | undefined;
    if (!user || !user.password) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion" });
  }
}