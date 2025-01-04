import React from 'react'
import './pages.css'
import Sorry from '../../Sorry'
import ProjectCard from '../portfolio/ProjectCard'
const OtherPages = () => {
  const otherProjects = [
    
      {
        title: "Seh-yog",
        desc: " Basic app for blood reservation (using HTML,CSS,JS ,nodeJS,mongoDb,expressJS) where any donar's details can be stored and retrieved for medical purpose",
        image: "url(/assets/bloodReservation.png)",
        github: "https://github.com/shailendrapawar/bloodReservation",
        live: "https://blood-reservation.vercel.app/"
      },
    
  ]


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