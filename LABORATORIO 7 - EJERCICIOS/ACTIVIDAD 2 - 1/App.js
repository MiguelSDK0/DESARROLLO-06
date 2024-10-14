import './App.css';
import logo from './logo.svg'; // Mantener el logo
import Component1 from './Componentes/Component1';
import { UserProvider } from './contexto/Contexto';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Card">
            <Component1 />
          </div>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
