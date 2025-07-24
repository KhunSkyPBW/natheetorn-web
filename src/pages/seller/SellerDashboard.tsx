import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const SellerDashboard: React.FC = () => {
  const location = useLocation();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
      <p className="text-gray-400 mb-6">Welcome back, John Seller</p>

      <div className="flex space-x-6 border-b border-blue-800 mb-4">
        <Link
          to="/seller"
          className={`pb-2 ${
            location.pathname === '/seller' ? 'border-b-2 border-blue-400' : ''
          }`}
        >
          Overview
        </Link>
        <Link
          to="/seller/products"
          className={`pb-2 ${
            location.pathname.startsWith('/seller/products') ? 'border-b-2 border-blue-400' : ''
          }`}
        >
          Products
        </Link>
        <Link
          to="/seller/orders"
          className={`pb-2 ${
            location.pathname.startsWith('/seller/orders') ? 'border-b-2 border-blue-400' : ''
          }`}
        >
          Orders
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default SellerDashboard;
