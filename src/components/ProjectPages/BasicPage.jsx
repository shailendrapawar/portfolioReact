import React from 'react'
import './pages.css'
import ProjectCard from '../portfolio/ProjectCard'
const BasicPage = () => {

  const basicProjects = [
    {
        title: "Misc-Music Player",
        desc: "Music Player using HTML CSS Javascript Local storage is used for song data",
        image: "url(/assets/misc-music.png)",
        github: "https://github.com/shailendrapawar/miscMusic-player",
        live: "https://misc-music-player.vercel.app/"
    },
    {
        title: "Weeko-weather",
        desc: "Weather App using HTML CSS Javascript. Open Weathermap API is used for data",
        image: "url(/assets/weeko-weather.png)",
        github: "https://github.com/shailendrapawar/weather-app",
        live: "https://weather-azxu0zegx-shailendra-pawars-projects.vercel.app/"
    }
]


if (basicProjects.length == 0) {
  return (
    <div className='project-list-body'>
      <h1 className='text-white'>no projects to show</h1>
    </div>
  )
} else {

  return (
    <div className='project-list-body'>
      {basicProjects.map((v, i) => {

        return <ProjectCard key={i} data={v} />
      })}
    </div>
  )
}
}

export default BasicPage