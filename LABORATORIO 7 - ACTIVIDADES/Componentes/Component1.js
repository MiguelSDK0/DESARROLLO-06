import React, { useContext } from 'react';
import Component2 from './Component2';
import { UserContext } from '../contexto/Contexto';

function Component1() {
  const { user, setUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <h1>{user ? `Hola ${user}!` : 'Por favor ingrese su nombre'}</h1>
      
      <input 
        type="text" 
        placeholder="Ingrese su nombre" 
        value={user} 
        onChange={handleInputChange} 
      />
      
      <Component2 user={user} /> {/* Pasar user por props */}
    </div>
  );
}

export default Component1;