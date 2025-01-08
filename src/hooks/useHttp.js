import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttp = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    setError(null); 
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await axios({
        method,
        url,
        data: body,
        headers,
        signal,
      });
      setData(response.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    return () => {
    controller.abort();
    };
  };

  useEffect(() => {
    return () => {
    const controller = new AbortController();
    controller.abort();
    };
  }, []);

  return { data, error, loading, fetchData, setUrl };
};

export default useHttp;