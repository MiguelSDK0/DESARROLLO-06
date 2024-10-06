//  Experiencia N°3
//b props)
import React from 'react'

export const Comp4 = ({ items }) => {
  return (
    <div>
      <h3>Componente 4</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Lista de compras: {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
