import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>CHIROL STORE</h1>
        <p>Compra los productos más increíbles a los mejores precios.</p>
        <a href="#products" className="hero-button">¡Compra Ahora!</a>
      </div>
    </section>
  );
}

export default Hero;