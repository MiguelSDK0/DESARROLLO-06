import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Cursos = () => {
  return (
    <div>
      <h2>Pagina de Cursos/Webinar</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <li><Link to="programacion">Cursos de Programacion</Link></li>
        <li><Link to="diseno">Cursos de Diseño</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Cursos;
