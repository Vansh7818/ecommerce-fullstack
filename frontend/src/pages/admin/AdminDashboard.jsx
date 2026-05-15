import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { LayoutDashboard, ShoppingBag, Users, DollarSign, Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/api/admin/stats');
        setStats(res.data.data);
      } catch (error) {
        toast.error('Failed to fetch dashboard stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <button className="active"><LayoutDashboard size={20} /> Dashboard</button>
          <button><ShoppingBag size={20} /> Products</button>
          <button><ShoppingBag size={20} /> Orders</button>
          <button><Users size={20} /> Users</button>
        </nav>
      </div>

      <div className="admin-main">
        <header className="admin-header">
          <h1>Dashboard Overview</h1>
          <button className="add-btn"><Plus size={20} /> Add New Product</button>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon products"><ShoppingBag size={24} /></div>
            <div className="stat-info">
              <h3>Total Products</h3>
              <p>{stats.totalProducts}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon orders"><ShoppingBag size={24} /></div>
            <div className="stat-info">
              <h3>Total Orders</h3>
              <p>{stats.totalOrders}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon users"><Users size={24} /></div>
            <div className="stat-info">
              <h3>Total Users</h3>
              <p>{stats.totalUsers}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon revenue"><DollarSign size={24} /></div>
            <div className="stat-info">
              <h3>Total Revenue</h3>
              <p>${stats.totalRevenue}</p>
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Operations</h2>
          <div className="activity-placeholder">
            <p>Order and product management tables will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
