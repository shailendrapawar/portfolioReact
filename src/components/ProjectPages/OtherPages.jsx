import React from 'react'
import './pages.css'
import Sorry from '../../Sorry'
const OtherPages = () => {
  const otherProjects = []


  if (otherProjects.length == 0) {
    return (
      <div className='project-list-body'>
        <Sorry />
      </div>
    )
  } else {
    return (
      <div className='project-list-body'>
        {otherProjects.map((v, i) => {

          return <ProjectCard key={i} data={v} />
        })}
      </div>
    )
  }
}

export default OtherPages