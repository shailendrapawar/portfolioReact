import React, { useEffect } from 'react'
import './projects.css'
import { Outlet } from 'react-router-dom'
import ProjectNav from './ProjectNav'
import Footer from '../footer/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function Projects() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  const footerData = [
    {
      icon: <FaLocationDot />,
      desc: "Block, Haldwani(263139), Nainital, Uttarakhand, India"
    },
    {
      icon: <FaPhoneAlt />,
      desc: "7456920792"
    }, {
      icon: <MdAttachEmail />,
      desc: "shailendrapawar7920@gmail.com"
    }
  ]
  return (
    <div className='project-body flex flex-col'>
      <ProjectNav />
      <Outlet />
      <Footer data={footerData}/>
    </div>
  )
}

export default Projects