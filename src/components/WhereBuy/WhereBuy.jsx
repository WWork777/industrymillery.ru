"use client";

import Link from "next/link";
import "./WhereBuy.scss";

const BRANCHES = [
  {
    city: "Красноярск (головной офис)",
    address: "ул. 60 лет Октября, 150",
    phone: "+7 (391) 217-89-92",
    site: "https://atmosfera-24.ru/",
  },
  {
    city: "Новосибирск",
    address: "ул. Сухарная, 35, корп. 4",
    phone: "+7 (383) 373-49-23",
    site: "https://atmosfera-24.ru/",
  },
  {
    city: "Иркутск",
    address: "ул. Можайского, 6А",
    phone: "",
    site: "https://atmosfera-24.ru/",
  },
  {
    city: "Кемерово",
    address: "ул. 40 лет Октября, 2 к3 (оф. 19)",
    phone: "+7 (3842) 44-22-33",
    site: "https://atmosfera-24.ru/",
  },
  {
    city: "Канск",
    address: "ул. Парижской Коммуны, 62",
    phone: "+7 (983) 573-16-22",
    site: "https://atmosfera-24.ru/",
  },
  {
    city: "Томск",
    address: "",
    phone: "+7 (3822) 607-200",
    site: "https://atmosfera-24.ru/",
  },
   {
    city: "Омск",
    address: "ул. 10 лет Октября, 217, 2 этаж",
    phone: "",
    site: "https://atmosfera-24.ru/",
  },
];

export default function WhereBuy() {
  return (
    <section className="wherebuy" aria-labelledby="wherebuy-title">
      <div className="wherebuy__container">
        <h1 id="wherebuy-title" className="wherebuy__title">Где купить</h1>

        <div className="wherebuy__intro">
          <p>
            «Атмосфера чистоты» — официальный дистрибьютор профессиональных брендов
            (Diversey, Tork, Vileda Professional) и поставщик комплексных решений по
            чистоте и гигиене для бизнеса. Компания помогает подобрать химию, инвентарь и
            технику под задачи объекта, а также предоставляет сервис: обслуживание и ремонт
            посудомоечных/поломоечных машин, установка дозаторов и диспенсеров.
          </p>
          <p>
            Наша продукция доступна в филиалах компании по Сибири: Красноярск, Новосибирск,
            Иркутск, Кемерово, Канск, Томск, Омск.
          </p>
        </div>

        {/* Карта */}
        <div className="wherebuy__map">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3f967770e3b9fa30639e9615a2fffd831f38d9a8cb7ff669fb8f876caea737a2&amp;source=constructor" 
            width="500" 
            height="243">
          </iframe>
        </div>

        {/* Список филиалов */}
        <div className="wherebuy__grid" role="list">
          {BRANCHES.map((b, i) => (
            <article key={i} className="wherebuy__card" role="listitem">
              <h3 className="wherebuy__card-title">{b.city}</h3>
              {b.address && <p className="wherebuy__line">{b.address}</p>}
              {b.phone && (
                <p className="wherebuy__line">
                  <a href={`tel:${b.phone.replace(/[^\d+]/g, "")}`}>{b.phone}</a>
                </p>
              )}
              <p className="wherebuy__line">
                <Link href={b.site} target="_blank" rel="noopener noreferrer">
                  atmosfera-24.ru
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
