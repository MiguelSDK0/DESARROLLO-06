import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content text="Este es el contenido pasado desde el componente App como prop" />
    </div>
  );
}

export default App;
