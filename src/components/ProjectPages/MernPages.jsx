import React from 'react'
import './pages.css'
import ProjectCard from '../portfolio/ProjectCard'
const MernPages = () => {

  const MernProjects = [

    {
      title: "Scribble",
      desc: "Simple Note-pad which allows CRUD operation for user's data. MongoDb,ExpressJs,ReactJS,NodeJS",
      image: "url(/assets/notepad.png)",
      github: "https://github.com/shailendrapawar/scribble-note-pad",
      live: "https://github.com/shailendrapawar/scribble-note-pad"
    },
    {
      title: "NOTE-VERSE",
      desc: "Blog app which allows user to Create,Edit,Delete blog. Used JWT for authentication (Login-Signup). MongoDb,ExpressJs,ReactJS,NodeJS",
      image: "url(/assets/blog-app.png)",
      github: "https://github.com/shailendrapawar/note-verse-blog-app",
      live: "https://github.com/shailendrapawar/note-verse-blog-app"
    }
  ]


  if (MernProjects.length == 0) {
    return (
      <div className='project-list-body'>
        <h1 className='text-white'>no projects to show</h1>
      </div>
    )
  } else {

    return (
      <div className='project-list-body'>
        {MernProjects.map((v, i) => {

          return <ProjectCard key={i} data={v} />
        })}
      </div>
    )
  }
}

export default MernPages