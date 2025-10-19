"use client";
import "./Category.scss"; // Импортируем отдельный файл стилей

export default function Category() {
  const categories = [
    { title: "ДЛЯ ДОМА", image: "/images/Category/forHome.jpg", gradientClass: "gradient-home", link: "уборка" },
    { title: "ДЛЯ СТИРКИ", image: "/images/Category/forStirka.png", gradientClass: "gradient-Stirka", link: "уборка"  },
    { title: "ДЛЯ СЕБЯ", image: "/images/Category/forYourself.jpg", gradientClass: "gradient-self", link: "уборка" },
    { title: "ЭКО", image: "/images/Category/Eco.jpg", gradientClass: "gradient-eco", link: "уборка" },
  ];

  return (
    <section className="categories">
      <h2 className="cat-title">Категории</h2>
      
      <div className="categories__grid">
        {categories.map((cat, i) => (
          <article className={`category-card ${cat.gradientClass}`} key={i}>
            <img className="category-card__img" src={cat.image} alt={cat.title} />
            <div className="category-card__info--top">
              <span className="category-card__title">{cat.title}</span>
              <a href={`/catalog?purpose=${encodeURIComponent(cat.link)}`} className="category-card__link">
                Перейти
                <img className="category-card__icon" src="/images/Category/togo.svg" alt="Перейти" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
