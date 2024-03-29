import { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../config";
const useHomeFetch = () => {
  const [state, setState] = useState({
    movies: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("Home -> state", state);
  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      setState(prev => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }));
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return [{ state, loading, error }, fetchMovies];
};

export default useHomeFetch;
