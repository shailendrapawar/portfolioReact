import React from 'react'
import './portfolio.css'
import ProjectCard from './ProjectCard'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {

    const navigate=useNavigate()

    const project = [
        {
            title: "Misc-Music Player",
            desc: "Music Player using HTML CSS Javascript Local storage is used for song data",
            image: "url(./assets/misc-music.png)",
            github: "https://github.com/shailendrapawar/miscMusic-player",
            live: "https://misc-music-player.vercel.app/"
        },
        {
            title: "Weeko-weather",
            desc: "Weather App using HTML CSS Javascript. Open Weathermap API is used for data",
            image: "url(./assets/weeko-weather.png)",
            github: "https://github.com/shailendrapawar/weather-app",
            live: "https://weather-azxu0zegx-shailendra-pawars-projects.vercel.app/"
        },
        {
            title: "Scribble",
            desc: "Simple Note-pad which allows CRUD operation for user's data. MongoDb,ExpressJs,ReactJS,NodeJS",
            image: "url(./assets/notepad.png)",
            github: "https://github.com/shailendrapawar/scribble-note-pad",
            live: "https://github.com/shailendrapawar/scribble-note-pad"
        },
        {
            title: "NOTE-VERSE",
            desc: "Blog app which allows user to Create,Edit,Delete blog. Used JWT for authentication (Login-Signup). MongoDb,ExpressJs,ReactJS,NodeJS",
            image: "url(./assets/blog-app.png)",
            github: "https://github.com/shailendrapawar/note-verse-blog-app",
            live: "https://github.com/shailendrapawar/note-verse-blog-app"
        },
    ]

    return (
        <div className='portfolio-block h-auto flex justify-center items-center pt-5 pb-7'>
            <div className='portfolio-body flex flex-col justify-evenly gap-6'>
                <h3 className='text-yellow-400 text-center'>Portfolio</h3>
                <h1 className='text-white text-center'>Projects of my domain</h1>
                <div className='project-list flex flex-wrap justify-evenly gap-6'>
                    {project.map((v, i) => {
                        return <ProjectCard key={i} data={v} />
                    })}
                </div>
                <div className='projects-bottom h-10 '>
                    <button className='w-28 hover:w-40 ml-8 rounded-xl' onClick={()=>navigate("/projects")}>All projects</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio