import React, { useState } from 'react'
import './navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { TbArrowsCross } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'
// import { useRef } from 'react'


function Navbar({scrollFunction,skillRef,serviceRef}) {
  const navigate = useNavigate()

  const travel = (elem) => {
    if(elem=="skills"){
      window.scrollTo({top:1200,behavior:"smooth"})

    }else if(elem=="service"){
      window.scrollTo({top:2000,behavior:"smooth"})
    }else{
      window.scrollTo({top:0,behavior:"smooth"})
    }

  }



  //function for handling menu2-icon
  const [rotate, setRotate] = useState(true);
  const handleRotate = () => {
    if (rotate) {
      setRotate(false)
      document.querySelector("#menu-icon").classList.add("rotate");
      document.getElementById("nav2-items").style.display = "flex";
    } else {
      setRotate(true);
      document.querySelector("#menu-icon").classList.remove("rotate");
      document.getElementById("nav2-items").style.display = "none"
    }
  }
  const handleClick = () => {
    setRotate(true);
    document.querySelector("#menu-icon").classList.remove("rotate");
    document.getElementById("nav2-items").style.display = "none"
  }
  return (
    <nav className='nav-bar h-16 cursor-pointer '>
      <nav className='nav-1 flex justify-around items-center text-white'>
        <div onClick={() => navigate("/")} className='logo-icon flex justify-center items-center w-12 h-12'></div>
        <div className='center-nav flex items-center justify-between'>
          <NavLink className={({ isActive }) => isActive ? " grid active" : "grid"} to='/'>Home</NavLink>
          <a  onClick={() => scrollFunction(skillRef)} > skills</a>
          <a  onClick={() => scrollFunction(serviceRef)} >services</a>
          <NavLink className={({ isActive }) => isActive ? " grid active" : "grid"} to='/projects'>Portfolio</NavLink>
        </div>
        <div className='contact-icon items-center flex'>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      <nav className='nav-2 flex justify-between items-center pl-5 pr-5'>
        <div onClick={() => navigate("/")} className='logo-icon flex justify-center w-12 h-12'></div>
        <div id='nav2-items' className='nav2-items text-white bg-black items-center'>
          <div className='nav2-inner flex flex-col items-center justify-around cursor-pointer'>
            <NavLink onClick={handleClick} to='/' className={({ isActive }) => isActive ? "active items" : "items"}>HOME</NavLink>
            <Link onClick={()=>{
              scrollFunction(skillRef);
              handleClick();
            }}  className='items'>Skills</Link>
            <Link onClick={()=>{
              scrollFunction(serviceRef)
              handleClick()

            }} className='items'>Services</Link>
            <NavLink onClick={handleClick} to='/projects' className={({ isActive }) => isActive ? "active items" : "items"}>PORTFOLIO</NavLink>
            <NavLink onClick={handleClick} to='/contact' className='items'>CONTACT</NavLink>
          </div>
        </div>
        <div onClick={handleRotate} id='menu-icon' className='menu-icon flex justify-center w-15 items-center' >
          {rotate ? <RiMenu3Line className=' w-10 h-10' /> : <TbArrowsCross className=' w-10 h-10' />}
        </div>
      </nav>
    </nav>
  )
}

export default Navbar