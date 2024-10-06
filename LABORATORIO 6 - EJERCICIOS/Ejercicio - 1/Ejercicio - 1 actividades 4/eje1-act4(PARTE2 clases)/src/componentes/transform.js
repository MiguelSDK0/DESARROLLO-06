import React, { Component } from 'react';
import './transform.css';

class transform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nivel: 0,
      niveles: ["Base", "Super Saiyan", "Super Saiyan 2", "Super Saiyan 3"]
    };
  }

  transformar = () => {
    this.setState((prevState) => ({
      nivel: (prevState.nivel + 1) % prevState.niveles.length
    }));
  };

  render() {
    const { nivel, niveles } = this.state;
    return (
      <div className={`transformacion nivel-${nivel}`}>
        <div className="transform-badge">
          <p>Transformación Actual: {niveles[nivel]}</p>
        </div>
        <div className="transform-buttons">
          <button onClick={this.transformar} className="btn-transform">
            Transformar
          </button>
        </div>
      </div>
    );
  }
}

export default transform;
