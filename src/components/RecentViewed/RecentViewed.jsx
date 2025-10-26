// === components/RecentViewed.jsx ===
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./RecentViewed.scss";

const STORAGE_KEY = "recentProducts:v1";
const SUPPRESS_OPEN_NEXT = "recentSuppressOpenNext:v1"; // одноразовый флаг "не открывать на след. странице"
const MAX_ITEMS = 8;

// Вызывай из ProductPage (у тебя уже подключено)
export function pushRecentProduct(product) {
  if (typeof window === "undefined" || !product?.slug) return;
  try {
    const compact = { slug: product.slug, name: product.name, image: product.image, purpose: product.purpose };
    let items = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    items = Array.isArray(items) ? items : [];
    items = items.filter((i) => i.slug !== compact.slug);
    items.unshift(compact);
    if (items.length > MAX_ITEMS) items = items.slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // обновить другие вкладки/инстансы
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: JSON.stringify(items) }));
  } catch {}
}

export default function RecentViewed() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  // загрузка списка
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setItems(Array.isArray(saved) ? saved : []);
    } catch {}
  }, []);

  // логика открытия при смене страницы:
  // по умолчанию — ОТКРЫТЬ; но если стоит флажок SUPPRESS_OPEN_NEXT, то НЕ открывать и сразу снять флажок
  useEffect(() => {
    try {
      const suppress = localStorage.getItem(SUPPRESS_OPEN_NEXT);
      if (suppress) {
        setOpen(false);
        localStorage.removeItem(SUPPRESS_OPEN_NEXT); // одноразово
      } else {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, [pathname]);

  // слушаем обновления списка
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        try { setItems(JSON.parse(e.newValue || "[]") || []); } catch {}
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!items?.length) return null;

  // Переход из панели: ставим флажок "не открывать на след. странице"
  const handleItemClick = () => {
    try { localStorage.setItem(SUPPRESS_OPEN_NEXT, "1"); } catch {}
  };

  return (
    <aside className={`recent-viewed ${open ? "is-open" : "is-closed"}`} aria-label="Просмотренные товары">
      <button
        className="recent-viewed__toggle"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Скрыть просмотренные" : "Показать просмотренные"}
      >
        <span className="recent-viewed__toggle-icon">⟨</span>
      </button>

      <div className="recent-viewed__panel">
        <div className="recent-viewed__head">
          <span className="recent-viewed__title">Ваши просмотренные товары</span>
          <button className="recent-viewed__close" onClick={() => setOpen(false)} aria-label="Закрыть">×</button>
        </div>

        <ul className="recent-viewed__list">
          {items.map((i) => (
            <li key={i.slug} className="recent-viewed__item">
              <Link
                href={`/catalog/${i.slug}`}
                className="recent-viewed__link"
                onClick={handleItemClick}
              >
                <img src={i.image} alt={i.name} className="recent-viewed__img" />
                <span className="recent-viewed__name">{i.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
