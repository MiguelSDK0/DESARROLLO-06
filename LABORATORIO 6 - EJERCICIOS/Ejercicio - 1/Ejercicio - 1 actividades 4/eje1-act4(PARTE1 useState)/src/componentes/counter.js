import React, { useState } from 'react';
import './counter.css'; 

function Counter() {
  const [ki, setKi] = useState(0);
  const aumentarKi = () => {
    setKi(ki + 500); 
  };

  const disminuirKi = () => {
    if (ki > 0) setKi(ki - 500); 
  };

  return (
    <div className={`counter ${ki > 9000 ? 'over9000' : ''}`}>
      <div className="counter-badge">
        <span>{ki}</span>
        <p>{ki > 9000 ? "¡Está por encima de 9000!" : "Ki actual"}</p>
      </div>
      <div className="counter-buttons">
        <button onClick={aumentarKi} className="btn-ki-up">Aumentar Ki</button>
        <button onClick={disminuirKi} className="btn-ki-down">Disminuir Ki</button>
      </div>
    </div>
  );
}

export default Counter;
