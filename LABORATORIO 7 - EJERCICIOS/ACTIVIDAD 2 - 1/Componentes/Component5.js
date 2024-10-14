import React, { useContext } from 'react';
import { UserContext } from '../contexto/Contexto'; // Importar el contexto

function Component5({ user: propDrilling }) { // Recibe por props
  const { user: contexto } = useContext(UserContext); // Usar el contexto

  return (
    <div>
      <h2>Component 5</h2>
      {/* Mostrar el valor recibido por Props Drilling */}
      <p>{propDrilling ? `Prop Drilling: Hola de nuevo, ${propDrilling}!` : 'Prop Drilling: Aun no se ha ingresado un nombre...'}</p>
      {/* Mostrar el valor recibido por React Context */}
      <p>{contexto ? `React Context: Hola de nuevo, ${contexto}!` : 'React Context: Aun no se ha ingresado un nombre...'}</p>
    </div>
  );
}

export default Component5;