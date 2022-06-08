import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import { BoaTarde, BoaNoite } from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

/* const elemento = <h1>React</h1>  */

ReactDOM.render(
    <div>        
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
    </div>
, document.getElementById('root'))