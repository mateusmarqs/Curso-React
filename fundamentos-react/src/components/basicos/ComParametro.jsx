import React from "react"

export default function ComParametro(props) {
    // Não se pode alterar direto os valores que vem do props, por exemplo: props.nota = 10
    // Os aquivos que vem do props são somente leitura
    const status = props.nota < 7 ? 'reprovado' : 'aprovado'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno }</strong> tem nota { props.nota }, e ele está { status }. 
            </p>
        </div>
    )
}