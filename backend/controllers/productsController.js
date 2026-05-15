import { Product } from '../models/Product.js';
import { Op } from 'sequelize';

export const getProducts = async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, sort, page = 1, limit = 12 } = req.query;
    const offset = (page - 1) * limit;

    let whereClause = {};

    if (search) {
      whereClause[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { keywords: { [Op.like]: `%${search}%` } }
      ];
    }

    if (category) {
      whereClause.category = category;
    }

    if (minPrice || maxPrice) {
      whereClause.priceCents = {};
      if (minPrice) whereClause.priceCents[Op.gte] = minPrice * 100;
      if (maxPrice) whereClause.priceCents[Op.lte] = maxPrice * 100;
    }

    let order = [['createdAt', 'DESC']];
    if (sort === 'price-low') order = [['priceCents', 'ASC']];
    if (sort === 'price-high') order = [['priceCents', 'DESC']];
    if (sort === 'rating') order = [['rating', 'DESC']];

    const { count, rows: products } = await Product.findAndCountAll({
      where: whereClause,
      order,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.json({
      success: true,
      data: products,
      pagination: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
