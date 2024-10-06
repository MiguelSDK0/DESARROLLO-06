//  Experiencia N°3
// c) estilo de componentes
// e) uso de eventos
import React, { useState } from 'react'
import './Comp3.css'

export const Comp3 = ({ title, description }) => {
  const [count, setCount] = useState(0)

  const click = () => {
    setCount(count + 1)
  }

  return (
    <div className="comp3-container">
      <h3 className="comp3-title">{title}</h3>
      <p className="comp3-description">{description}</p>
      
      <p>Contador: {count}</p>

      <button className="comp3-button" onClick={click}>
        Incrementar contador
      </button>
    </div>
  )
}


