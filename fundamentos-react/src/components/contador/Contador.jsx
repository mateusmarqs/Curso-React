import React, { Component } from 'react'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo 
        })
    }

    setPasso = passo => {
        this.setState({
            passo: parseInt(passo.target.value)
        })
    } 

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo</label> {/*Interessante*/}
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador