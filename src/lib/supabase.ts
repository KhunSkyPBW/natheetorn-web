@@ .. @@
 import { createClient } from '@supabase/supabase-js';

-const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
-const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
+const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
+const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

-if (!supabaseUrl || !supabaseAnonKey) {
-  throw new Error('Missing Supabase environment variables');
-}
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);
+// Check if we have real Supabase credentials
+const hasSupabaseConfig = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key';

-export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
export const hasSupabaseConfig = !!(supabaseUrl && supabaseAnonKey);
+export const supabase = hasSupabaseConfig ? createClient(supabaseUrl, supabaseAnonKey) : null;
+export { hasSupabaseConfig };