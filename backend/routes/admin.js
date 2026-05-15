import express from 'express';
import { getStats, getUsers } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/stats', protect, admin, getStats);
router.get('/users', protect, admin, getUsers);

export default router;
