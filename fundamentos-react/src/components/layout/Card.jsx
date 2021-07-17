import React from 'react'
import './Card.css'

export default props => {
    const style = {
        backgroundColor: props.color || '#F00'
    }


    return (
        <div className='Card'>
            <div className='Title' style={style}>
                {props.titulo}
            </div>
            <div className='Content'>
                { props.children }   
            </div>
        </div>
    )
}