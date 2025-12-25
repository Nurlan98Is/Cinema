import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

type ReusableSliderProps = {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  slideHeight?: string | number;
};

export default function SeriesSwiper({
  children,
  slidesPerView = 4,
  spaceBetween = 0,
}: ReusableSliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        960: { slidesPerView: 2 },
        1280: { slidesPerView: 4 },
      }}
      style={{ height: 750 }}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
