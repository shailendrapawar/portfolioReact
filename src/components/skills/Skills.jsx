import React from 'react'
import './skills.css'
import SkillCard from '../skillCard/SkillCard'
const Skills = () => {

  const programming=[
    {
      name:"C",
      icon: "url(./assets/c-icon1.svg)"
    },
    {
      name:"Java",
      icon:"url(./assets/java-icon1.svg)"
    }

  ]
  const scripting = [
    {
      name: "HTML",
      icon: "url(./assets/html-icon1.svg)"
    },
    {
      name: "CSS",
      icon: "url(./assets/css-icon1.svg)"
    }, {
      name: "JavaScript",
      icon: "url(./assets/javascript1-icon.svg)"
    },
  ]
  const framework = [
    {
      name: "ReactJS",
      icon: "url(./assets/react-icon1.svg)"
    },
    {
      name: "NodeJS",
      icon: "url(./assets/nodejs-icon1.svg)"
    },
    {
      name: "ExpressJS",
      icon: "url(./assets/express-icon1.svg)"
    },
  ]


  const databases = [
    {
      name: "MongoDB",
      icon: "url(./assets/mongo-icon1.svg)"
    },
    {
      name: "MY-SQL",
      icon: "url(./assets/mysql-icon1.svg)"
    },
  ]




  return (
    <div id='#skills' className='skills-block h-auto flex flex-col items-center justify-center pt-10 pb-10'>
    <h2 className='text-yellow-500'>My-Skills</h2>
      <div className='skills-body flex flex-wrap items-center justify-evenly'>
        <SkillCard name="Programming Languages" data={programming} />
        <SkillCard name="Scripting Languages" data={scripting} />
        <SkillCard name="Frameworks" data={framework} />
        <SkillCard name="Databases" data={databases} />
      </div>
    </div>
  )
}

export default Skills