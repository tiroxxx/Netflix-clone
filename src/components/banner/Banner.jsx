import { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../request';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie);
    }
  }, []);

  return <header className="banner"></header>;
}
