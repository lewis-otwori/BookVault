import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'> 
        <Link to='/'>Home</Link>
        <Link to='/add'>addBook</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/login'>Login</Link>
        <Link to='/LogOut'>LogOut</Link>
        
    </div>
    </div>
  )
}

export default Navbar