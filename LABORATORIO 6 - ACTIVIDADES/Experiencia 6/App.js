import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Normativa from './Componentes/Normativa';
import Simulador from './Componentes/Simulador';
import Blog from './Componentes/Blog';
import Cursos from './Componentes/Cursos';
import CursosProgramacion from './Componentes/CursosProgramacion';
import CursosDiseno from './Componentes/CursosDiseno';
import Contactanos from './Componentes/Contactanos';
import Nosotros from './Componentes/Nosotros';
import Concursos from './Componentes/Concursos';
import Login from './Componentes/Login';
import PrivateRoute from './Componentes/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    setIsAuthenticated(true);
  };
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/normativa">Normativa</Link></li>
            <li><Link to="/simulador">Simulador</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/cursos">Cursos/Webinar</Link></li>
            <li><Link to="/contactanos">Contactanos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/concursos">Concursos</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/normativa" element={<Normativa />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/blog" element={<PrivateRoute isAuth={isAuthenticated} element={Blog} />} />
          <Route path="/concursos" element={<PrivateRoute isAuth={isAuthenticated} element={Concursos} />} />
          <Route path="/cursos" element={<Cursos />}>
            <Route path="programacion" element={<CursosProgramacion />} />
            <Route path="diseno" element={<CursosDiseno />} />
          </Route>
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
