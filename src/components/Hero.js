import React, { Component } from 'react'
import './Hero.css'

 class Hero extends Component {
  render() {
    return (
       <div className='hero'>
        <div className='content'>
          <p>Call us</p>
          <p>1-800-123-4567</p>
          <p>Because money</p>
            <p> Doesn't come with instruction</p>
          
          <button className ='button'>Free consultation </button>
        </div>
      </div>
    )
  }
}

export default Hero