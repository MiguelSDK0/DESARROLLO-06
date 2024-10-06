import React, { useState } from 'react';

function Home() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Home;
