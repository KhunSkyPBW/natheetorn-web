import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!user) {
      alert('Harap login terlebih dahulu.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          user_id: user.id,
          items: cartItems.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
          total,
          status: 'pending',
        }
      ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert('Gagal melakukan checkout.');
    } else {
      clearCart();
      alert('Checkout berhasil!');
      navigate('/');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 text-white">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <ul className="mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between py-1 border-b border-gray-600">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="font-semibold text-xl mb-4">Total: ${total}</div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
      >
        {loading ? 'Memproses...' : 'Bayar Sekarang'}
      </button>
    </div>
  );
};

export default Checkout;
