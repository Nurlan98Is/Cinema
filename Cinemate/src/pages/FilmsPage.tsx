import { useState, useEffect } from "react";

interface Movie {
  id?: number;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  release_date?: string;
}

export const Films = ({ isActive }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=4b96d934b2d2f7a64eb54685be77e9ef"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results)) // Указываем, что `data.results` — это массив фильмов
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{ textAlign: "center", background: "grey", width: "300px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
            <p>Рейтинг: {movie.vote_average}</p>
            <p>Дата выхода: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
