import './App.css'
import React from "react"
import {BrowserRouter as Router} from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Contente from '../components/layout/Content'

const App = props => (
        <div className='App'>
            <Router>
                <Menu></Menu>
                <Contente></Contente>
            </Router>     
        </div>
)

export default App