//  Experiencia N°3
// c) estilo de componentes
import React from 'react'
import './Comp2.css'

export const Comp2 = () => {
  return (
    <div className="comp2-container">
      <h2 className="comp2-title">Segundo Componente</h2>
      <ul>
        <li className="comp2-list-item">Dato 1</li>
        <li className="comp2-list-item">Dato 2</li>
        <li className="comp2-list-item">Dato 3</li>
      </ul>
    </div>
  )
}