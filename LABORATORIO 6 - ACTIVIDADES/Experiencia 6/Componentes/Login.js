import React from 'react';

const Login = ({ login }) => {
  return (
    <div>
      <h2>Inicia sesion para acceder a las rutas privadas</h2>
      <button onClick={login}>Iniciar sesion</button>
    </div>
  );
};

export default Login;
