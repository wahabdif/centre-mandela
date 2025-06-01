import * as db from '../db/index';
import { Request, Response } from 'express';

// Récupérer tous les utilisateurs
export async function getUsers(req: Request, res: Response) {
  try {
    const users = await db.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
}

// Récupérer un utilisateur par ID
export async function getUser(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'ID utilisateur invalide' });
  }
  try {
    const user = await db.getUserById(userId);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
}

// Créer un nouvel utilisateur
export async function createUser(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Nom d\'utilisateur et mot de passe requis' });
  }
  try {
    const user = await db.createUser(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
}

// Supprimer un utilisateur
export async function deleteUser(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'ID utilisateur invalide' });
  }
  try {
    await db.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
  }
}

// Mettre à jour un utilisateur
export async function updateUser(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'ID utilisateur invalide' });
  }
  const { username, password } = req.body;
  if (!username && !password) {
    return res.status(400).json({ error: 'Au moins un champ est requis pour la mise à jour' });
  }
  try {
    const updatedUser = await db.updateUser(userId, { username, password });
    if (!updatedUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
}

export {};