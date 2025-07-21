import ProductDetails from './components/ProductDetails';
import AdminDashboard from './components/AdminDashboard';
import SupabaseStatus from './components/SupabaseStatus';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

            <Footer />
            <AuthModal />
            <CartModal />
            <SupabaseStatus />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}