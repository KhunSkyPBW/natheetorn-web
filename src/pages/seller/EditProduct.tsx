import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';

const EditProduct = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()
        .eq('id', id)
        .single();

      if (!error && data) {
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    let imageUrl = image;

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const filePath = `${Date.now()}-${user.id}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, imageFile);

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);
        imageUrl = publicUrlData.publicUrl;
      }
    }

    const { error } = await supabase
      .from('products')
      .update({ name, price: parseFloat(price), image: imageUrl })
      .eq('id', id);

    if (!error) {
      navigate('/seller');
    } else {
      alert('Gagal update produk');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 text-white">
      <h2 className="text-2xl font-bold mb-4">Edit Produk</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded bg-slate-800" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 rounded bg-slate-800" />
        <div>
          <p className="mb-1">Gambar saat ini:</p>
          {image && <img src={image} alt="product" className="w-32 mb-2" />}
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
        </div>
        <button type="submit" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
