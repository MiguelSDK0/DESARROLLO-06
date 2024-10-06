//  Experiencia N°3
// c) estilo de componentes
// b) Anidando rutas
import React from 'react';
import './Comp1.css';
import { Link, Outlet } from 'react-router-dom';

export const Comp1 = () => {
  return (
    <div className="comp1-container">
      <h1 className="comp1-title">Primer componente</h1>
      <p className="comp1-text">Texto del primer componente</p>

      <nav>
        <h3>Subrutas de Componente 2:</h3>
        <ul>
          <li><Link to="subruta1">Subruta 1</Link></li>
          <li><Link to="subruta2">Subruta 2</Link></li>
        </ul>
      </nav>

      {/* Outlet es donde se renderizan las subrutas */}
      <Outlet />
    </div>
  );
};
