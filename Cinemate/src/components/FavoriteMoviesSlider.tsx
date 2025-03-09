import { useState } from "react";
import { favoriteMovieArray } from "./FavoriteMovie";

export type favoriteMovie = {
  title: string;
  img: string;
  rating: number;
  id: number;
};

export const FavoriteMoviesSlider = () => {
  const [indexPosition, setIndexPosition] = useState(0);
  const [favoriteMovie, setFavoriteMovie] =
    useState<favoriteMovie[]>(favoriteMovieArray);
  return (
    <div
      style={{
        position: "relative",
        width: "50%",
        margin: "0 auto",
        //overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <button>Предыдущий</button>
      <div
        style={{
          display: "flex",
          gap: "16px",
          position: "relative",
          height: "1000px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {favoriteMovie.map((movie) => {
          console.log(movie);
          return (
            <div
              key={movie.id}
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: `url("/src/assets/American_crime_story.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span>{movie.title}</span>
              <span>{movie.rating}</span>
            </div>
          );
        })}
      </div>
      <button>Следующий</button>
    </div>
  );
};
