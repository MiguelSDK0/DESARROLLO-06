import React, { useState, useEffect } from 'react';

const ComponenteUsseffect = () => {
  const [num, setNum] = useState(0);
  const [mensaje, setMensaje] = useState('');
  useEffect(() => {
    if (num === 6) {
      setMensaje('El numero llego a 6');
    } else {
      setMensaje('Se aumento un numero');
    }
  }, [num]);
  const aumentarNum = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <h1>Numero: {num}</h1>
      <button onClick={aumentarNum}>Presionar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default ComponenteUsseffect;
