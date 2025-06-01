import { Request, Response } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser as createDbUser,
  deleteUser as deleteDbUser,
  updateUser as updateDbUser
} from '../db';

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch {
    return res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
}

export async function getUser(req: Request<{ id: string }>, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) return res.status(400).json({ error: 'ID utilisateur invalide' });

  try {
    const user = await getUserById(userId);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    return res.json(user);
  } catch {
    return res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
}

export async function createUser(req: Request, res: Response) {
  const { username, password } = req.body as { username?: string; password?: string };
  if (!username || !password) {
    return res.status(400).json({ error: 'Nom d\'utilisateur et mot de passe requis' });
  }
  try {
    const user = await createDbUser(username, password);
    return res.status(201).json(user);
  } catch {
    return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
}

export async function deleteUser(req: Request<{ id: string }>, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) return res.status(400).json({ error: 'ID utilisateur invalide' });

  try {
    await deleteDbUser(userId);
    return res.status(204).send();
  } catch {
    return res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
  }
}

export async function updateUser(req: Request<{ id: string }>, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) return res.status(400).json({ error: 'ID utilisateur invalide' });

  const { username, password } = req.body as { username?: string; password?: string };
  if (!username && !password) {
    return res.status(400).json({ error: 'Au moins un champ est requis pour la mise à jour' });
  }

  try {
    const updatedUser = await updateDbUser(userId, { username, password });
    if (!updatedUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    return res.json(updatedUser);
  } catch {
    return res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
}
