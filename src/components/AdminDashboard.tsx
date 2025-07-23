import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AdminDashboard = () => {
  const [summary, setSummary] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      const [{ count: productCount }, { count: orderCount }, { count: userCount }] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('orders').select('*', { count: 'exact', head: true }),
        supabase.from('users').select('*', { count: 'exact', head: true }),
      ]);

      setSummary({
        totalProducts: productCount || 0,
        totalOrders: orderCount || 0,
        totalUsers: userCount || 0,
      });
    };

    fetchSummary();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-700 p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Total Produk</h2>
          <p className="text-3xl">{summary.totalProducts}</p>
        </div>
        <div className="bg-green-700 p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Total Pesanan</h2>
          <p className="text-3xl">{summary.totalOrders}</p>
        </div>
        <div className="bg-purple-700 p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Total Pengguna</h2>
          <p className="text-3xl">{summary.totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
