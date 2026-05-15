import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import './ErrorPage.css';

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <AlertTriangle size={80} className="error-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="back-home">
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
