import React, { useState, useEffect } from 'react';
import ScrollHeader from '../../Helpers/Scroll';
import "./Header.css";

function Header() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll',ScrollHeader);
    return () => {

      window.removeEventListener('scroll',ScrollHeader);
    }
  }, []);

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#home" className="nav__logo">
          <img src="./assets/logo.png" alt="logo" />
        </a>
        <div className={open?"nav__menu show-menu":"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={()=>setOpen(false)}>Inicio</a>
            </li>
            <li className="nav__item">
              <a href="#buy" className="nav__link" onClick={()=>setOpen(false)}>Comprar</a>
            </li>
            <li className="nav__item">
              <a href="#how" className="nav__link" onClick={()=>setOpen(false)}>Como Funciona?</a>
            </li>
            <li className="nav__item">
              <a href="#join" className="nav__link" onClick={()=>setOpen(false)}>Únete</a>
            </li>
            <li className="nav__item auth__container">
              <a href="#Home" className="auth" id="register">Registro</a>
              <a href="#Home" className="auth" id="login" >Entrar</a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={()=>setOpen(!open)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
