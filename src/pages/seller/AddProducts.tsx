import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AddProduct = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !imageFile) return;

    // Upload gambar ke Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(`${user.id}/${Date.now()}_${imageFile.name}`, imageFile);

    if (uploadError) {
      console.error(uploadError);
      return;
    }

    const imageUrl = supabase.storage
      .from('product-images')
      .getPublicUrl(uploadData.path).data.publicUrl;

    // Simpan ke database
    const { error } = await supabase.from('products').insert({
      name,
      price,
      image: imageUrl,
      user_id: user.id,
    });

    if (!error) navigate('/seller');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Tambah Produk</h1>
      <input type="text" placeholder="Nama Produk" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" />
      <input type="number" placeholder="Harga" value={price} onChange={e => setPrice(Number(e.target.value))} className="border p-2 w-full" />
      <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] || null)} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
    </form>
  );
};

export default AddProduct;
