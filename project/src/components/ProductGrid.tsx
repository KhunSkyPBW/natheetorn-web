import React, { useState, useEffect } from 'react';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
import { supabase } from '../lib/supabase';


const ProductGrid = () => {
  const { products, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<any[]>([]);
  const { addToCart } = useCart();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from('categories').select('*');
      setCategories(data || []);
    };
    fetchCategories();
  }, []);

  const categoryOptions = ['All', ...categories.map(c => c.name)];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category?.name === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url || 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      quantity: 1
    });
  };

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
          <p className="text-slate-300 mt-4">Loading products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-red-400">Error loading products: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured Products
        </h2>
        <p className="text-slate-300 text-lg">
          Discover the latest and greatest products from our verified sellers
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categoryOptions.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-blue-500/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
          >
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image_url || 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center text-yellow-400 ml-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-slate-300 ml-1">{product.rating}</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-2">by {product.seller?.full_name || 'Natheetorn Store'}</p>
              <p className="text-slate-300 text-sm mb-4 line-clamp-2">{product.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  disabled={product.stock_quantity === 0}
                >
                  <Plus className="h-4 w-4" />
                  <span>{product.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;