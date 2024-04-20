import React from 'react'
import "./home.css"
import LandingBlock from '../landingBlock/LandingBlock'
import Block from '../block/Block'
import Skills from '../skills/Skills'


function Home() {
 
  return (
    <div className='home-page'>
    <LandingBlock/>
    <Block/>
    <Skills/>
    </div>
  )
}

export default Home