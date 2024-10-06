//  Experiencia N°6
import React from 'react';
import { Navigate } from 'react-router-dom';

const autenticacion = true;

const PrivateRoute = ({ element }) => {
  return autenticacion ? element : <Navigate to="/" />;
};

export default PrivateRoute;
