import React from 'react'
import './landingBlock.css'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import  src from './portfolio-pic1.svg'
function LandingBlock() {
  return (
    <div className='landing-block flex'>

      <div className='landing-left flex flex-col'>

        <div className='top-part flex justify-evenly flex-col text-white'>
          <h3>Hi, I am Shailendra Pawar</h3>
          <h1 className=' text-yellow-400'>Full-stack Web Developer</h1>
        </div>

        <div className='middle-part flex flex-col'>
          <h5 className=' text-slate-400'>i like to create solid product with </h5>
          <span className='text-slate-400'>great user experience.</span>

          <div className='social-links flex justify-between items-center bg-slate-300'>
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />

          </div>

        </div>


        <div className='bottom-part flex justify-evenly items-center'>
        <a className=' bg-transparent text-white hover:bg-blue-500 grid place-content-center hover:scale-110'>let's talk</a>
        <a className=' bg-blue-600 text-white hover:bg-transparent hover:text-white grid place-content-center hover:scale-105 '>Resume</a>
          
        </div>


      </div>

      <div className='landing-right grid place-content-center'>
       <img src={src}></img>
      </div>
    </div>
  )
}

export default LandingBlock