import api from './utils/api';
import { Routes , Route } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';

function App() {
   const [cart, setCart] = useState([]);
   const loadCart = async () => {
       try {
           // Fixed: Using centralized api instance and simplified URL
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
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
    
  )
}

export default App
