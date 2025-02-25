import React from 'react'
import './portfolio.css'
import ProjectCard from './ProjectCard'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {

    const navigate=useNavigate()

    const project = [
       
        {
            title: "Weeko-weather",
            desc: "Weather App using HTML CSS Javascript. Open Weathermap API is used for data",
            image: "url(./assets/weeko-weather.png)",
            github: "https://github.com/shailendrapawar/weather-app",
            live: "https://weather-azxu0zegx-shailendra-pawars-projects.vercel.app/"
        },
        // {
        //     title: "Chat-ly",
        //     desc: "Chatly allows real-time communication build with- MERN stack integrated Socket-io",
        //     image: "url(./assets/mernChat.png)",
        //     github: "https://github.com/shailendrapawar/chatlyFrontend",
        //     live: "https://mern-chat-app-frontend-gold.vercel.app/"
        // },
       
        {
            title: "Scribble",
            desc: "Note/To-do app which allows user to manage task and data effectively. MongoDb,ExpressJs,ReactJS,NodeJS,Socket-Io",
            image: "url(./assets/scribble.png)",
            github: "https://github.com/shailendrapawar/scribbleBackend",
            live: "https://scribble-frontend-xi.vercel.app/"
        },
        {
            title:"Buzz-Talk",
            desc:" A simple chat app allows user to have real time communication, one-to-one with privacy.Implemented redux toolkit for state management for predictive data. Built using MERN stack with integration of Socket-io",
            image:"url(./assets/buzzTalk.png)",
            github:"https://github.com/shailendrapawar/mernChatBackend",
            live:"https://mern-chat-frontend-sepia.vercel.app/"
        },
        // {
        //     title: "NOTE-VERSE",
        //     desc: "Blog app which allows user to Create,Edit,Delete blog. Used JWT for authentication (Login-Signup). MongoDb,ExpressJs,ReactJS,NodeJS",
        //     image: "url(./assets/blog-app.png)",
        //     github: "https://github.com/shailendrapawar/note-verse-blog-app",
        //     live: "https://github.com/shailendrapawar/note-verse-blog-app"
        // },
        {
            title:"BODY-SYNC",
            desc:"A dynamic web app that offers nutrition tracking, diverse exercise insights, and real-time content interaction with robust authentication. ",
            image:"url(./assets/body-sync.png)",
            github:"https://github.com/shailendrapawar/bodySyncBackend",
            live:"https://body-sync-frontend.vercel.app/"
        }
    ]

    return (
        <div className='portfolio-block h-auto flex justify-center items-center pt-5 pb-7'>
            <div className='portfolio-body flex flex-col justify-evenly gap-6'>
                <h3 className='text-yellow-400 text-center'>Portfolio</h3>
                <h1 className='text-white text-center'>Projects of my <span className='text-blue-500'>Domain</span></h1>
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