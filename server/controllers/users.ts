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
export async function createUser(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const user = await db.createUser(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}
export async function deleteUser(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    await db.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
}
export async function updateUser(req: Request, res: Response) {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const { username, password } = req.body;
  if (!username && !password) {
    return res.status(400).json({ error: 'At least one field is required to update' });
  }

  try {
    const updatedUser = await db.updateUser(userId, { username, password });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
}
