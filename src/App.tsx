import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';
import ProductDetails from './components/ProductDetails';
import AdminDashboard from './components/AdminDashboard';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ProductGrid />
                </>
              } />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            <Footer />
            <AuthModal />
            <CartModal />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;