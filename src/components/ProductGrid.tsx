// Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      if (!hasSupabaseConfig || !supabase) {
        // Mock categories for demo
        setCategories([
          { id: '1', name: 'Electronics' },
          { id: '2', name: 'Gaming' },
          { id: '3', name: 'Fashion' }
        ]);
        return;
      }

      try {
        const { data } = await supabase.from('categories').select('*');
        setCategories(data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);