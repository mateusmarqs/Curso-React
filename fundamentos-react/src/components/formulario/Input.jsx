import React, {useState} from 'react'

export default props => {
    
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(event) {
        setValor(event.target.value)
        // console.log(event.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/>
            <input value={undefined} />
        </div>
    )
}