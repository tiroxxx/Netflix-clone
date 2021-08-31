import './row.css';
import { useState, useEffect } from 'react';
import axios from '../../axios';

export default function Row({ title, fetchUrl, isLargeRow }) {
  const base_url = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request.data;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, idx) => (
          <img
            key={idx}
            className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
