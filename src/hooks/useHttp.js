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
    let finalUrl = method === 'DELETE' ? url + body.id : url;

    if (body) {
      if (method === 'DELETE') {
        finalUrl = url + body.id;
      } else if (method === 'GET') {
        finalUrl = url + body.nombre;
      }
    } else {
      finalUrl = url;
    }

    try {
      console.log('URL:', finalUrl);
      const response = await axios({
        method,
        url: finalUrl,
        data: body,
        headers,
        signal,
      });
      console.log('Response:', response);
      if (response.status === 200 || response === 'Usuario eliminado' || response === 'Producto eliminado') {
        setData(response.data);
        return response.data;
      }
    } catch (err) {
      console.log(err);
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort();
  };

  return { data, error, loading, fetchData, setUrl };
};

export default useHttp;
