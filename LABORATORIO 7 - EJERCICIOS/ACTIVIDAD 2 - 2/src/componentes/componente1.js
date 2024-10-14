import React, { useContext } from "react";
import { CharacterContext } from "./CharacterProvider";
import Componente2 from "./componente2";

function Componente1() {
  const { character, changeCharacter } = useContext(CharacterContext);

  return (
    <div className="container">
      <h1 className="character-name">{`Personaje actual: ${character}`}</h1>
      <button onClick={() => changeCharacter("Vegeta")}>Cambiar a Vegeta</button>
      <button onClick={() => changeCharacter("Gohan")}>Cambiar a Gohan</button>
      <button onClick={() => changeCharacter("Goku")}>Cambiar a Goku</button>
      <Componente2 />
    </div>
  );
}

export default Componente1;
