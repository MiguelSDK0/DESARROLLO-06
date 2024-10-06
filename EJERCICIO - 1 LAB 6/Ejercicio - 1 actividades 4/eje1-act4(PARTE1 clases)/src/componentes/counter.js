import React, { Component } from 'react';
import './counter.css';  

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ki: 0
        };
    }

    aumentarKi = () => {
        this.setState((prevState) => ({
            ki: prevState.ki + 500 
        }));
    };

    disminuirKi = () => {
        this.setState((prevState) => ({
            ki: prevState.ki > 0 ? prevState.ki - 500 : 0 
        }));
    };

    render() {
        const { ki } = this.state;
        return (
            <div className={`counter ${ki > 9000 ? 'over9000' : ''}`}>
                <div className="counter-badge">
                    <span>{ki}</span>
                    <p>{ki > 9000 ? "¡Está por encima de 9000!" : "Ki actual"}</p>
                </div>
                <div className="counter-buttons">
                    <button onClick={this.aumentarKi} className="btn-ki-up">Aumentar Ki</button>
                    <button onClick={this.disminuirKi} className="btn-ki-down">Disminuir Ki</button>
                </div>
            </div>
        );
    }
}

export default Counter;
