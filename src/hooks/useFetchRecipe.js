import axios from 'axios';
import { useState } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: { id: '8138' },
  headers: {
    'x-rapidapi-key': '564ee56f97msh31e62351d501281p1fecc7jsn4823ac98235b',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipe = async (id) => {
    setLoading(true);
    setRecipe(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      reqOptions.params.id = id;
      const response = await axios.request(reqOptions);
      setRecipe(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return [fetchRecipe, { data: recipe, loading, error }];
}

export default useFetchRecipe;