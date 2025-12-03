import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetchShows(source?: string, genre?: string | string[]) {
  const [shows, setShows] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://be-cinemate.onrender.com/series/filter',
          {
            params: {
              ...(source && { source }),
              ...(genre && { genre }),
            },
          },
        );
        setShows(response.data);
      } catch (err: any) {
        setError(err.message || 'Ошибка при загрузке данных');
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [source, genre]);

  return { shows, loading, error };
}
