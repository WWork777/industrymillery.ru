"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__container">
        {/* Логотип */}
        

        {/* Навигация */}
        <nav className="header_nav">
          <ul>
            <li>
                <div className="header_logo">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Логотип" />
                    </Link>
                </div>
            </li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/wherebuy">Где купить</Link></li>
            <li><Link href="/certificates">Сертификаты</Link></li>
            <li><Link href="/contracts">Контракты СТМ</Link></li>
            {/* <li><Link href="/about">О нас</Link></li> */}
            <li>
                <div className="header_contacts">
                    <a href="tel:+70000000000">+7 000 000 0000</a>
                </div>
            </li>
          </ul>
        </nav>

        {/* Контакты */}
        

        {/* Бургер */}
        <div
          className={`burger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile_menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link href="/" onClick={closeMenu}>Главная</Link></li>
          <li><Link href="/catalog" onClick={closeMenu}>Каталог</Link></li>
          <li><Link href="/wherebuy" onClick={closeMenu}>Где купить</Link></li>
          <li><Link href="/certificates" onClick={closeMenu}>Сертификаты</Link></li>
          <li><Link href="/contracts" onClick={closeMenu}>Контракты СТМ</Link></li>
          {/* <li><Link href="/about" onClick={closeMenu}>О нас</Link></li> */}
        </ul>
        <a className="mobile_phone" href="tel:+70000000000">+7 000 000 0000</a>
      </div>
    </header>
  );
}
