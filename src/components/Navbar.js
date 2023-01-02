import React, { Component } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from './Images/logo.png'
import './Navbar.css'


class Navbar extends Component{
constructor(props) {
  super(props)

  this.state = {
     click: 'false'
  }
}
HandleEffect = () => {
this.setState(PrevState => {
  return {click :!PrevState.click}
})
}

  render(){
  return (
    <div className='header'>
       <nav className='navBar'> 
       <a href='/' className=''>
        <img src={logo} alt ='logo'/>
         </a>
       <div className= 'hamburger' onClick={this.HandleEffect}>
        {this.state.click ? (<FaBars />):(<FaTimes style={{color:'#ffffff'}}/>)}
         
       </div>
       
       <ul className = {this.state.click ? "nav-menu": "nav-menu active"} >
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
}

export default Navbar