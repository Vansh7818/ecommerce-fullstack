import api from './utils/api';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import NotFoundPage from './pages/error/NotFoundPage';

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    try {
      const response = await api.get('/api/cart-items?expand=product');
      setCart(response.data);
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      
      {/* Protected Routes */}
      <Route 
        path="checkout" 
        element={
          <ProtectedRoute>
            <CheckoutPage cart={cart} loadCart={loadCart} />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="orders" 
        element={
          <ProtectedRoute>
            <OrdersPage cart={cart} />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="admin" 
        element={
          <ProtectedRoute adminOnly={true}>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
