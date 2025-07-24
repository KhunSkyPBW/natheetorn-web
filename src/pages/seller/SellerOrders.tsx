// src/pages/seller/SellerOrders.tsx

import React from 'react';

const SellerOrders = () => {
  // Sementara dummy, nanti bisa diganti dengan fetch dari Supabase
  const orders = [
    { id: 1, buyer: "Alice", total: 120000, status: "Pending" },
    { id: 2, buyer: "Bob", total: 80000, status: "Completed" },
  ];

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="w-full text-left bg-slate-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-slate-700 text-sm text-slate-300">
              <th className="p-3">Order ID</th>
              <th className="p-3">Buyer</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b border-slate-700">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.buyer}</td>
                <td className="p-3">Rp {order.total.toLocaleString()}</td>
                <td className="p-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SellerOrders;
