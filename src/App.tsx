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
import Checkout from './pages/Checkout';

// ✅ Seller Pages
import SellerDashboard from './pages/seller/SellerDashboard';
import SellerProducts from './pages/seller/SellerProducts';
import AddProduct from './pages/seller/AddProduct';
import EditProduct from './pages/seller/EditProduct';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <Header />
            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <ProductGrid />
                  </>
                }
              />

              {/* Product Detail */}
              <Route path="/product/:id" element={<ProductDetails />} />

              {/* Admin */}
              <Route path="/admin" element={<AdminDashboard />} />

              {/* Checkout */}
              <Route path="/checkout" element={<Checkout />} />

              {/* ✅ Seller Dashboard Nested Routes */}
              <Route path="/seller" element={<SellerDashboard />}>
                <Route
                  index
                  element={
                    <div className="text-center text-gray-400 mt-10">
                      Dashboard Overview coming soon...
                    </div>
                  }
                />
                <Route path="products" element={<SellerProducts />} />
                <Route path="add" element={<AddProduct />} />
                <Route path="edit/:id" element={<EditProduct />} />
                <Route
                  path="orders"
                  element={
                    <div className="text-center text-gray-400 mt-10">
                      Orders management coming soon...
                    </div>
                  }
                />
              </Route>
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
