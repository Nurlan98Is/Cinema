import { useState } from "react";
import { favoriteMovieArray } from "./FavoriteMovie";
import { SwiperSlide, Swiper } from "swiper/react";

export type favoriteMovie = {
  title: string;
  img: string;
  rating: number;
  id: number;
};

export const FavoriteMoviesSlider = () => {
  const [favoriteMovie, setFavoriteMovie] =
    useState<favoriteMovie[]>(favoriteMovieArray);
  const [indexPosition, setIndexPosition] = useState(0);

  const next = 450;
  const nextPos = () => {
    setIndexPosition((next) => next + 450);
  };
  return (
    // <div // main-container
    //   style={{
    //     // position: "relative",
    //     // width: "500px",
    //     // margin: "0 auto",
    //     // display: "flex",
    //     // alignItems: "center",
    //     // justifyContent: "center",
    //     // gap: "10px",
    //     //overflow: "hidden",
    //     height: "600px",
    //     width: "600px",
    //   }}
    // >
    //   <button>Предыдущий</button>
    //   <div //window
    //     style={{
    //       height: "100%",
    //       width: "100%",
    //       //overflow: "hidden",
    //     }}
    //   >
    //     <div // all-items
    //       style={{
    //         height: "100%",
    //         display: "flex",
    //       }}
    //     >
    //       {/* {favoriteMovie.map((movie, i) => {
    //         return (
    //           <div
    //             key={movie.id}
    //             style={{
    //               height: "100%",
    //               maxWidth: "600px",
    //               minWidth: "600px",
    //               backgroundImage: `url("${movie.img}")`,
    //               backgroundSize: "contain",
    //               backgroundPosition: "center",
    //               backgroundRepeat: "no-repeat",
    //               transform: `translateX()`,
    //             }}
    //           >
    //             <p style={{ paddingLeft: "150px", color: "white" }}>
    //               {movie.title}
    //             </p>
    //             <p style={{ paddingLeft: "150px", color: "white" }}>
    //               {movie.rating}
    //             </p>
    //             <p style={{ paddingLeft: "150px", color: "white" }}>
    //               {movie.id}
    //               ss{i}
    //             </p>
    //           </div>
    //         );
    //       })} */}

    //     </div>
    //   </div>
    //   <button onClick={nextPos}>Следующий</button>
    // </div>
    <div>
      {" "}
      <Swiper>
        {" "}
        {favoriteMovie.map((movie, i) => {
          return (
            <div
              key={movie.id}
              style={{
                height: "100%",
                maxWidth: "600px",
                minWidth: "600px",
                backgroundImage: `url("${movie.img}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: `translateX()`,
              }}
            >
              <p style={{ paddingLeft: "150px", color: "white" }}>
                {movie.title}
              </p>
              <p style={{ paddingLeft: "150px", color: "white" }}>
                {movie.rating}
              </p>
              <p style={{ paddingLeft: "150px", color: "white" }}>
                {movie.id}
                ss{i}
              </p>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
