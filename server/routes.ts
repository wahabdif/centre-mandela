

// ------------------------------
// ENREGISTREMENT DES ROUTES API
// ------------------------------

import type { Express } from 'express';

import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import appointmentRoutes from './routes/appointments';
import contactRoutes from './routes/contact';
import newsRoutes from './routes/news';

export function registerRoutes(app: express.Application) {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/appointments', appointmentRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/news', newsRoutes);
}
