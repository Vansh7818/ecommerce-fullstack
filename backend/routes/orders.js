import express from 'express';
import { getOrders, createOrder, getOrderById } from '../controllers/ordersController.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:orderId', getOrderById);

export default router;
