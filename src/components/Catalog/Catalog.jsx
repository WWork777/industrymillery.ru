"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import "./Catalog.scss";


/* Данные (JSON) внутри компонента */
// const data = [
//   {
//     name: "Чистящее средство, 500 мл",
//     price: 390,
//     purpose: "для дома",
//     image: "/images/Products/1.jpg",
//     link: "/catalog/cleaner-500",
//   },
//   {
//     name: "Шампунь для волос, 250 мл",
//     price: 450,
//     purpose: "для дома",
//     image: "/images/Products/2.jpg",
//     link: "/catalog/shampoo-250",
//   },
//   {
//     name: "Шампунь для волос, 250 мл",
//     price: 300,
//     purpose: "для дома",
//     image: "/images/Products/2.jpg",
//     link: "/catalog/shampoo-250",
//   },
//   {
//     name: "Гель для стирки, 1 л",
//     price: 590,
//     purpose: "для себя",
//     image: "/images/Products/3.jpg",
//     link: "/catalog/laundry-1l",
//   },
//   {
//     name: "Спрей для кухни, 500 мл",
//     price: 420,
//     purpose: "уборка",
//     image: "/img/products/kitchen-500.jpg",
//     link: "/catalog/kitchen-500",
//   },
//   {
//     name: "Кондиционер для белья, 1 л",
//     price: 520,
//     purpose: "для стирки",
//     image: "/img/products/softener-1l.jpg",
//     link: "/catalog/softener-1l",
//   },
//   {
//     name: "Гель для душа, 300 мл",
//     price: 360,
//     purpose: "эко",
//     image: "/img/products/showergel-300.jpg",
//     link: "/catalog/showergel-300",
//   },
// ];

export default function ProductsCatalog({productsList, filterON, title}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Инициализируем из URL
  const [purpose, setPurpose] = useState(searchParams.get("purpose") || "all");
  const [minPrice, setMinPrice] = useState(searchParams.get("min") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max") || "");

  // Фильтрация
  const products = useMemo(() => {
    const min = minPrice === "" ? -Infinity : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);

    return productsList.filter((p) => {
      const okPrice = p.price >= min && p.price <= max;
      const okPurpose = purpose === "all" ? true : p.purpose === purpose;
      return okPrice && okPurpose;
    });
  }, [minPrice, maxPrice, purpose]);

  // Синхронизируем состояние -> URL (без перезагрузки)
  useEffect(() => {
    const params = new URLSearchParams();
    if (purpose !== "all") params.set("purpose", purpose);
    if (minPrice !== "") params.set("min", String(minPrice));
    if (maxPrice !== "") params.set("max", String(maxPrice));

    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }, [purpose, minPrice, maxPrice, pathname, router]);

  const reset = () => {
    setPurpose("all");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <section className="catalog-products" aria-label="Каталог товаров">
      <h2 className="catalog-products__title">{title}</h2>

      {/* Фильтр */}
      {filterON &&
        <div
          className="catalog-products__filters"
          role="region"
          aria-label="Фильтр товаров"
        >
          <div className="filters-row">
            <div className="filters-control">
              <label htmlFor="purpose">Назначение</label>
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="all">Все</option>
                <option value="для дома">Для дома</option>
                <option value="для стирки">Для стирки</option>
                <option value="для себя">Для себя</option>
                <option value="эко">Эко</option>
                <option value="СТМ">СТМ</option>
                
                
              </select>
            </div>

            {/* <div className="filters-control">
              <label>Цена, ₽</label>
              <div className="filters-range">
                <input
                  className="filters-input-half"
                  type="number"
                  inputMode="numeric"
                  placeholder="от"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min={0}
                />
                <span className="filters-dash">—</span>
                <input
                  className="filters-input-half"
                  type="number"
                  inputMode="numeric"
                  placeholder="до"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min={0}
                />
              </div>
            </div> */}

            <button type="button" className="filters-reset" onClick={reset}>
              Сбросить
            </button>
          </div>

          <div className="filters-count">
            Найдено: <b>{products.length}</b>
          </div>
        </div>
      }

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
                  {/* <span className="product__price">
                    {Number(p.price).toLocaleString("ru-RU")} ₽
                  </span> */}
                  <span className="product__purpose">{p.purpose}</span>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
