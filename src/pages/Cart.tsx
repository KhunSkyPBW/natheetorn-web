import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { Product } from '../../lib/supabaseTypes';

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: Product;
}

const Cart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('carts')
      .select('*, product:products(*)')
      .eq('user_id', user.id);

    if (!error) setCart(data as CartItem[]);
    setLoading(false);
  };

  const handleCheckout = async () => {
    if (!user) return;

    const { error } = await supabase.from('orders').insert([
      {
        user_id: user.id,
        items: cart.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
        status: 'pending',
      },
    ]);

    if (!error) {
      await supabase.from('carts').delete().eq('user_id', user.id);
      fetchCart();
      alert('Checkout berhasil!');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Keranjang</h1>
      {loading ? (
        <p>Loading...</p>
      ) : cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="p-4 bg-white rounded shadow">
                <p className="font-semibold">{item.product.name}</p>
                <p>Jumlah: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
