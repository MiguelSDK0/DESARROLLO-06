import logo from './logo.svg';
import './App.css';
import { Comp1 } from './componentes/componente1/Comp1';
import { Comp2 } from './componentes/componente2/Comp2';
import { Comp3 } from './componentes/componente3/Comp3';
import { Comp4 } from './componentes/componente4/Comp4';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PrivateRoute from './componentes/PrivateRoute';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la Home!</h1>
    </div>
  );
}

function App() {
  const frutas = [
    { name: 'Manzana', color: 'Rojo' },
    { name: 'Banana', color: 'Amarillo' },
    { name: 'Pera', color: 'Verde' }
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/comp1">Componente 1</Link></li>
              <li><Link to="/comp2">Componente 2</Link></li>
              <li><Link to="/comp3">Componente 3</Link></li>
              <li><Link to="/comp4">Componente 4 (Privado)</Link></li> {/* Enlace a una ruta privada */}
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Anidamiento de rutas */}
            <Route path="/comp1" element={<Comp1 />}>
              {/* Subrutas anidadas en Comp1 */}
              <Route path="subruta1" element={<h3>Contenido de Subruta 1</h3>} />
              <Route path="subruta2" element={<h3>Contenido de Subruta 2</h3>} />
            </Route>

            <Route path="/comp2" element={<Comp2 />} />
            <Route path="/comp3" element={<Comp3 title="Componente 3" description="---Contador infinito---" />} />

            {/* Ruta privada para Comp4 */}
            <Route path="/comp4" element={<PrivateRoute element={<Comp4 items={frutas} />} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;