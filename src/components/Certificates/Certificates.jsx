"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import "./Certificates.scss"

const CERTS = [
  { src: "/images/Products/1.jpg", alt: "Сертификат №1" },
  { src: "/img/certificates/cert-2.jpg", alt: "Сертификат №2" },
  { src: "/img/certificates/cert-3.jpg", alt: "Сертификат №3" },
  { src: "/img/certificates/cert-4.jpg", alt: "Сертификат №4" },
];

export default function Certificates() {
  const [active, setActive] = useState(null); // {src, alt} | null

  const close = useCallback(() => setActive(null), []);
  const onKey = useCallback(
    (e) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (!active) return;
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, onKey]);

  return (
    <section className="certs" aria-labelledby="certs-title">
      <div className="certs__container">
        <h1 className="certs__title" id="certs-title">Сертификаты</h1>

        <div className="certs__grid">
          {CERTS.map((c, i) => (
            <button
              key={i}
              type="button"
              className="certs__card"
              onClick={() => setActive(c)}
              aria-label={`Открыть ${c.alt}`}
            >
              <span className="certs__thumb">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i < 2}
                />
              </span>
              <span className="certs__caption">{c.alt}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popup */}
      {active && (
        <div
          className="certs__overlay"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <figure
            className="certs__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              priority
            />
            <figcaption className="visually-hidden">{active.alt}</figcaption>
            <button
              type="button"
              className="certs__close"
              aria-label="Закрыть"
              onClick={close}
            />
          </figure>
        </div>
      )}
    </section>
  );
}
