import React from "react";
import { CharacterProvider } from "./componentes/CharacterProvider"; // Importa CharacterProvider
import Componente1 from "./componentes/componente1"; // Importa componente1
import './App.css';

function App() {
  return (
    <CharacterProvider>
      <Componente1 />
    </CharacterProvider>
  );
}

export default App;
