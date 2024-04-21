import React from 'react'
import "./home.css"
import LandingBlock from '../landingBlock/LandingBlock'
import Block from '../block/Block'
import Skills from '../skills/Skills'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Footer from '../footer/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
function Home() {

  const footerData=[
    {
      icon:<FaLocationDot/>,
      desc:"Block, Haldwani(263139), Nainital, Uttarakhand, India"
    },
    {
      icon:<FaPhoneAlt />,
      desc:"7456920792"
    },{
      icon:<MdAttachEmail />,
      desc:"shailendrapawar7920@gmail.com"
    }
  ]
 
  return (
    <div className='home-page'>
    <LandingBlock/>
    <Block/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Footer data={footerData}/>
    </div>
  )
}

export default Home