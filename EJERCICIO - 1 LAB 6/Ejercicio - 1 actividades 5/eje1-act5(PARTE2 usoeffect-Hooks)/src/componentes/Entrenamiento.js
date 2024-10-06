import React, { useState, useEffect } from 'react';
import './Entrenamiento.css';
function Entrenamiento() {
  const [nivelPoder, setNivelPoder] = useState(0);
  const [entrenando, setEntrenando] = useState(false);

  useEffect(() => {
    let interval;
    if (entrenando) {
      interval = setInterval(() => {
        setNivelPoder((prevNivel) => prevNivel + 100);
      }, 1000); // Aumenta el poder cada segundo
    }

    return () => clearInterval(interval);
  }, [entrenando]);

  const toggleEntrenamiento = () => {
    setEntrenando((prevEntrenando) => !prevEntrenando);
  };

  return (
    <div className="entrenamiento">
      <h1>Entrenamiento de Goku</h1>
      <p>Nivel de Poder Actual: {nivelPoder}</p>
      <button onClick={toggleEntrenamiento} className="btn-entrenar">
        {entrenando ? 'Detener Entrenamiento' : 'Comenzar Entrenamiento'}
      </button>
    </div>
  );
}

export default Entrenamiento;
