
// ------------------------------
// ENREGISTREMENT DES ROUTES API
// ------------------------------

import type { Express } from 'express';

import authRoutes from './auth';
import userRoutes from './users';
import appointmentRoutes from './appointments';
import contactRoutes from './contact';
import newsRoutes from './news';

export function registerRoutes(app: Express) {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/appointments', appointmentRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/news', newsRoutes);
}
