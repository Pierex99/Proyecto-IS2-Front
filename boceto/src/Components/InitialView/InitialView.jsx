import React from 'react';
import './InitialView.css'

function InitialView() {

  return (
    <main className="l-main">
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__img">
            <img src="./assets/girl.png" alt="girl" />
          </div>
          <div className="home__data">
            <h1 className="home__title">¡Haz tus compras desde casa!</h1>
            <p className="home__description">Al precio del mercado de barrio</p>
            <a href="#home" className="button">Empezar</a>
          </div>
        </div>
      </section>
      <section className="buy bd-container section" id="buy">
        <div className="buy__container bd-grid">
          <div className="buy__data">
            <h2 className="section-title-center">Compra al mejor precio</h2>
            <p className="buy__description">¿Los precios de supermercados son muy altos? Ahora puedes comprar en el mercado de barrio desde la comodidad de tu casa.
            </p>
            <a className="button" href="#home">Probar</a>
          </div>
          <div className="buy__img">
            <img src="./assets/comprando.jpg" alt="pina" />
          </div>
        </div>
      </section>
      <section className="how section bd-container" id="how">
        <h2 className="section-title">¿Como Funciona?</h2>
        <div className="how__container bd-grid">
          <div className="how__data">
            <h3 id="how__first">1</h3>
            <p>Explora tus tiendas favoritas y agrega productos al carrito de compra</p>
          </div>
          <div className="how__data">
            <h3 id="how__second">2</h3>
            <p>Un shopper alista tu pedido con los mejores productos en la tienda de tu preferencia</p>
          </div>
          <div className="how__data">
            <h3 id="how__third">3</h3>
            <p>Tu pedido esta listo, y será enviado a tu casa, sin que salgas de casa</p>
          </div>
        </div>
      </section>
      <section className="coverage section bd-container" id="coverage">
        <h2 className="section-title">Nos encontramos en los siguientes distritos</h2>
        <div className="coverage__container bd-grid">
          <div className="coverage__content">
            <img className="coverage__img" src="./assets/tienda.png" alt="tienda-img" />
            <h3 className="coverage__title">Santiago de Surco</h3>
          </div>
          <div className="coverage__content">
            <img className="coverage__img" src="./assets/tienda.png" alt="tienda-img" />
            <h3 className="coverage__title">Lince</h3>
          </div>
          <div className="coverage__content">
            <img className="coverage__img" src="./assets/tienda.png" alt="tienda-img" />
            <h3 className="coverage__title">San Borja</h3>
          </div>
          <div className="coverage__content">
            <img className="coverage__img" src="./assets/tienda.png" alt="tienda-img" />
            <h3 className="coverage__title">San Miguel</h3>
          </div>
          <div className="coverage__content">
            <img className="coverage__img" src="./assets/tienda.png" alt="tienda-img" />
            <h3 className="coverage__title">Cercado de Lima</h3>
          </div>
          <div className="coverage__content">
            <img className="coverage__img" src="./assets/tienda.png" alt="tienda-img" />
            <h3 className="coverage__title">San Juan de Lurigancho</h3>
          </div> 
        </div>
      </section>
      <section className="join section" id="join">
        <div className="join__container bd-container bd-grid">
          <div className="join__content">
            <h2 className="section-title-center join__title">¿Quieres unir tu negocio?</h2>
            <p className="join__description">Se parte de los más de 1000 negocios afiliados y aumenta tus ventas de forma rápida y confiable</p>
            <a href="#Home" className="join__button">Únete</a>
          </div>
          <div className="join__img">
            <img src="./assets/unir.jpg" alt="unir"/>
          </div>
        </div>
      </section>
    </main>
  )
}
export default InitialView;