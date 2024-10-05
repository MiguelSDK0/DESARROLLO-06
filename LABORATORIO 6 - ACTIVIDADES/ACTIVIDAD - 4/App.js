import React, { useState } from 'react';

function App() {
  // Inicializamos el estado con useState
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default App;
