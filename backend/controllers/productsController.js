import { Product } from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const search = req.query.search;
    let products = await Product.findAll();

    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      products = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(lowerCaseSearch);
        const keywordsMatch = product.keywords.some(keyword => 
          keyword.toLowerCase().includes(lowerCaseSearch)
        );
        return nameMatch || keywordsMatch;
      });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
