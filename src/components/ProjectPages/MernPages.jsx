import React from 'react'
import './pages.css'
import ProjectCard from '../portfolio/ProjectCard'
import Sorry from '../../Sorry'
const MernPages = () => {

  const MernProjects = [

    {
      title: "Scribble",
      desc: "Note/To-do app which allows user to manage task and data effectively. MongoDb,ExpressJs,ReactJS,NodeJS,Socket-Io",
      image: "url(/assets/scribble.png)",
      github: "https://github.com/shailendrapawar/scribbleBackend",
      live: "https://scribble-frontend-xi.vercel.app/"
  },
    {
      title: "Chat-ly",
      desc: "Chatly allows real-time communication build with- MERN stack integrated Socket-io",
      image: "url(/assets/mernChat.png)",
      github: "https://github.com/shailendrapawar/chatlyFrontend",
      live: "https://mern-chat-app-frontend-gold.vercel.app/"
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
        <Sorry />
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