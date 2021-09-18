import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container bd-container bd-grid">
        <div className="footer__content">
          <h3 className="footer__title">
            <a href="#Home" className="footer__logo">
              <img src="./assets/logo.png" alt="logo" />
            </a>
          </h3>
          <p className="footer__description">
            Tus compras del mercado desde casa
          </p>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Nosotros</h3>
          <ul>
            <li><a href="#Home" className="footer__link">Nuestra Misión</a></li>
            <li><a href="#Home" className="footer__link">Sobre Nosotros</a></li>
            <li><a href="#Home" className="footer__link">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Contacto</h3>
          <ul>
            <li><a href="#Home" className="footer__link">Av. Javier Prado Este 4600</a></li>
            <li><a href="#Home" className="footer__link">999999999</a></li>
            <li><a href="#Home" className="footer__link">fruti_express@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">Encuéntranos</h3>
          <a href="#Home" className="footer__social"><i className="bx bxl-facebook-circle"></i></a>
          <a href="#Home" className="footer__social"><i className="bx bxl-twitter"></i></a>
          <a href="#Home" className="footer__social"><i className="bx bxl-instagram-alt"></i></a>
        </div>
      </div>

      <p className="footer__copy">&#169; 2021 Ing. Soft. 2 - Derechos Reservados</p>
    </footer>
  )
}

export default Footer;