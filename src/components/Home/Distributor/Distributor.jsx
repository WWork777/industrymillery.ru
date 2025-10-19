"use client";
import "./Distributor.scss";

export default function Distributor() {
  return (
    <div className="distributor">
      <div className="distributor-content">
        <div className="distributor-logo">
          <img src="/images/Why/atmosphera.png" alt="Логотип" />
        </div>
        <div className="distributor-info">
          <span className="distributor-text">
            Наш официальный <a href="#" className="distributor-link">дистрибьютер</a>
          </span>

          <div className="distributor-cities">
            <div className="city"><i className="icon-location"></i> Красноярск</div>
            <div className="city"><i className="icon-location"></i> Иркутск</div>
            <div className="city"><i className="icon-location"></i> Кемерово</div>
            <div className="city"><i className="icon-location"></i> Томск</div>
            <div className="city"><i className="icon-location"></i> Новосибирск</div>
            <div className="city"><i className="icon-location"></i> Омск</div>
          </div>
        </div>

      </div>
    </div>
  );
}
