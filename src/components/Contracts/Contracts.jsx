"use client";

import Link from "next/link";
import "./Contracts.scss";

const PARTNERS = [
  { name: "Сеть №1", logo: "/images/Why/begemag.png", url: "#" },
  { name: "Сеть №2", logo: "/images/Why/novex.png", url: "#" },
//   { name: "Сеть №3", logo: "/img/partners/placeholder.svg", url: "#" },
//   { name: "Сеть №4", logo: "/img/partners/placeholder.svg", url: "#" },
//   { name: "Сеть №5", logo: "/img/partners/placeholder.svg", url: "#" },
//   { name: "Сеть №6", logo: "/img/partners/placeholder.svg", url: "#" },
];

export default function Contracts() {
  return (
    <section className="contracts-s" aria-labelledby="contracts-title">
      <div className="contracts-s__container">
        {/* Hero */}
        <header className="contracts-s__hero">
          <h1 id="contracts-title" className="contracts-s__title">Контракты и СТМ</h1>
          <p className="contracts-s__lead">
            Производим и поставляем средства для уборки, дома и стирки — по контракту
            и под собственные торговые марки (СТМ). Простые условия, прозрачный процесс,
            быстрый запуск.
          </p>
        </header>

        {/* Два понятных варианта */}
        <div className="contracts-s__choices">
          <article className="contracts-s__choice">
            <h2>Контрактные поставки</h2>
            <p>
              Стабильные рецептуры, регулярные отгрузки, полный пакет документов
              и поддержка контента.
            </p>
            <ul>
              <li>Широкий ассортимент SKU</li>
              <li>Сертификация / ДС</li>
              <li>Маркировка и логистика</li>
            </ul>
            <div className="contracts-s__actions">
              <Link className="btn btn--primary" href="/contacts">Запросить прайс</Link>
            </div>
          </article>

          <article className="contracts-s__choice" id="stm">
            <h2>СТМ (собственная марка)</h2>
            <p>
              Продукт под вашим брендом: рецептура, дизайн, упаковка и серийные поставки.
            </p>
            <ul>
              <li>Подбор формулы под TТХ</li>
              <li>Дизайн-этикетка и укупор</li>
              <li>Пилотные партии</li>
            </ul>
            <div className="contracts-s__actions">
              <Link className="btn btn--secondary" href="/contacts">Запросить бриф</Link>
            </div>
          </article>
        </div>

        {/* Короткий процесс СТМ — по полочкам */}
        <section className="contracts-s__steps" aria-label="Как запустить СТМ">
          <h3>Как запускаем СТМ</h3>
          <ol className="steps">
            <li><span>Бриф</span><small>Категории, цена, объёмы</small></li>
            <li><span>Образцы</span><small>1–3 итерации формул</small></li>
            <li><span>Дизайн</span><small>Этикетка и упаковка</small></li>
            <li><span>Документы</span><small>ДС/СГР/маркировка</small></li>
            <li><span>Пилот → Серия</span><small>Старт поставок</small></li>
          </ol>
        </section>

        {/* Партнёры — просто и понятно */}
        <section className="contracts-s__partners" aria-label="Партнёры">
          <h3>С кем работаем</h3>
          <div className="partners-grid">
            {PARTNERS.map((p, i) => (
              <a
                key={i}
                className="partner"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
              >
                <img src={p.logo} alt={p.name} />
                {/* <span>{p.name}</span> */}
              </a>
            ))}
          </div>
        </section>

        {/* Один понятный CTA */}
        {/* <section className="contracts-s__cta" aria-label="Связаться">
          <h3>Готовы обсудить проект?</h3>
          <p>Напишите нам, и мы предложим решения под вашу категорию и бюджет.</p>
          <div className="contracts-s__actions">
            <Link className="btn btn--primary" href="/contacts">Связаться</Link>
            <Link className="btn btn--ghost" href="/catalog">Каталог</Link>
          </div>
        </section> */}
      </div>
    </section>
  );
}
