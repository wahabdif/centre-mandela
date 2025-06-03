
import type { Request, Response } from 'express';
import * as userLib from '../lib/user';
import { insertUserSchema } from '../../shared/schema';
import { hashPassword } from '../lib/hash';

/**
 * Validation simple de l'ID depuis les params
 */
function validateId(id: string): number {
  const numId = parseInt(id, 10);
  if (isNaN(numId)) {
    throw new Error('ID invalide');
  }
  return numId;
}

/**
 * GET /api/users
 * Récupérer tous les utilisateurs
 */
export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await userLib.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

/**
 * GET /api/users
 * Alias pour getAllUsers
 */
export async function getUsers(req: Request, res: Response) {
  return getAllUsers(req, res);
}

/**
 * GET /api/users/:id
 * Récupérer un utilisateur par ID
 */
export async function getUserById(req: Request, res: Response) {
  try {
    const id = validateId(req.params.id);
    const user = await userLib.getUserById(id);
    
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

/**
 * POST /api/users
 * Créer un nouvel utilisateur
 */
export async function createUser(req: Request, res: Response) {
  try {
    const result = insertUserSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ 
        error: 'Données invalides',
        details: result.error.issues 
      });
    }

    const { username, password } = result.data;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await userLib.getUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Nom d\'utilisateur déjà utilisé' });
    }

    // Hasher le mot de passe
    const hashedPassword = await hashPassword(password);

    // Créer l'utilisateur
    const userData = {
      username,
      password: hashedPassword,
      email: null,
      role: null
    };

    const user = await userLib.createUser(userData);
    
    // Ne pas retourner le mot de passe
    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

/**
 * PUT /api/users/:id
 * Mettre à jour un utilisateur
 */
export async function updateUser(req: Request, res: Response) {
  try {
    const id = validateId(req.params.id);
    
    // Vérifier que l'utilisateur existe
    const existingUser = await userLib.getUserById(id);
    if (!existingUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Pour l'instant, on ne permet que la mise à jour du mot de passe
    const { password } = req.body;
    
    if (password) {
      const hashedPassword = await hashPassword(password);
      // Note: Il faudrait implémenter updateUser dans userLib
      return res.status(501).json({ error: 'Mise à jour non encore implémentée' });
    }

    res.json(existingUser);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

/**
 * DELETE /api/users/:id
 * Supprimer un utilisateur
 */
export async function deleteUser(req: Request, res: Response) {
  try {
    const id = validateId(req.params.id);
    
    // Vérifier que l'utilisateur existe
    const existingUser = await userLib.getUserById(id);
    if (!existingUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    await userLib.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
