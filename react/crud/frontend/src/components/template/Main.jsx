import './Main.css'
import React from 'react'
import Header from './Header'

export default props => 
    <>
        <Header {...props} />

        <main className='content'>
            Conteúdo
        </main>
    </>