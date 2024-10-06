import React from 'react';
import './style3.css';


const productos = [
    {id: 1, nombre: 'Producto A', precio: 10},
    {id: 2, nombre: 'Producto B', precio: 20},
    {id: 3, nombre: 'Producto C', precio: 30}
];

export const Componente3 = () => { 
    return <div className='componente3'>
        <h1> COMPONENTE 3 </h1>
        <ul>
            {productos.map((i) => (
            <li key={i.id}>
                <p>Id: {i.id}</p>
                <p>Nombre: {i.nombre}</p>
                <p>Precio: {i.precio}</p>
            </li>
            ))}
        </ul>
    </div>; 
}; 
export default Componente3; 