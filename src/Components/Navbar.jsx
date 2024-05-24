import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <nav className='navlink'>
        <Link to="/">Home</Link>
        <Link to="/Cadastro">Cadastro de Produtos</Link>
        <Link to="/LoginForm">Login</Link>
    </nav>
  )
}

export default Navbar