import React from 'react';
import { Database, AlertCircle, CheckCircle } from 'lucide-react';
import { hasSupabaseConfig } from '../lib/supabase';

const SupabaseStatus = () => {
  if (hasSupabaseConfig) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-900/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 flex items-center space-x-2 text-green-300">
        <CheckCircle className="h-4 w-4" />
        <span className="text-sm">Supabase Connected</span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-900/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-3 max-w-sm">
      <div className="flex items-start space-x-2">
        <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-yellow-300">
          <p className="font-medium mb-1">Demo Mode</p>
          <p className="text-xs">
            Connect to Supabase for full functionality. 
            <a 
              href="https://supabase.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200 ml-1"
            >
              Get started →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupabaseStatus;