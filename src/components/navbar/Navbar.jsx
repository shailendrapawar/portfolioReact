import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='nav-bar flex justify-around  text-white h-16'>
    
      <div  className='logo-icon flex justify-center w-16'>
        SP
      </div>

      <div className='center-nav flex'>
        <NavLink className=" grid">Home</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Portfolio</NavLink>
      </div>

      <div className='contact-icon flex'>
        <NavLink>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar