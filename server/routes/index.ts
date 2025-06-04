import { Router } from 'express';
import appointmentRoutes from './appointmentRoutes';
import userRoutes from './userRoutes';
import contactRoutes from './contactRoutes';
import authRoutes from './authRoutes';
import newsRoutes from './newsRoutes';

const router = Router();

router.use('/appointments', appointmentRoutes);
router.use('/users', userRoutes);
router.use('/contact', contactRoutes);
router.use('/auth', authRoutes);
router.use('/news', newsRoutes);

export default router;
