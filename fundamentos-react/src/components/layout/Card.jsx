import React from 'react'
import './Card.css'

export default props => {
    const estilo = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    return (
        <div className='Card'>
            <div className='Title' style={estilo}>
                {props.titulo}
            </div>
            <div className='Content'>
                { props.children }   
            </div>
        </div>
    )
}