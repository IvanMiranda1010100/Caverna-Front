// src/hooks/useFetchComics.js
import { useState, useEffect } from 'react';

function useFetchComics() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://cavernaserver-production.up.railway.app/api/comics')
      .then(response => response.json())
      .then(data => {
        setComics(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return { comics, loading };
}

export default useFetchComics;
