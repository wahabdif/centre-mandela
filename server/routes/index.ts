import { type Application } from 'express';

import appointmentRoutes from './appointments';
import contactRoutes from './contact';
import newsRoutes from './news';
import authRoutes from './auth';
import userRoutes from './users';

export function registerRoutes(app: Application) {
  app.use('/api/appointments', appointmentRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/news', newsRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
}