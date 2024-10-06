import './App.css';
import Componente1Clase from './Componentes/ComponenteClase';
import ComponenteUsestate from './Componentes/ComponenteUsestate';

function App() {
  return (
    <div className="App">
      <h2>Componente Clase</h2>
      <Componente1Clase/>
      <h2>Componente Usestate</h2>
      <ComponenteUsestate/>
    </div>
  );
}

export default App;
