"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Slider.scss"


import "swiper/css";
import "swiper/css/navigation";

export default function Slider({ title, products = [] }) {
  return (
    <section className="slider">
      <h2 className="slider__title">{title}</h2>

      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          320:  { slidesPerView: 1, spaceBetween: 12 },
          640:  { slidesPerView: 2, spaceBetween: 16 },
          1100: { slidesPerView: 3, spaceBetween: 20 },
          1500: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="slider__swiper"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i} className="slider__slide">
            <a href={p.link}>
                <article className="product">
                <img className="product__img" src={p.image} alt={p.name} />
                <h3 className="product__name">{p.name}</h3>
              </article>
            </a>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
