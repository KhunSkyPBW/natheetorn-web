import { useState, useEffect } from 'react';
import { supabase, hasSupabaseConfig, Product } from '../lib/supabase';

// Mock data for when Supabase is not configured
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 299.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    category_id: '1',
    seller_id: '1',
    stock_quantity: 25,
    is_active: true,
    rating: 4.8,
    review_count: 156,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: { id: '1', name: 'Electronics', created_at: new Date().toISOString() },
    seller: { id: '1', email: 'seller@example.com', full_name: 'Natheetorn Store', is_seller: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  },
  {
    id: '2',
    name: 'Gaming Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard with blue switches. Designed for gaming enthusiasts and programmers.',
    price: 149.99,
    image_url: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
    category_id: '2',
    seller_id: '1',
    stock_quantity: 40,
    is_active: true,
    rating: 4.6,
    review_count: 89,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: { id: '2', name: 'Gaming', created_at: new Date().toISOString() },
    seller: { id: '1', email: 'seller@example.com', full_name: 'Natheetorn Store', is_seller: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  },
  {
    id: '3',
    name: 'Smartphone 128GB',
    description: 'Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life.',
    price: 899.99,
    image_url: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    category_id: '1',
    seller_id: '1',
    stock_quantity: 15,
    is_active: true,
    rating: 4.9,
    review_count: 234,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: { id: '1', name: 'Electronics', created_at: new Date().toISOString() },
    seller: { id: '1', email: 'seller@example.com', full_name: 'Natheetorn Store', is_seller: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  },
  {
    id: '4',
    name: 'Designer Sneakers',
    description: 'Limited edition designer sneakers with premium materials and comfortable fit. Perfect for casual and athletic wear.',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    category_id: '3',
    seller_id: '1',
    stock_quantity: 30,
    is_active: true,
    rating: 4.7,
    review_count: 67,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: { id: '3', name: 'Fashion', created_at: new Date().toISOString() },
    seller: { id: '1', email: 'seller@example.com', full_name: 'Natheetorn Store', is_seller: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  },
  {
    id: '5',
    name: 'Gaming Console',
    description: 'Next-generation gaming console with 4K gaming, ray tracing, and exclusive game library.',
    price: 499.99,
    image_url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    category_id: '2',
    seller_id: '1',
    stock_quantity: 12,
    is_active: true,
    rating: 4.9,
    review_count: 312,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: { id: '2', name: 'Gaming', created_at: new Date().toISOString() },
    seller: { id: '1', email: 'seller@example.com', full_name: 'Natheetorn Store', is_seller: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  },
  {
    id: '6',
    name: 'Smart Watch',
    description: 'Advanced fitness tracking smartwatch with heart rate monitoring, GPS, and 7-day battery life.',
    price: 349.99,
    image_url: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category_id: '1',
    seller_id: '1',
    stock_quantity: 20,
    is_active: true,
    rating: 4.5,
    review_count: 145,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: { id: '1', name: 'Electronics', created_at: new Date().toISOString() },
    seller: { id: '1', email: 'seller@example.com', full_name: 'Natheetorn Store', is_seller: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  }
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      if (!hasSupabaseConfig || !supabase) {
        // Use mock data when Supabase is not configured
        setTimeout(() => {
          setProducts(mockProducts);
          setLoading(false);
        }, 500);
        return;
      }

      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(*),
          seller:profiles(*)
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      // Fallback to mock data on error
      setProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts
  };
};