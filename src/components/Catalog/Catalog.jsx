"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import "./Catalog.scss";

export default function ProductsCatalog({ productsList, filterON, title }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [purpose, setPurpose] = useState(() => {
    const raw = searchParams.get("purpose");
    if (!raw) return ["all"];
    return raw.split(",");
  });

  const [minPrice, setMinPrice] = useState(searchParams.get("min") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max") || "");
  const products = useMemo(() => {
    const min = minPrice === "" ? -Infinity : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);

    return productsList.filter((p) => {
      const okPrice = p.price >= min && p.price <= max;

      // Приводим purpose продукта к массиву
      const productPurposes = Array.isArray(p.purpose)
        ? p.purpose
        : [p.purpose];

      // Если включено ALL → пропускаем
      const okPurpose =
        purpose.includes("all") ||
        productPurposes.some((pur) => purpose.includes(pur));

      return okPrice && okPurpose;
    });
  }, [minPrice, maxPrice, purpose, productsList]);

  /* ================================
      3) СИНХРОНИЗАЦИЯ STATE → URL
  ================================= */
  useEffect(() => {
    const params = new URLSearchParams();

    if (!purpose.includes("all")) {
      params.set("purpose", purpose.join(","));
    }

    if (minPrice !== "") params.set("min", String(minPrice));
    if (maxPrice !== "") params.set("max", String(maxPrice));

    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }, [purpose, minPrice, maxPrice, pathname, router]);

  /* ================================
      4) СБРОС ФИЛЬТРОВ
  ================================= */
  const reset = () => {
    setPurpose(["all"]);
    setMinPrice("");
    setMaxPrice("");
  };

  /* ================================
      5) ДОСТУПНЫЕ purpose
  ================================= */
  const availablePurposes = useMemo(() => {
    const purposes = new Set();

    productsList.forEach((product) => {
      if (Array.isArray(product.purpose)) {
        product.purpose.forEach((p) => purposes.add(p));
      } else {
        purposes.add(product.purpose);
      }
    });

    return Array.from(purposes);
  }, [productsList]);

  return (
    <section className="catalog-products" aria-label="Каталог товаров">
      <h2 className="catalog-products__title">{title}</h2>

      {/* Фильтр */}
      {filterON && (
        <div className="catalog-products__filters" role="region" aria-label="Фильтр товаров">
          <div className="filters-row">
            <div className="filters-control">
              <label htmlFor="purpose">Назначение</label>

              {/* ВАЖНО: т.к. purpose — массив, берём purpose[0] */}
              <select
                id="purpose"
                value={purpose[0] === "all" ? "all" : purpose[0]}
                onChange={(e) => setPurpose([e.target.value])}
              >
                <option value="all">Все</option>
                {availablePurposes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" className="filters-reset" onClick={reset}>
              Сбросить
            </button>
          </div>

          <div className="filters-count">
            Найдено: <b>{products.length}</b>
          </div>
        </div>
      )}

      {/* Сетка карточек */}
      <div className="catalog-products__grid">
        {products.map((p) => (
          <div className="catalog-products__cell" key={p.id}>
            <Link
              href={`/${title == "Каталог" ? "catalog" : "stm-catalog"}/${p.slug}`}
              className="catalog-products__link"
              aria-label={p.name}
            >
              <article className="product">
                <img className="product__img" src={p.image} alt={p.name} />
                <h3 className="product__name">{p.name}</h3>
                <div className="product__meta">
                  <span className="product__purpose">
                    {Array.isArray(p.purpose) ? p.purpose.join(", ") : p.purpose}
                  </span>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
