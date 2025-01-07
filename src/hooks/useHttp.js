import { useState } from 'react';
import axios from 'axios';

const useHttp = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (method = 'GET', body = null) => {
    setLoading(true);
    try {
      const response = await axios({
        method,
        url,
        data: body,
      });
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

export default useHttp;