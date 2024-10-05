import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>CHIROL STORE</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;