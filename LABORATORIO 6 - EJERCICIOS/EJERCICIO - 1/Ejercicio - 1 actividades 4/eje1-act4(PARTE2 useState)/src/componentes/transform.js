import React, { useState } from 'react';
import './transform.css';

function Transform() {
  const [nivel, setNivel] = useState(0);
  const niveles = ["Base", "Super Saiyan", "Super Saiyan 2", "Super Saiyan 3"];

  const transformar = () => {
    setNivel((prevNivel) => (prevNivel + 1) % niveles.length);
  };

  return (
    <div className={`transformacion nivel-${nivel}`}>
      <div className="transform-badge">
        <p>Transformación Actual: {niveles[nivel]}</p>
      </div>
      <button onClick={transformar} className="btn-transform">Transformar</button>
    </div>
  );
}

export default Transform;
