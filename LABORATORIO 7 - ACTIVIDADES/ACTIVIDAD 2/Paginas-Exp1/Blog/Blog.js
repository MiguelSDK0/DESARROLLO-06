import './EstiloBlog.css';
import { Outlet,  Link } from 'react-router-dom';

export const Blog = () => {
    return (
      <div class = 'Blog'>
          <h1>Blogs actualizados</h1>
          <h4>Actualizamos todos los meses.</h4>
          <ul>
            <li>
              <Link to="Civil">Civil</Link>
            </li>
            <li>
              <Link to="Penal">Penal</Link>
            </li>
            <li>
              <Link to="Laboral">Laboral</Link>
            </li>
            <li>
              <Link to="Procesal">Procesal</Link>
            </li>
          </ul>
        <Outlet />
      </div>
    );
  };
   
  