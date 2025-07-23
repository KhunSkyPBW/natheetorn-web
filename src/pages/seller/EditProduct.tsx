import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { Product } from '../../lib/supabaseTypes';

const EditProduct = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (!error && data) {
        setProduct(data);
        setName(data.name);
        setPrice(data.price);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !product) return;

    let imageUrl = product.image;

    // Upload gambar baru jika ada
    if (imageFile) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(`${user.id}/${Date.now()}_${imageFile.name}`, imageFile, {
          upsert: true,
        });

      if (!uploadError && uploadData) {
        imageUrl = supabase.storage
          .from('product-images')
          .getPublicUrl(uploadData.path).data.publicUrl;
      }
    }

    const { error } = await supabase
      .from('products')
      .update({ name, price, image: imageUrl })
      .eq('id', id);

    if (!error) navigate('/seller');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Edit Produk</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" />
      <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="border p-2 w-full" />
      <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] || null)} />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
};

export default EditProduct;
