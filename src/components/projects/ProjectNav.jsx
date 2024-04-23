import React from 'react'
import './projectNav.css'
import { NavLink } from 'react-router-dom'

const ProjectNav = () => {

  return (
    <nav className='project-nav'>
      <NavLink className={({ isActive }) => isActive ? "active2" : "notActive"} to='/projects/basics' >BASIC</NavLink>
      <NavLink className={({ isActive }) => isActive ? "active2" : "notActive"} to='/projects/mern' >MERN</NavLink>
      <NavLink className={({ isActive }) => isActive ? "active2" : "notActive"} to='/projects/others' >Others</NavLink>
    </nav>
  )
}

export default ProjectNav