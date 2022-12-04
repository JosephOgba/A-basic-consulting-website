import React from 'react'
import {FaBars} from 'react-icons/fa'
import office_building from './Images/office_building.jpg'


function Navbar() {
  return (
    <div className='header'>
       <nav className='navBar'> 
       <a href='/' className=''>
        <img src={office_building} alt ='office_building'/>
         </a>
       <div className= 'hamburger'>
         <FaBars />
       </div>
       </nav>
    </div>
  )
}

export default Navbar