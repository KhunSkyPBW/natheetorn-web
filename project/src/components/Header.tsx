import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, setIsCartOpen } = useCart();
  const { user, setIsAuthOpen, signOut } = useAuth();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blue-900/80 backdrop-blur-md border-b border-blue-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Natheetorn Marketplace
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">Home</Link>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Categories</a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Deals</a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Sellers</a>
              <Link to="/admin" className="text-slate-300 hover:text-blue-400 transition-colors">Admin</Link>
            </nav>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-slate-300 hidden lg:block">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={signOut}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <User className="h-6 w-6" />
                <span className="hidden lg:block">Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500/30">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              </div>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-slate-300 hover:text-blue-400 py-2">Home</Link>
                <a href="#" className="text-slate-300 hover:text-blue-400 py-2">Categories</a>
                <a href="#" className="text-slate-300 hover:text-blue-400 py-2">Deals</a>
                <a href="#" className="text-slate-300 hover:text-blue-400 py-2">Sellers</a>
                <Link to="/admin" className="text-slate-300 hover:text-blue-400 py-2">Admin</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;