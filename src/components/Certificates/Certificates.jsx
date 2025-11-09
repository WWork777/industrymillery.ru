"use client";

import "./Certificates.scss";

import CERTS from "../../data/Certificates.json"

export default function Certificates() {
  return (
    <section className="certs" aria-labelledby="certs-title">
      <div className="certs__container">
        <h1 className="certs__title" id="certs-title">Сертификаты</h1>

        <div className="certs__grid">
          {CERTS.map((cert) => (
            <div className="certs__item" key={cert.id}>
              <a download href={cert.link} className="certs__icon" target="_blank" rel="noopener noreferrer">
                <img src={cert.icon} alt={cert.name} />
              </a>
              <span className="certs__name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
