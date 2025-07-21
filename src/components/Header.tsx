@@ .. @@
           {/* Search Bar */}
           <div className="hidden md:flex flex-1 max-w-lg mx-8">
             <div className="relative w-full">
               <input
                 type="text"
                 placeholder="Search for products..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
-                className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
+                className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
               />
               <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
             </div>
           </div>