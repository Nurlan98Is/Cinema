import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { favoriteMovieArray } from './FavoriteMovie.ts'

export type FavoriteMovie = {
  title: string;
  img: string;
  rating: number;
  id: number;
};

export const FavoriteMoviesSlider = () => {
  const [favoriteMovies] = useState<FavoriteMovie[]>(favoriteMovieArray);

  return (
      <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            margin: "0 auto",
            position: "relative",
          }}
      >
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            style={{
              padding: "20px 0",
            }}
        >
          {favoriteMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Box
                    sx={{
                      height: 400,
                      backgroundImage: `url("${movie.img}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 3,
                      color: "white",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                        borderRadius: 2,
                      },
                    }}
                >
                  <Box position="relative" zIndex={1}>
                    <Typography variant="h5" fontWeight="bold">
                      {movie.title}
                    </Typography>
                    <Typography variant="body1">Rating: {movie.rating}/10</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
          ))}
        </Swiper>
      </Box>
  );
};
