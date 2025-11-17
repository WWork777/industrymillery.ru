import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <a href="/catalog"><h4 className="footer__title">Каталог</h4></a>
          
          <ul className="footer__list">
            <li><a href="/catalog?purpose=для+дома">Для дома</a></li>
            <li><a href="/catalog?purpose=для+стирки">Для стирки</a></li>
            <li><a href="/catalog?purpose=для+себя">Для себя</a></li>
            <li><a href="/catalog?purpose=эко">Эко</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">О компании</h4>
          <ul className="footer__list">
            <li><a href="/stm-catalog">Каталог СТМ</a></li>
            <li><a href="/certificates">Сертификаты и лицензии</a></li>
            <li><a href="/wherebuy">Где купить</a></li>
            <li><a href="/contracts">Контракты СТМ</a></li>
          </ul>
        </div>

        {/* <div className="footer__column">
          <h4 className="footer__title">Помощь</h4>
          <ul className="footer__list">
            <li><a href="#">Карта сайта</a></li>
            <li><a href="#">Официальная информация</a></li>
            <li><a href="#">Вакансии</a></li>
          </ul>
        </div> */}

        <div className="footer__column">
          <h4 className="footer__title">Контакты</h4>
          <ul className="footer__list">
            <li><a href="tel:+79236165991">+7 (923) 616-59-91</a></li>
            <li><a href="tel:+7(3842)441-515">8 (3842) 441-515</a></li>
            <li><a href="mailto:pkf.millery@yandex.ru">pkf.millery@yandex.ru</a></li>
            <li><a href="https://t.me/industrymillery">t.me/industrymillery</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
