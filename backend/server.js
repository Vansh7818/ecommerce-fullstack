import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './models/index.js';
import productRoutes from './routes/products.js';
import deliveryOptionRoutes from './routes/deliveryOptions.js';
import cartItemRoutes from './routes/cartItems.js';
import orderRoutes from './routes/orders.js';
import resetRoutes from './routes/reset.js';
import paymentSummaryRoutes from './routes/paymentSummary.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import { seedDatabase } from './config/dbSeeder.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);

app.use(cors());
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});

app.use('/api/', limiter);

// Serve Images
app.use('/images', express.static(path.join(__dirname, 'images')));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/delivery-options', deliveryOptionRoutes);
app.use('/api/cart-items', cartItemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reset', resetRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payment-summary', paymentSummaryRoutes);

// Root Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Ecommerce Backend API Running Successfully'
  });
});

// 404 Middleware
app.use(notFound);

// Error Middleware
app.use(errorHandler);

// Database Sync + Seeder
await sequelize.sync();
await seedDatabase();

// Start Server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});