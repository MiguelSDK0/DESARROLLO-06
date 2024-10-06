//  Experiencia N°3
//b props)
import React from 'react'

export const Comp3 = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Descripcion del prop: {description}</p>
    </div>
  )
}