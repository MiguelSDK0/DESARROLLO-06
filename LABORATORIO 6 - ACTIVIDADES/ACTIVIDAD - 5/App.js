import React, { useState, useEffect } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  // useEffect para ejecutar un efecto cuando cambia el contador
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);
  }, [contador]); // El efecto se ejecuta solo cuando cambia 'contador'

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </div>
  );
}

export default App;
