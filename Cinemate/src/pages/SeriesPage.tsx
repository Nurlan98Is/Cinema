
import { useState, useEffect } from "react";

interface Series {
  id?: number;
  name?: string;
  poster_path?: string;
  vote_average?: number;
  first_air_date?: string;
}

export const Series = () => {
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=4b96d934b2d2f7a64eb54685be77e9ef"
    )
      .then((res) => res.json())
      .then((data) => setSeries(data.results));
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
        {series.map((series) => {
          return (
            <div
              key={series.id}
              style={{
                textAlign: "center",
                width: "300px",
                background: "grey",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
                style={{ width: "200px", borderRadius: "10px" }}
              />
              <h3>{series.name}</h3>
              <p>Рейтинг: {series.vote_average}</p>
              <p>Дата выхода: {series.first_air_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
