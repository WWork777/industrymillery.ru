import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <img
          src="/images/Hero/fon.jpg"
          alt="Мыльная продукция"
          className="hero__image"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Мыльная продукция различного назначения</h1>
        <p className="hero__subtitle">Сбыт оптом</p>
        <button className="hero__button">Узнать подробнее &gt;&gt;</button>
      </div>
    </section>
  );
}
