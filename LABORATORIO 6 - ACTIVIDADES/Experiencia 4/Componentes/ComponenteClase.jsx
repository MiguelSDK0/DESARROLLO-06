import React, { Component } from 'react';

class Componente1Clase extends Component {
    constructor(props) {
        super(props);
        this.state = {
        num: 0,
        };
        this.aumentarNum = this.aumentarNum.bind(this);
    }
    aumentarNum() {
        this.setState((i) => ({
            num: i.num + 1,
        }));
    }
    render() {
        return (
        <div>
            <h1>Numero: {this.state.num}</h1>
            <button onClick={this.aumentarNum}>presionar</button>
        </div>
        );
    }
}

export default Componente1Clase;
