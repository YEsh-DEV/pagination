import { useState, useEffect, useCallback } from 'react';

/**
 * Custom Hook: useFetch
 * Fetches data from a given API URL and handles loading, error, and refetch states.
 * 
 * @param {string} url - API Endpoint URL to fetch
 * @returns {Object} { data, loading, error, refetch }
 */
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status} (${response.statusText})`);
      }
      const result = await response.json();
      setData(result.results || []);
    } catch (err) {
      setError(err.message || 'Failed to connect to user service');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
