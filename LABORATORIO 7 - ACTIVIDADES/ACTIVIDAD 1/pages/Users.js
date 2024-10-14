import { Link, Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        <li><Link to="1">Usuario 1</Link></li>  {/* Enlace dinámico para el usuario 1 */}
        <li><Link to="2">Usuario 2</Link></li>  {/* Enlace dinámico para el usuario 2 */}
        <li><Link to="3">Usuario 3</Link></li>  {/* Enlace dinámico para el usuario 3 */}
      </ul>
      {/* El componente Outlet se utiliza para renderizar la ruta anidada */}
      <Outlet />
    </div>
  );
};

export default Users;
