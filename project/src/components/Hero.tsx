import React from 'react';
import { Zap, Shield, Truck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Hero = () => {
  const { user, setIsAuthOpen } = useAuth();

  const handleStartShopping = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBecomeSeller = () => {
    if (user) {
      window.location.href = '/admin';
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Future of Shopping
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Discover amazing products from verified sellers in our cutting-edge marketplace. 
            Experience shopping like never before with our futuristic platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleStartShopping}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Start Shopping
            </button>
            <button 
              onClick={handleBecomeSeller}
              className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Become a Seller
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
              <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-300">Instant search and ultra-fast loading for the best shopping experience.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Safe</h3>
              <p className="text-slate-300">Advanced security measures to protect your purchases and data.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
              <Truck className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-slate-300">Quick and reliable shipping to get your products when you need them.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;