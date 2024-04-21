import React from 'react'
import "./home.css"
import LandingBlock from '../landingBlock/LandingBlock'
import Block from '../block/Block'
import Skills from '../skills/Skills'
import Services from '../services/Services'


function Home() {
 
  return (
    <div className='home-page'>
    <LandingBlock/>
    <Block/>
    <Skills/>
    <Services/>
    </div>
  )
}

export default Home