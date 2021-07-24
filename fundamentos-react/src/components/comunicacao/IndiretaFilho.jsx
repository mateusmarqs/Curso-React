import React from 'react'

export default props => {

    const gerarIdade = (min = 50, max = 70) => {
        return parseInt(Math.random() * (max - min) + min) 
    }
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => {
                props.quandoClicar('joão', gerarIdade(), true)
            }}>Fornecer Informações
            </button> 
        </div>
    )
}