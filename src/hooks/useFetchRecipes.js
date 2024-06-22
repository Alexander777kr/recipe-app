import axios from 'axios';
import { useEffect, useState } from 'react';
const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
  },
  headers: {
    'x-rapidapi-key': '564ee56f97msh31e62351d501281p1fecc7jsn4823ac98235b',
    'x-rapidapi-host': 'tasty.p.rapidapi.com',
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return [recipes];
}

export default useFetchRecipes;