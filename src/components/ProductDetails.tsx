import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-500/20 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square bg-slate-700 rounded-lg"></div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">Product Details</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-white">4.8 (120 reviews)</span>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-blue-400 mb-6">$299.99</p>
            
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
            
            <div className="prose prose-invert">
              <h3 className="text-white">Product Description</h3>
              <p className="text-slate-300">
                This is a detailed description of the product with all its features and specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;