import { CartItem } from '../models/CartItem.js';
import { Product } from '../models/Product.js';
import { DeliveryOption } from '../models/DeliveryOption.js';

export const getCartItems = async (req, res) => {
  try {
    const expand = req.query.expand;
    let cartItems = await CartItem.findAll();

    if (expand === 'product') {
      cartItems = await Promise.all(cartItems.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        return {
          ...item.toJSON(),
          product
        };
      }));
    }
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    if (typeof quantity !== 'number' || quantity < 1 || quantity > 10) {
      return res.status(400).json({ error: 'Quantity must be a number between 1 and 10' });
    }

    let cartItem = await CartItem.findOne({ where: { productId } });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({ productId, quantity, deliveryOptionId: "1" });
    }

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity, deliveryOptionId } = req.body;

    const cartItem = await CartItem.findOne({ where: { productId } });
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    if (quantity !== undefined) {
      if (typeof quantity !== 'number' || quantity < 1) {
        return res.status(400).json({ error: 'Quantity must be a number greater than 0' });
      }
      cartItem.quantity = quantity;
    }

    if (deliveryOptionId !== undefined) {
      const deliveryOption = await DeliveryOption.findByPk(deliveryOptionId);
      if (!deliveryOption) {
        return res.status(400).json({ error: 'Invalid delivery option' });
      }
      cartItem.deliveryOptionId = deliveryOptionId;
    }

    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update cart item' });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const cartItem = await CartItem.findOne({ where: { productId } });
    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    await cartItem.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete cart item' });
  }
};
