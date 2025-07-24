import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

const SellerProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select()
      .eq('user_id', user.id);

    if (!error) {
      setProducts(data);
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('Yakin hapus produk ini?');
    if (!confirm) return;

    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Produk Anda</h2>
        <Link
          to="/seller/add"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          + Tambah Produk
        </Link>
      </div>

      {products.length === 0 ? (
        <p>Belum ada produk.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="bg-slate-800 p-4 rounded shadow flex items-center gap-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-400">Rp {product.price}</p>
                <div className="mt-2 space-x-2">
                  <Link
                    to={`/seller/edit/${product.id}`}
                    className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 text-black"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerProducts;
