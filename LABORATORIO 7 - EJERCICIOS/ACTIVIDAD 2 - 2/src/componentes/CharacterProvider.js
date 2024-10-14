import React, { useState, createContext } from "react";

export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [character, setCharacter] = useState("Goku");

  const changeCharacter = (newCharacter) => {
    setCharacter(newCharacter);
  };

  return (
    <CharacterContext.Provider value={{ character, changeCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}
