import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store/config'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({type: 'add2ToNumber'})}    
                    >+2</button>
                </div>
                {state.user != null
                    ? <span className="text">{state.user.name}</span>
                    : <span className="text">'Usuário indefinito'</span>
                }
                <div>
                    <button className="btn"
                        onClick={() => dispatch({type: 'login', payload: 'Maria'})}    
                    >Adicionar Usuário</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
