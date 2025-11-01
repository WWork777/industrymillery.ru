// === File: components/ProductPage.jsx ===
"use client";

import Link from "next/link";
import "./ProductPage.scss";

// MUI Accordion (как в примере заказчика)
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function formatPrice(n) {
  try {
    return Number(n).toLocaleString("ru-RU") + " ₽";
  } catch {
    return n + " ₽";
  }
}

/**
 * Расширенная карточка товара под требования заказчика.
 * НАЗВАНИЯ/ПУТИ НЕ МЕНЯЛ. Встроен MUI-аккордеон.
 * ЦЕНЫ ИЗ ВЁРСТКИ УБРАНЫ (договорная стоимость).
 * Новые поля продукта: unit, descFull, composition, usage, volumes[].
 */
export default function ProductPage({ product, related = [] }) {
  const volumes = Array.isArray(product.volumes) ? product.volumes : [];

  // Сохраняем текущий товар в «просмотренные»
  // (компонент RecentViewed читает это из localStorage)
  if (typeof window !== "undefined") {
    // динамический импорт, чтобы не тянуть компонент на сервер
    import("../../../components/RecentViewed/RecentViewed").then(({ pushRecentProduct }) => {
      pushRecentProduct({ slug: product.slug, name: product.name, image: product.image, purpose: product.purpose });
    }).catch(() => {});
  }

  return (
    <main className="product-page">
      <div className="product-page__container">
        <nav className="product-page__breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/catalog">Каталог</Link>
          <span>›</span>
          <span>{product.name}</span>
        </nav>

        <header className="product-page__header">
          <div className="product-page__media">
            <img src={product.image} alt={product.name} />
            {product.purpose && <span className="product-page__purpose">{product.purpose}</span>}
          </div>

          <div className="product-page__info">
            <h1 className="product-page__title">{product.name}</h1>
            {product.short && <p className="product-page__short">{product.short}</p>}

            {/* Переключатель объёмов */}
            {volumes.length > 0 && (
              <div className="product-page__volumes" role="group" aria-label="Выбор объёма">
                {volumes.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/catalog/${v.slug}`}
                    className={`product-page__volume ${v.isCurrent ? "is-active" : ""}`}
                    aria-current={v.isCurrent ? "true" : undefined}
                    prefetch={false}
                  >
                    {v.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Блок действия (без цены): только кнопка */}
            <div className="product-page__cta-row">
              <button
                className="product-page__buy"
                type="button"
                onClick={() => alert("Добавлено в корзину (заглушка)")}
              >
                Добавить в корзину
              </button>
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

        {/* Аккордеон как в примере: MUI, три секции. Пустые поля не выводим. */}
        <section className="product-page__accordion" aria-label="Информация о товаре">
          {(product.descFull || product.desc) && (
            <Accordion className="product-page__acc-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="product-page__acc-expand" />}
                aria-controls="panel-desc-content"
                id="panel-desc-header"
                className="product-page__acc-summary"
              >
                <Typography className="product-page__acc-title">Полное описание</Typography>
              </AccordionSummary>
              <AccordionDetails className="product-page__acc-details">
                <Typography className="product-page__acc-text">{product.descFull || product.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          )}

          {product.composition && (
            <Accordion className="product-page__acc-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="product-page__acc-expand" />}
                aria-controls="panel-comp-content"
                id="panel-comp-header"
                className="product-page__acc-summary"
              >
                <Typography className="product-page__acc-title">Состав</Typography>
              </AccordionSummary>
              <AccordionDetails className="product-page__acc-details">
                <Typography className="product-page__acc-text">{product.composition}</Typography>
              </AccordionDetails>
            </Accordion>
          )}

          {product.usage && (
            <Accordion className="product-page__acc-item">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="product-page__acc-expand" />}
                aria-controls="panel-usage-content"
                id="panel-usage-header"
                className="product-page__acc-summary"
              >
                <Typography className="product-page__acc-title">Способ применения</Typography>
              </AccordionSummary>
              <AccordionDetails className="product-page__acc-details">
                <Typography className="product-page__acc-text">
                  {product.usage.split('\n').map((line, index, array) => (
                    <span key={index}>
                      {line}
                      {index === 0 ? ( // После первой строки
                        <></>
                      ) : index < array.length - 1 && ( // После остальных строк (кроме последней)
                        <><br /><br /></>
                      )}
                    </span>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </section>

        {/* Ниже — «другие объёмы» этого же товара (без цен). */}
        {volumes.length > 0 && (
          <section className="product-page__related" aria-label="Другие объёмы">
            <div className="product-page__related-head">
              <h3>Другие объёмы</h3>
              <span className="product-page__related-tip">Выберите объём</span>
            </div>

            <div className="product-page__table">
              <div className="product-page__table-row product-page__table-row--head">
                <div>Объём</div>
                <div>Ссылка</div>
              </div>
              {volumes.map((v) => (
                <div key={v.slug} className={`product-page__table-row ${v.isCurrent ? "is-current" : ""}`}>
                  <div>{v.label}</div>
                  <div>
                    {v.isCurrent ? (
                      <span className="product-page__badge">текущий</span>
                    ) : (
                      <Link href={`/catalog/${v.slug}`} className="product-page__open">Открыть</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

