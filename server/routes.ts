import express from 'express';
import authRoutes from './routes/auth';
import contactRoutes from './routes/contact';
import newsRoutes from './routes/news';
import appointmentRoutes from './routes/appointments';
import userRoutes from './routes/users';

export function registerRoutes(app: express.Application) {
  app.use('/api/auth', authRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/news', newsRoutes);
  app.use('/api/appointments', appointmentRoutes);
  app.use('/api/users', userRoutes);
}