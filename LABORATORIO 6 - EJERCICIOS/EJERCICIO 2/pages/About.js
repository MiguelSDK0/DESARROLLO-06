import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <Link to="services">Nuestros Servicios</Link>
      <Outlet />
    </div>
  );
}

export default About;
