import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Package, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { supabase, hasSupabaseConfig, Product, Category } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

  const handleDelete = async (productId: string) => {
    if (!hasSupabaseConfig || !supabase) {
      alert('Demo mode: Product management requires Supabase configuration.');
      return;
    }

    if (confirm('Are you sure you want to delete this product?')) {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);
      
      if (!error) {
        fetchProducts();
        alert('Product deleted successfully!');
      } else {
        alert('Error deleting product: ' + error.message);
      }
    }
  };