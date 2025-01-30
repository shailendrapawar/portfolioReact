import React from 'react'
import './pages.css'
import ProjectCard from '../portfolio/ProjectCard'
import Sorry from '../../Sorry'
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
    },
    {
      title:"Shopping Cart",
      desc:"A simple shopping Cart functionality using Redux Library fpor state management",
      image:"url(/assets/shoppingCart.png)",
      github:"https://github.com/shailendrapawar/shoppingCart",
      live:"https://shopping-cart-chi-taupe.vercel.app/"
    },
    {
      title: "Calculator",
      desc: "Simple calculator which makes calculations easy for users, crafted with HTML, CSS, JavaScript",
      image: "url(/assets/calculator.png",
      github: " https://github.com/shailendrapawar/calculator",
      live: "https://calculator-pi-ten-88.vercel.app/"
    },
    {
      title: "Todo's",
      desc: "Simple yet effective tool to manage tasks. Created using HTML,CSS,JavaScript with local storage",
      image: "url(/assets/todo.png)",
      github: "https://github.com/shailendrapawar/todoApp",
      live: "https://todo-app-orcin-one.vercel.app/"
    }
  ]
  if (basicProjects.length == 0) {
    return (
      <div className='project-list-body'>
        <Sorry/>
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