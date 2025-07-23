const handleDelete = async (productId: string) => {
    if (!hasSupabaseConfig || !supabase) {
      alert('Supabase is not configured');
      return;
    }

    if (confirm('Are you sure you want to delete this product?')) {