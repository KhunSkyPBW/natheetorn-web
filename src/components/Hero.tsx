@@ .. @@
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
             Welcome to the{' '}
             <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
               Future of Shopping
             </span>
           </h1>
           <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
-            Discover amazing products from verified sellers in our cutting-edge marketplace. 
-            Experience shopping like never before with our futuristic platform.
+            Discover amazing products from verified sellers in our cutting-edge marketplace.
+            Experience shopping like never before with our futuristic platform.
+            {!import.meta.env.VITE_SUPABASE_URL && (
+              <span className="block mt-2 text-yellow-400 text-base">
+                🚀 Demo Mode: Connect to Supabase for full functionality
+              </span>
+            )}
           </p>