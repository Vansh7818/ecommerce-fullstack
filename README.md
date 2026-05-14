# 🛒 Modern MERN E-Commerce Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

> **Internship-Ready Portfolio Project**: A high-performance, full-stack e-commerce solution featuring a clean architecture, optimized rendering, and a production-grade folder structure.

---

## 🔗 Live Demo

- **Frontend**: [https://ecommerce-frontend-u03n.onrender.com](https://ecommerce-frontend-u03n.onrender.com)
- **Backend API**: [https://ecommerce-backend-hlls.onrender.com](https://ecommerce-backend-hlls.onrender.com)

---

## ✨ Features

- 🛍️ **Dynamic Product Listing**: Real-time product fetching with search and filter capabilities.
- 🛒 **Advanced Cart Management**: Add, remove, and update quantities with instant state synchronization.
- 🚚 **Delivery Optimization**: Integrated delivery options with dynamic shipping cost calculation.
- 🧾 **Order & Payment Summaries**: Professional checkout flow with detailed price breakdowns and tax calculations.
- 📦 **Order History**: Persistent order tracking and historical data management.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- ⚡ **Performance First**: Implements lazy loading, memoization, and loading skeletons.

---

## 🛠️ Tech Stack

**Frontend**:
- React 18 (Vite)
- React Router 6 (Declarative routing)
- Axios (Centralized API handling)
- CSS3 (Custom responsive styling)

**Backend**:
- Node.js & Express.js
- SQLite (Lightweight, persistent storage)
- Sequelize (ORM for structured data)
- RESTful API Architecture

---

## 📂 Professional Folder Structure

```
ecommerce-fullstack/
├── backend/
│   ├── config/          # DB Seeder & configurations
│   ├── controllers/     # Business logic separation
│   ├── database/        # SQLite storage files
│   ├── defaultData/     # Initial seed data
│   ├── models/          # Sequelize schemas
│   ├── routes/          # Express route definitions
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── assets/      # Static assets
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components
│   │   ├── styles/      # Global & modular CSS
│   │   ├── utils/       # API & helper functions
│   │   └── App.jsx      # Root component
├── docs/                # Project documentation
└── README.md
```

---

## 🚀 Performance Optimizations

This project stands out by implementing several production-level optimizations:

- 🖼️ **Image Optimization**: Implemented `loading="lazy"` and `decoding="async"` for all images to reduce initial bandwidth usage.
- 🧠 **React.memo Optimization**: Strategic use of memoization in the Product Grid to prevent unnecessary re-renders of list items.
- 💀 **Loading Skeletons**: Enhanced UX using skeleton loaders during API fetch states to prevent layout shifts.
- 🌐 **Centralized API Handling**: A unified Axios instance for consistent environment handling and interceptor support.
- 📐 **Layout Shift Prevention**: Explicit image dimensions set to ensure high Core Web Vitals scores.

---

## 👔 Professional Refactoring Done

To ensure this project is internship-ready, the following refactoring was performed:

- **Controller Pattern**: Decoupled route logic from route definitions for better testability and maintenance.
- **Normalized Structure**: Removed all duplicate files and backup copies to ensure a single source of truth.
- **Import Optimization**: Cleaned up unused imports and reorganized dependencies.
- **RESTful Best Practices**: Standardized HTTP methods (GET, POST, PUT, DELETE) and status codes.

---

## 📸 Screenshots

| Homepage | Product Grid |
|:---:|:---:|
| ![Homepage](frontend/public/screenshots/homepage.png) | ![Product Grid](frontend/public/screenshots/product_grid.png) |

| Checkout Page | Orders Page |
|:---:|:---:|
| ![Checkout](frontend/public/screenshots/checkout.png) | ![Orders](frontend/public/screenshots/orders.png) |

| Mobile View |
|:---:|
| ![Mobile View](frontend/public/screenshots/mobile_view.png) |

---

## ⚙️ Getting Started

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:3000
```

### Backend (`backend/.env`)
```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
```

---

## 🌐 API Structure

- `GET /api/products` - Fetch all products
- `POST /api/cart-items` - Add item to cart
- `DELETE /api/cart-items/:id` - Remove item from cart
- `GET /api/orders` - Fetch order history
- `POST /api/orders` - Place a new order

---

## 🏆 Why This Project Stands Out

For recruiters and hiring managers:
- **Fullstack Competency**: Demonstrates ability to connect a frontend UI with a persistent backend database.
- **Performance Aware**: Showcases knowledge of modern web performance metrics and React optimizations.
- **Clean Code**: Adheres to the principle of separation of concerns through the Controller/Route pattern.
- **Production Mindset**: Includes documentation, environment handling, and a professional layout.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@Vansh7818](https://github.com/Vansh7818)
- LinkedIn: (https://www.linkedin.com/in/vansh-jain-809b442b9/)

---

## 🏁 Future Improvements
- [ ] User Authentication (JWT)
- [ ] Admin Dashboard for product management
- [ ] Payment Gateway Integration (Stripe)
- [ ] Product Reviews and Ratings system
