import * as db from '../db/index';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import type { User } from '../../shared/schema';

// Schéma de validation pour les champs de connexion
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/auth/login
 * Authentifie un utilisateur
 */
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body as { email?: string; password?: string };

    // Validation des champs
    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis.' });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email invalide.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Mot de passe doit contenir au moins 6 caractères.' });
    }

    // Recherche de l'utilisateur par email
    const user = await db.getUserByEmail(email) as User | undefined;
    if (!user || !user.password) {
      return res.status(401).json({ error: 'Identifiants invalides.' });
    }

    // Vérification du mot de passe
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Identifiants invalides.' });
    }

    // Génération d'un token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );

    // Réponse avec les informations utilisateur et le token
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur interne lors de la connexion.' });
  }
}