import React from 'react';
import './Products.css';

function Products() {
  const products = [
    { id: 1, name: 'Computadora de escritorio', price: 'S/.1200.00', image: 'https://stcomputacion.com/wp-content/uploads/2016/08/pc-de-escritorio-completa-con-led-de-19-pulgadas.jpg' },
    { id: 2, name: 'Computadora gamer', price: 'S/.3999.00', image: 'https://http2.mlstatic.com/D_NQ_NP_670967-MLB45044627723_032021-O.webp' },
    { id: 3, name: 'Computadora All in One', price: 'S/.2500.00', image: 'https://th.bing.com/th/id/OIP.J8FY3HxJv0SCdVXe5VwnDQHaHa?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Macbook', price: 'S/.6500.00', image: 'https://cf.shopee.vn/file/ec244e2d318976e34f087acebdd18984' },
  ];

  return (
    <section id="products" className="products">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-button">Comprar</button>
          </div>
        ))}
      </div>
    </section>
    
  );
}

export default Products;