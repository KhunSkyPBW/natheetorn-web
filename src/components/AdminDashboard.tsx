      import React, { useState, useEffect } from 'react';
import { supabase, hasSupabaseConfig, Product, Category } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

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