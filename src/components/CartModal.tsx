<button 
  onClick={handleCheckout}
  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
>
  {hasSupabaseConfig ? 'Proceed to Checkout' : 'Checkout (Demo Mode)'}
</button>