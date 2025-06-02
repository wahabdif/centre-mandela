import { Request, Response } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser as createDbUser,
  deleteUser as deleteDbUser,
  updateUser as updateDbUser
} from '../db';
import { z } from 'zod';

// Schéma de validation pour les utilisateurs
const userSchema = z.object({
  username: z.string().min(3, 'Nom d\'utilisateur doit contenir au moins 3 caractères.'),
  password: z.string().min(6, 'Mot de passe doit contenir au moins 6 caractères.')
});

/**
 * GET /api/users
 * Récupère tous les utilisateurs
 */
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return res.status(500).json({ error: 'Erreur interne lors de la récupération des utilisateurs.' });
  }
}

/**
 * GET /api/users/:id
 * Récupère un utilisateur par ID
 */
export async function getUser(req: Request<{ id: string }>, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ error: 'ID utilisateur invalide. L\'ID doit être un entier positif.' });
  }

  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    return res.json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    return res.status(500).json({ error: 'Erreur interne lors de la récupération de l\'utilisateur.' });
  }
}

/**
 * POST /api/users
 * Crée un nouvel utilisateur
 */
export async function createUser(req: Request, res: Response) {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ 
      error: 'Données invalides.', 
      details: result.error.format() 
    });
  }

  const { username, password } = result.data;

  try {
    const user = await createDbUser(username, password);
    return res.status(201).json(user);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    return res.status(500).json({ error: 'Erreur interne lors de la création de l\'utilisateur.' });
  }
}

/**
 * DELETE /api/users/:id
 * Supprime un utilisateur
 */
export async function deleteUser(req: Request<{ id: string }>, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ error: 'ID utilisateur invalide. L\'ID doit être un entier positif.' });
  }

  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    await deleteDbUser(userId);
    return res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    return res.status(500).json({ error: 'Erreur interne lors de la suppression de l\'utilisateur.' });
  }
}

/**
 * PUT /api/users/:id
 * Met à jour un utilisateur
 */
export async function updateUser(req: Request<{ id: string }>, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ error: 'ID utilisateur invalide. L\'ID doit être un entier positif.' });
  }

  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ 
      error: 'Données invalides.', 
      details: result.error.format() 
    });
  }

  const { username, password } = result.data;

  try {
    const updatedUser = await updateDbUser(userId, { username, password });
    if (!updatedUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    return res.json(updatedUser);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    return res.status(500).json({ error: 'Erreur interne lors de la mise à jour de l\'utilisateur.' });
  }
}