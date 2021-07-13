import './App.css'
import React from "react"

import ComParametro from "./components/basicos/ComParametro"
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

export default () => {
    return (
        <div id='App'>
            <h2 className='title'>Fundamentos React (Arrow)</h2>
            <div className="container">
                <Card titulo='#04 Desafio aleatório'>  
                    <Aleatorio 
                        max={20}
                        min={1}
                    />
                </Card>
                <Card titulo='#03 Fragmento'>  
                    <Fragmento />
                </Card>
                <Card titulo='#02 ComParametro'>  
                    <ComParametro
                        titulo='Situação do Aluno'
                        aluno='Pedro Silva'
                        nota={9.3}
                    />
                </Card>
                <Card titulo='#01 Primeiro'>  
                    <Primeiro />
                </Card>  
            </div>   
        </div>
    )
}