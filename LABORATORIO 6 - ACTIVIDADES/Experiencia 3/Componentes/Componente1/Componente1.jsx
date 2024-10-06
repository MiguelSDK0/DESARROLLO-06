import React from 'react';
import './style1.css';

export const Componente1 = ({PROP1}) => { 
    return <div className='componente1'>
        <h1> COMPONENTE 1 </h1>
        <h2> {PROP1} </h2>
    </div>; 
}; 
export default Componente1; 