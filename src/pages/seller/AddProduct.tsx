import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !imageFile) return;

    setUploading(true);
    const fileExt = imageFile.name.split('.').pop();
    const filePath = `${Date.now()}-${user.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(filePath, imageFile);

    if (uploadError) {
      alert('Upload gagal');
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(filePath);

    const { error } = await supabase.from('products').insert({
      name,
      price: parseFloat(price),
      image: publicUrlData.publicUrl,
      seller_id: user.id,
    });

    setUploading(false);
    if (!error) {
      navigate('/seller');
    } else {
      alert('Gagal tambah produk');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 text-white">
      <h2 className="text-2xl font-bold mb-4">Tambah Produk</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Nama Produk" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded bg-slate-800" required />
        <input type="number" placeholder="Harga" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 rounded bg-slate-800" required />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="text-white" required />
        <button type="submit" disabled={uploading} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          {uploading ? 'Mengupload...' : 'Tambah Produk'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
