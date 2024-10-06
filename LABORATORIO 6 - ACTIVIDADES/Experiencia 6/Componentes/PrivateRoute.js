import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth, element: Component }) => {
  return isAuth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
