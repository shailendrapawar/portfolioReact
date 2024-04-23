import React from 'react'
import './projects.css'
import { Outlet } from 'react-router-dom'
import ProjectNav from './ProjectNav'

function Projects() {
  return (
    <div className='project-body'>
      <ProjectNav />
      <Outlet />
    </div>
  )
}

export default Projects