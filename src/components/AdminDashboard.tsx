@@ .. @@
 import React, { useState, useEffect } from 'react';
 import { Plus, Edit, Trash2, Package, Users, ShoppingCart, TrendingUp } from 'lucide-react';
-import { supabase, Product, Category } from '../lib/supabase';
+import { supabase, hasSupabaseConfig, Product, Category } from '../lib/supabase';
 import { useAuth } from '../context/AuthContext';

export default React