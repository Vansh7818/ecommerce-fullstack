import express from 'express';
import { 
  getCartItems, 
  addToCart, 
  updateCartItem, 
  deleteCartItem 
} from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addToCart);
router.put('/:productId', updateCartItem);
router.delete('/:productId', deleteCartItem);

export default router;
