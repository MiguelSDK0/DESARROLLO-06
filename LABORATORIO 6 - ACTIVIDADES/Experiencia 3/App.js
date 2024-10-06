import React, { useState } from 'react';
import './App.css';
import { Componente1 } from './Componentes/Componente1/Componente1';
import { Componente2 } from './Componentes/Componente2/Componente2';
import { Componente3 } from './Componentes/Componente3/Componente3';

function App() {
  const [componenteActual, setComponenteActual] = useState(null);

  const mostrarComponente1 = () => {
    setComponenteActual(<Componente1 PROP1='---- PROD 1 del Componente1 ----' />);
  };

  const mostrarComponente2 = () => {
    setComponenteActual(<Componente2 PROP2='---- PROD 2 del Componente2 ----' />);
  };

  const mostrarComponente3 = () => {
    setComponenteActual(<Componente3 />);
  };

  return (
    <div>
      <button onClick={mostrarComponente1}>Mostrar Componente 1</button>
      <button onClick={mostrarComponente2}>Mostrar Componente 2</button>
      <button onClick={mostrarComponente3}>Mostrar Componente 3</button>

      <div className="componente-mostrado">
        {componenteActual}
      </div>
    </div>
  );
}

export default App;
