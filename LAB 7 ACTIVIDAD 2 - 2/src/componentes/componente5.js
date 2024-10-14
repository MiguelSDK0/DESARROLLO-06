import React, { useContext } from "react";
import { CharacterContext } from "./CharacterProvider";

function Componente5() {
  const { character } = useContext(CharacterContext);
  return (
    <>
      <h2>¡El combate continúa!</h2>
      <footer>{`¡El personaje sigue siendo ${character}!`}</footer>
    </>
  );
}

export default Componente5;
