import React from 'react'
import './projectCard.css'
import { FaGithub } from "react-icons/fa6";
import { MdAddLink } from "react-icons/md";

const ProjectCard = ({ data }) => {
  return (
    <div className='projectCard-body min-w-72 max-w-96 h-52 bg-contain bg-no-repeat bg-center cursor-pointer rounded-2xl'  style={{backgroundImage:data.image}} >
      <div className='content-body flex flex-col justify-evenly items-center rounded-2xl '>
        <h1>{data.title}</h1>
        <p className=' text-slate-300'>{data.desc}</p>
        <div className='link-body text-white flex justify-evenly'>
          <a href={data.github} target='blank' ><FaGithub /></a>
          <a href={data.live} target='blank' ><MdAddLink /></a>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard