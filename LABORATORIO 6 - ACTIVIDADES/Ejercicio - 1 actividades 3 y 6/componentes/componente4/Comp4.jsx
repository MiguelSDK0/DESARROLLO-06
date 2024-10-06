//  Experiencia N°3
// c) estilo de componentes
// d) iteracion
import React from 'react'
import './Comp4.css'

export const Comp4 = ({ items }) => {
  return (
    <div className="comp4-container">
      <h3>Lista de frutas</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="comp4-list-item">
            {item.name} - Color: {item.color}
          </li>
        ))}
      </ul>
    </div>
  )
}
