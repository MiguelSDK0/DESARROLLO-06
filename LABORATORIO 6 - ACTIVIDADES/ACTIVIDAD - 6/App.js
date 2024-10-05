import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simula si el usuario está autenticado

function Home() {
  return <h2>Inicio</h2>;
}

function About() {
  return <h2>Sobre Nosotros</h2>;
}

function Contact() {
  return <h2>Contacto</h2>;
}

// Componente que simula una página protegida
function Dashboard() {
  return <h2>Panel de Usuario (Protegido)</h2>;
}

// Ruta privada que redirige si no está autenticado
function PrivateRoute({ element }) {
  return isAuthenticated ? element : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/dashboard">Panel de Usuario</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
