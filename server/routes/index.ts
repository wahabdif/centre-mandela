import { Router } from 'express';
import appointmentRoutes from './appointments';
import userRoutes from './users';
import contactRoutes from './contact';
import authRoutes from './auth';
import newsRoutes from './news';

const router = Router();

router.use('/appointments', appointmentRoutes);
router.use('/users', userRoutes);
router.use('/contact', contactRoutes);
router.use('/auth', authRoutes);
router.use('/news', newsRoutes);

export default router;
