import React, { useState, useEffect } from 'react';
import { supabase, hasSupabaseConfig, Product, Category } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const fetchCategories = async () => {
  if (!hasSupabaseConfig || !supabase) {
    console.log('Supabase not configured, using mock categories');
    setCategories([
      { id: '1', name: 'Electronics', created_at: new Date().toISOString() },
      { id: '2', name: 'Gaming', created_at: new Date().toISOString() },
      { id: '3', name: 'Fashion', created_at: new Date().toISOString() }
    ]);
    return;
  }

  console.log('Fetching categories from Supabase...');
  const { data } = await supabase.from('categories').select('*');
  console.log('Fetched categories:', data);
  setCategories(data || []);
};

    review_count: 0,
  console.log('Submitting product data:', productData);
    rating: 0,

    is_active: true,
    if (error) {
      console.error('Error adding product:', error);
      alert('Error adding product: ' + error.message);
    } else {
      console.log('Product added successfully');
    }
  if (!hasSupabaseConfig || !supabase) {
    alert('Supabase is not configured. Please connect to Supabase to add products.');
  }
      console.error('Error updating product:', error);
  if (!user) {
      alert('Error updating product: ' + error.message);
    alert('Please sign in to add products');
    } else {
      console.log('Product updated successfully');
    }

  console.log('Adding product with user:', user);
  console.log('Product form data:', productForm);