import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      alert('Gagal ubah password: ' + error.message);
    } else {
      alert('Password berhasil diubah!');
      setNewPassword('');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-white">
      <h2 className="text-xl font-bold mb-4">Ganti Password</h2>
      <form onSubmit={handleUpdatePassword} className="space-y-4">
        <input
          type="password"
          placeholder="Password baru"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 rounded bg-slate-800"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Mengubah...' : 'Ubah Password'}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
