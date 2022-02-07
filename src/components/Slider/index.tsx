import { Swiper, SwiperSlide } from "swiper/react";
import { StyledSwiper } from "./sliderStyled";

interface SliderProps {
  items: any[];
}

export const Slider: React.FC<SliderProps> = ({
  items,
}: SliderProps): JSX.Element => {
  return (
    <StyledSwiper
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        360: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 4.2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 5.3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 6.4,
          spaceBetween: 5,
        },
        992: {
          slidesPerView: 7.5,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 8,
          spaceBetween: 5,
        },
      }}
    >
      {items.map((item: any, index) => (
        <SwiperSlide
          key={`Slider-${index}`}
          className="flex justify-center items-center text-center"
        >
          {item}
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
