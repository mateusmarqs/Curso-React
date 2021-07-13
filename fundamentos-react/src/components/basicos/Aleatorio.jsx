import React from 'react'

export default props => {
    const {max, min} = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h4>Max = {max}</h4>
            <h4>Min = {min}</h4>
            <p>Número sorteado: { aleatorio }</p>
        </div>
    )
}