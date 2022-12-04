import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from './Images/logo.png'


function Navbar() {
  return (
    <div className='header'>
       <nav className='navBar'> 
       <a href='/' className=''>
        <img src={logo} alt ='logo'/>
         </a>
       <div className= 'hamburger'>
         <FaBars />
       </div>
       <ul>
        <li className='nav-item'></li>
       </ul>
       </nav>
    </div>
  )
}

export default Navbar