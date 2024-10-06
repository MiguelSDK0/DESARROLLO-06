import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Servicios de Creacion de Paginas Web</h1>
        <p>Desarrollamos soluciones web adaptadas a tus necesidades, asegurando calidad y funcionalidad.</p>
      </header>

      <section className="servicios">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Diseño de sitios web personalizados</li>
          <li>Desarrollo de tiendas en línea</li>
          <li>Optimización SEO para motores de búsqueda</li>
          <li>Integración con plataformas CMS como WordPress</li>
          <li>Mantenimiento y actualización de sitios web</li>
        </ul>
      </section>

      <section className="testimonios">
        <h2>Testimonios de Clientes</h2>
        <blockquote>
          “Gracias al equipo, mi tienda online creció exponencialmente. El diseño es increíble y funcional.” María G.
        </blockquote>
        <blockquote>
          “El sitio que me crearon ha aumentado la visibilidad de mi negocio en internet. ¡100% recomendados!” Pedro R.
        </blockquote>
      </section>

      <section className="contactanos">
        <h2>Contáctanos</h2>
        <p>¿Listo para llevar tu presencia en línea al siguiente nivel? Escríbenos y hablemos sobre tu proyecto.</p>
        <p>Email: contacto@serviciosweb.com | Teléfono: +123 456 789</p>
      </section>

      <footer>
        <p>2024 Servicios Web.</p>
      </footer>
    </div>
  );
}

export default App;
