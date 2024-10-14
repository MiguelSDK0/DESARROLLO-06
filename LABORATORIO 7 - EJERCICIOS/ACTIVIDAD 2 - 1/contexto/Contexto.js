import { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto
export function UserProvider({ children }) {
  const [user, setUser] = useState(''); // El estado del usuario

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Proveer ambos valores */}
      {children}
    </UserContext.Provider>
  );
}