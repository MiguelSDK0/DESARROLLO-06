import { Link, Outlet } from 'react-router-dom';
import './Pets.css';

const Pets = () => {
  return (
    <div className="pets-container">
      <h1>Nuestras Mascotas</h1>
      <ul className="pet-list">
        <li><Link to="1">Perro - Max</Link></li>
        <li><Link to="2">Gato - Luna</Link></li>
        <li><Link to="3">Conejo - Snowball</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Pets;
