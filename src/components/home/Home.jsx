import React from 'react'
import "./home.css"
import LandingBlock from '../landingBlock/LandingBlock'
import Block from '../block/Block'
import Skills from '../skills/Skills'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'


function Home() {
 
  return (
    <div className='home-page'>
    <LandingBlock/>
    <Block/>
    <Skills/>
    <Services/>
    <Portfolio/>
    </div>
  )
}

export default Home