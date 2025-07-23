import React, { useState, useEffect } from 'react';
import { supabase, hasSupabaseConfig, Product, Category } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import OrdersTable from './OrdersTable';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    image_url: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);

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

  const fetchProducts = async () => {
    if (!hasSupabaseConfig || !supabase) {
      console.log('Supabase not configured, using mock products');
      setProducts([]);
      return;
    }

    const { data } = await supabase.from('products').select('*');
    setProducts(data || []);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('Please sign in to add products');
      return;
    }

    if (!hasSupabaseConfig || !supabase) {
      alert('Supabase is not configured. Please connect to Supabase to add products.');
      return;
    }

    console.log('Adding product with user:', user);
    console.log('Product form data:', productForm);

    const productData = {
      ...productForm,
      price: parseFloat(productForm.price),
      review_count: 0,
      rating: 0,
      is_active: true,
    };

    console.log('Submitting product data:', productData);

    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select();

    if (error) {
      console.error('Error adding product:', error);
      alert('Error adding product: ' + error.message);
    } else {
      console.log('Product added successfully');
      setProductForm({
        name: '',
        description: '',
        price: '',
        category_id: '',
        image_url: ''
      });
      fetchProducts();
    }
  };

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    
    if (!editingProduct) return;

    const productData = {
      ...productForm,
      price: parseFloat(productForm.price),
    };

    const { data, error } = await supabase
      .from('products')
      .update(productData)
      .eq('id', editingProduct.id)
      .select();

    if (error) {
      console.error('Error updating product:', error);
      alert('Error updating product: ' + error.message);
    } else {
      console.log('Product updated successfully');
      setEditingProduct(null);
      setProductForm({
        name: '',
        description: '',
        price: '',
        category_id: '',
        image_url: ''
      });
      fetchProducts();
    }
  };

  const startEditing = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category_id: product.category_id,
      image_url: product.image_url || ''
    });
  };

  const cancelEditing = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      description: '',
      price: '',
      category_id: '',
      image_url: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

      {/* Add/Edit Product Form */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form onSubmit={editingProduct ? handleProductUpdate : handleProductSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                value={productForm.name}
                onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                value={productForm.price}
                onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              value={productForm.category_id}
              onChange={(e) => setProductForm({ ...productForm, category_id: e.target.value })}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={productForm.description}
              onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={productForm.image_url}
              onChange={(e) => setProductForm({ ...productForm, image_url: e.target.value })}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {editingProduct ? 'Update Product' : 'Add Product'}
            </button>
            
            {editingProduct && (
              <button
                type="button"
                onClick={cancelEditing}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Products Section */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Products</h2>
          <button
            onClick={fetchProducts}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="pb-3 text-gray-300">Name</th>
                <th className="pb-3 text-gray-300">Price</th>
                <th className="pb-3 text-gray-300">Category</th>
                <th className="pb-3 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-700">
                  <td className="py-3 text-white">{product.name}</td>
                  <td className="py-3 text-white">${product.price}</td>
                  <td className="py-3 text-white">
                    {categories.find(c => c.id === product.category_id)?.name || 'Unknown'}
                  </td>
                  <td className="py-3">
                    <button
                      onClick={() => startEditing(product)}
                      className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors mr-2"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Orders</h2>
        </div>

        <OrdersTable />
      </div>
    </div>
  );
};

export default AdminDashboard;