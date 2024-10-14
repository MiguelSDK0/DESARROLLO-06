import './EstiloCabecera.css';
import { Outlet,  Link } from 'react-router-dom';

export const Cabecera = () => {
  return (
    <div className="Cabe">
        <div class = "CabeceraLogo">
          <Link to="/">STemis</Link>
        </div>

        <ul>
          <li>
            <Link to="/Normativa">Normativa</Link>
          </li>
          <li>
            <Link to="/Simulador">Simulador</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/Contactanos">Contactanos</Link>
          </li>
        </ul>
      <Outlet />
    </div>
  );
};
 
