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
              <Link href="/">
                <div className="header_logo">
                    
                        <img src="/images/logo.png" alt="Логотип" />
                        
                   
                    <p>MILLERY</p>
                </div>
                </Link>
              
            </li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/wherebuy">Где купить</Link></li>
            <li><Link href="/certificates">Сертификаты</Link></li>
            <li><Link href="/contracts">Контракты СТМ</Link></li>
            {/* <li><Link href="/about">О нас</Link></li> */}
            <li>
                <div className="header_contacts">
                    <a href="tel:+79236165991">+7 (923) 616-59-91</a>
                    <a href="tel:+7(3842)441-515">8 (3842) 441-515</a>
                    <a href="mailto:pkf.millery@yandex.ru">pkf.millery@yandex.ru</a>
                    
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
          <li>
            <Link href="/">
                <div className="header_logo">
                    
                        <img src="/images/logo.png" alt="Логотип" />
                        
                   
                    <p>MILLERY</p>
                </div>
                </Link>
          </li>
          <li><Link href="/" onClick={closeMenu}>Главная</Link></li>
          <li><Link href="/catalog" onClick={closeMenu}>Каталог</Link></li>
          <li><Link href="/wherebuy" onClick={closeMenu}>Где купить</Link></li>
          <li><Link href="/certificates" onClick={closeMenu}>Сертификаты</Link></li>
          <li><Link href="/contracts" onClick={closeMenu}>Контракты СТМ</Link></li>
          {/* <li><Link href="/about" onClick={closeMenu}>О нас</Link></li> */}
          <li><a className="mobile_phone" href="tel:+79236165991">+7 (923) 616-59-91</a></li>
          <li><a className="mobile_phone" href="tel:+7(3842)441-515">8 (3842) 441-515</a></li>
          <li><a className="mobile_phone" href="mailto:pkf.millery@yandex.ru">pkf.millery@yandex.ru</a></li>
        </ul>

        
        
        
      </div>
    </header>
  );
}
