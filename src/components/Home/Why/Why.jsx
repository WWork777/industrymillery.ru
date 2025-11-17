"use client";
import "./Why.scss";
import Link from "next/link";

export default function WhyStrip() {
  const items = [
    { title: "Качество и безопасность", image: "/images/Why/reason1.jpg" },
    { title: "Выгода и надежность", image: "/images/Why/reason1.jpg" },
    { title: "Собственное производство", image: "/images/Why/reason1.jpg" },
  ];

  return (
    <section className="why">
      <h2 className="why-title">Почему выбирают нас?</h2>
      
      <div className="why__grid">
        <Link href="/stm-catalog">
            <article className="why-card why-card--brands" aria-labelledby="brands-title">
            <p id="brands-title" className="why-brands__title">
              <span>Вы можете</span>
              <span>найти нас здесь</span>
            </p>
            <div className="why-brands__logos">
              <img src="/images/Why/begemag.png" alt="Бегемаг" />
              <img src="/images/Why/novex.png" alt="Novex" />
              <img src="/images/Why/atmosphera.png" alt="Атмосфера Чистоты" />
            </div>
          </article>
        </Link>
        

        {items.map((it, i) => (
          <article className="why-card" key={i}>
            <img className="why-card__img" src={it.image} alt={it.title} />
            <span className="why-card__caption">{it.title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
