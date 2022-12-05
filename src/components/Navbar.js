import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from './Images/logo.png'
import './Navbar.css'

console.log(logo);
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
       <ul className='nav-menu'>
        <li className='nav-item'>
          <a href='/'>Home</a>
        </li>
        <li className='nav-item'>
        <a href='/'>About</a>

        </li>
        <li className='nav-item'>
        <a href='/'>Testimonials</a>

        </li>
        <li className='nav-item'>
        <a href='/'>Demo</a>
        </li>

       </ul>
       </nav>
    </div>
  )
}

export default Navbar