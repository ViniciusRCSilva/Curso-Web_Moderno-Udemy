import './Logo.css'
import logo from '../../assests/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className='logo'>
        <Link className='logo' to="/"><img src={logo} alt="logo" /></Link>
    </aside>