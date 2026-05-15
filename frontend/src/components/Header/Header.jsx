import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { User, LogOut, ShoppingBag, Menu, X, Search, ChevronDown, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './header.css';

export function Header({ cart }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="main-header sticky">
      <div className="header-container">
        {/* Left Section: Logo */}
        <div className="left-section">
          <Link to="/" className="logo-link">
            <img className="logo-img" src="/images/logo-white.png" alt="Logo" />
            <img className="mobile-logo-img" src="/images/mobile-logo-white.png" alt="Logo" />
          </Link>
        </div>

        {/* Middle Section: Search */}
        <div className="middle-section">
          <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search for products..." />
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="right-section">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {user ? (
              <div className="user-profile">
                <button 
                  className="user-dropdown-toggle" 
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                >
                  <div className="avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="username">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={16} />
                </button>

                {isUserDropdownOpen && (
                  <div className="user-dropdown">
                    <Link to="/orders" onClick={() => setIsUserDropdownOpen(false)}>
                      <ShoppingBag size={18} />
                      Orders
                    </Link>
                    {user.role === 'admin' && (
                      <Link to="/admin" onClick={() => setIsUserDropdownOpen(false)}>
                        <User size={18} />
                        Admin Panel
                      </Link>
                    )}
                    <button onClick={handleLogout} className="logout-btn">
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="login-link">Login</Link>
                <Link to="/signup" className="signup-link">Sign Up</Link>
              </div>
            )}

            <Link className="cart-link" to="/checkout">
              <div className="cart-icon-wrapper">
                <img className="cart-icon" src="/images/icons/cart-icon.png" alt="Cart" />
                <span className="cart-quantity">{totalQuantity}</span>
              </div>
              <span className="cart-text">Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}