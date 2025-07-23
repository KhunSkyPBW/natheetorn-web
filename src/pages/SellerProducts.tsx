import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { Product } from '../../lib/supabaseTypes';
import { Link } from 'react-router-dom';

const SellerProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('user_id', user.id);
      if (error) console.error(error);
      else setProducts(data);
    };

    fetchProducts();
  }, [user]);

  const handleDelete = async (id: number) => {
    await supabase.from('products').delete().eq('id', id);
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Produk Saya</h1>
      <Link to="/seller/add" className="bg-blue-500 text-white px-4 py-2 rounded">Tambah Produk</Link>
      <ul className="mt-4 space-y-3">
        {products.map(product => (
          <li key={product.id} className="p-4 border rounded shadow-sm">
            <div className="flex justify-between">
              <span>{product.name}</span>
              <div className="space-x-2">
                <Link to={`/seller/edit/${product.id}`} className="text-blue-500">Edit</Link>
                <button onClick={() => handleDelete(product.id)} className="text-red-500">Hapus</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerProducts;
