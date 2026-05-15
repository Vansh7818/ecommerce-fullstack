# 🛒 Advanced Professional MERN E-Commerce Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

> **High-Impact Internship Portfolio Project**: A professional, full-stack e-commerce ecosystem featuring secure JWT authentication, role-based access control, a robust admin dashboard, and modern UI/UX with dark mode.

---

## 🔗 Live Demo

- **Frontend**: [https://ecommerce-frontend-u03n.onrender.com](https://ecommerce-frontend-u03n.onrender.com)
- **Backend API**: [https://ecommerce-backend-hlls.onrender.com](https://ecommerce-backend-hlls.onrender.com)

---

## ✨ Advanced Features

- 🔐 **Complete Auth System**: Secure user registration and login using JWT and bcrypt password hashing.
- 🛡️ **Role-Based Access**: Protected routes for users (Orders, Checkout) and Admins (Dashboard).
- 📊 **Professional Admin Panel**: Real-time statistics, product management, and user oversight.
- 🌓 **Dark Mode Support**: Seamless theme switching with persistent user preferences.
- 🔍 **Advanced Search & Filtering**: Database-level search, category filtering, and price sorting with pagination.
- 🔔 **Toast Notifications**: Modern feedback system using `react-toastify`.
- ⚡ **Performance & Security**: Implements Helmet, Rate Limiting, and Skeleton Loaders.

---

## 🛠️ Tech Stack

**Frontend**:
- React 19 (Vite)
- React Router 7 (Declarative routing)
- AuthContext (Global state management)
- Lucide React (Iconography)
- CSS3 (Modern variables & dark mode)

**Backend**:
- Node.js & Express.js
- SQLite (Sequelize ORM)
- JSON Web Tokens (Authentication)
- Bcrypt.js (Security)
- Helmet & Express Rate Limit (Protection)

---

## 📂 Professional Folder Structure

```
ecommerce-fullstack/
├── backend/
│   ├── config/          # DB Seeder & configurations
│   ├── controllers/     # Business logic separation
│   ├── middleware/      # Auth, Error & Security middleware
│   ├── models/          # Sequelize schemas (User, Product, etc.)
│   ├── routes/          # Express route definitions
│   └── server.js        # Entry point with security config
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI & Protected Routes
│   │   ├── context/     # Auth & Theme context providers
│   │   ├── pages/       # Page-level components (Home, Auth, Admin)
│   │   ├── styles/      # Global CSS & Dark Mode tokens
│   │   ├── utils/       # API configuration & Interceptors
│   │   └── App.jsx      # Root routing configuration
├── docs/                # API Documentation & Guides
└── README.md
```

---

## 🚀 Performance & Security Optimizations

- 🖼️ **Asset Management**: Optimized static file serving and lazy loading.
- 🔒 **Security Headers**: Using `Helmet` to set secure HTTP headers.
- 🚦 **Rate Limiting**: Protection against Brute Force attacks.
- 🧠 **API Interceptors**: Automatic token injection for authenticated requests.
- 💀 **Skeletons & Transitions**: Improved perceived performance with smooth UI transitions.

---

## ⚙️ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Vansh7818/ecommerce-fullstack.git
cd ecommerce-fullstack
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env based on .env.example
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Documentation

Detailed API documentation can be found in [docs/api-documentation.md](docs/api-documentation.md).

---

## 🏆 Interview Ready Talking Points

- **Scalable Architecture**: "I implemented a decoupled Controller-Service pattern to ensure the backend is maintainable and testable."
- **Security First**: "The application uses JWT with HttpOnly storage concepts (simulated) and bcrypt for password security, alongside Rate Limiting to prevent abuse."
- **UX Excellence**: "I prioritized user experience by adding dark mode, skeleton loaders, and debounced search to provide a native-app feel."
- **Clean Code**: "The project follows SOLID principles, especially Dependency Inversion through a centralized API service."

---

## 👨‍💻 Author

**Vansh Jain**
- GitHub: [@Vansh7818](https://github.com/Vansh7818)
- LinkedIn: [Vansh Jain](https://www.linkedin.com/in/vansh-jain-809b442b9/)
