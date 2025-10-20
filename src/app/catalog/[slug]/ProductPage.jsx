"use client";

import Link from "next/link";
import "./ProductPage.scss";

function formatPrice(n) {
  try {
    return Number(n).toLocaleString("ru-RU") + " ₽";
  } catch {
    return n + " ₽";
  }
}

export default function ProductPage({ product, related = [] }) {
  return (
    <main className="product-page">
      <div className="product-page__container">
        <nav className="product-page__breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/catalog">Каталог</Link>
          <span>—</span>
          <span>{product.name}</span>
        </nav>

        <header className="product-page__header">
          <div className="product-page__media">
            <img src={product.image} alt={product.name} />
            <span className="product-page__purpose">{product.purpose}</span>
          </div>

          <div className="product-page__info">
            <h1 className="product-page__title">{product.name}</h1>
            {product.short && <p className="product-page__short">{product.short}</p>}

            <div className="product-page__price-row">
              <div className="product-page__price">{formatPrice(product.price)}</div>
              {/* <button className="product-page__buy" type="button">
                В корзину
              </button> */}
            </div>

            {Array.isArray(product.specs) && product.specs.length > 0 && (
              <ul className="product-page__specs" aria-label="Характеристики">
                {product.specs.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>
        </header>

        {product.desc && (
          <section className="product-page__description">
            <h2>Описание</h2>
            <p>{product.desc}</p>
          </section>
        )}

        {related.length > 0 && (
          <section className="product-page__related" aria-label="Похожие товары">
            <div className="product-page__related-head">
              <h3>Похожие товары</h3>
              <Link href={`/catalog?purpose=${encodeURIComponent(product.purpose)}`}>
                Смотреть все по категории
              </Link>
            </div>

            <div className="product-page__grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="product-page__tile">
                  <article className="product-page__card">
                    <img src={p.image} alt={p.name} />
                    <h4 className="product-page__card-title">{p.name}</h4>
                    <div className="product-page__card-meta">
                      <span className="product-page__card-price">{formatPrice(p.price)}</span>
                      <span className="product-page__card-purpose">{p.purpose}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
