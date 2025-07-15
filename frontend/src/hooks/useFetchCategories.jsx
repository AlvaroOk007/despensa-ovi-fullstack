import { useEffect, useState } from 'react';

export function useFetchCategories(){
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('http://localhost:3000/categories');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data) {
          setCategories([{id: 0, name: 'Categoria'}, ...data.data]);
        } else {
          setCategories([{id: 0, name: 'Categoria'}]);
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err.message);
        setCategories([{id: 0, name: 'Categoria'}]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}