import type { Application } from 'express';
import userRoutes from './users';
import contactRoutes from './contact';
import authRoutes from './auth';
import appointmentRoutes from './appointments';
import newsRoutes from './news';

/**
 * Enregistrer toutes les routes de l'API
 */
export function registerRoutes(app: Application) {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/appointments', appointmentRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/news', newsRoutes);
}