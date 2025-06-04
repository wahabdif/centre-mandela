import { db } from '../db/sqlite';
import { users, insertUserSchema } from '../../shared/schema';
import { users, insertUserSchema } from '../../shared/schema';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (_req: Request, res: Response) => {
  const result = await db.select().from(users).all();
  res.json(result);
};

export const createUser = async (req: Request, res: Response) => {
  const parsed = insertUserSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.errors });
  }

  const { username, password } = parsed.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    username,
    password: hashedPassword,
    email: req.body.email || null,
    role: req.body.role || 'user',
  };

  const result = await db.insert(users).values(newUser).returning();
  res.status(201).json(result[0]);
};
