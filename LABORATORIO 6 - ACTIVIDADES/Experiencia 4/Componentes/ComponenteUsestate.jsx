import React, { useState } from 'react';

const ComponenteUsestate = () => {
  const [num, setNum] = useState(0);

  const aumentarNum = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <h1>Numero: {num}</h1>
      <button onClick={aumentarNum}>presionar</button>
    </div>
  );
};

export default ComponenteUsestate;
