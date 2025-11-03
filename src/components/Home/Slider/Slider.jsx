"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Slider.scss";
import PRODUCTS from "../../../data/Products.json"

import "swiper/css";
import "swiper/css/navigation";

export default function Slider({ title, purpose = null }) {
  // Фильтрация товаров по категории или purpose
  const filteredProducts = PRODUCTS.filter(product => {
    if (purpose) {
      // Если передан purpose, фильтруем по purpose
      return product.purpose === purpose;
    }
    return false;
  });

  // Если нет товаров для отображения
  if (filteredProducts.length === 0) {
    return null; // или можно вернуть заглушку
  }

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
          800:  { slidesPerView: 3, spaceBetween: 16 },
          1250: { slidesPerView: 4, spaceBetween: 20 },
          1550: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="slider__swiper"
      >
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={product.slug} className="slider__slide">
            <a href={`/catalog/${product.slug}`}>
              <article className="product">
                <img 
                  className="product__img" 
                  src={product.image} 
                  alt={product.name} 
                />
                <h3 className="product__name">{product.name}</h3>
                {/* <p className="product__price">{product.price} ₽</p>
                <p className="product__unit">{product.unit}</p> */}
              </article>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}