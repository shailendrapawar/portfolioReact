import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";


function Navbar() {


  //function for handling menu2-icon
  const [rotate, setRotate] = useState(true);
  const handleRotate = () => {
    if (rotate) {
      document.querySelector("#menu-icon").classList.add("rotate");
      
      // document.querySelector("#nav2-items").

      setRotate(false)
    } else {
      document.querySelector("#menu-icon").classList.remove("rotate");
      setRotate(true);
    }
  }



  return (
    <nav className='nav-bar h-16 '>

      <nav className='nav-1 flex justify-around  text-white'>
        <div className='logo-icon flex justify-center w-16'>
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

      <nav className='nav-2 flex justify-between pl-5 pr-5'>
        <div className='logo-icon flex justify-center w-16'>
          SP
        </div>


        <div id='nav2-items' className='nav2-items'>

          <div className='nav2-inner'>
            <NavLink className="">Home</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Portfolio</NavLink>
          </div>

        </div>

        <div onClick={handleRotate} id='menu-icon' className='menu-icon flex justify-center w-15 items-center' >
          <NavLink><RiMenu3Line className=' w-10 h-10' /></NavLink>
        </div>
      </nav>



    </nav>

  )
}

export default Navbar