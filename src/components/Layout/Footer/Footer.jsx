import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h4 className="footer__title">Каталог</h4>
          <ul className="footer__list">
            <li><a href="#">Для мытья посуды</a></li>
            <li><a href="#">Для рук</a></li>
            <li><a href="#">Гели для душа</a></li>
            <li><a href="#">Для уборки</a></li>
            <li><a href="#">Для стирки</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">О компании</h4>
          <ul className="footer__list">
            <li><a href="#">Сертификаты и лицензии</a></li>
            <li><a href="#">Где купить</a></li>
            <li><a href="#">Экоинициатива</a></li>
            <li><a href="#">Контракты СТМ</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Помощь</h4>
          <ul className="footer__list">
            <li><a href="#">Карта сайта</a></li>
            <li><a href="#">Официальная информация</a></li>
            <li><a href="#">Вакансии</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Контакты</h4>
          <ul className="footer__list">
            <li><a href="tel:+70000000000">+7 000 000 0000</a></li>
            <li><a href="mailto:lalala@mail.ru">lalala@mail.ru</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
