import './EstiloCursos.css';
import { Link, Outlet } from "react-router-dom";
import { cursos } from './ListaCursos';

export const Cursos = () => { 
  return (
    <div className = 'Curs'>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            <Link to={`/cursos/${curso.id}`}>{curso.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
