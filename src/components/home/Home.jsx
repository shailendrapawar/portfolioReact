import React, { useState } from 'react'
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
import { FaArrowAltCircleUp } from "react-icons/fa";

function Home() {

  const [active,setActive]=useState(false)
  const[y,setY]=useState(0)

  const handleScrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  }


  window.addEventListener("scroll",()=>{
    setY(window.scrollY);
    if(y>=600){
      setActive(true);
    }
    else{
      setActive(false);
    }
  })

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
    <div className='home-page'>
      <LandingBlock />
      <Block />
      <div style={active?{display:"block"}:{display:"none"}}  className='top-arrow' onClick={handleScrollToTop}><FaArrowAltCircleUp/></div>
      <Skills />
      <Services />
      <Portfolio />
      <div onClick={handleScrollToTop} className='h-10 grid place-items-center bg-blue-500 text-white font-bold cursor-pointer'>Back to top</div>
      <Footer data={footerData} />
    </div>
  )
}

export default Home