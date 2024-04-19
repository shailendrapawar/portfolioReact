import React from 'react'
import "./home.css"
import LandingBlock from '../landingBlock/LandingBlock'
import Block from '../block/Block'


function Home() {
 
  return (
    <div className='home-page'>
    <LandingBlock/>
    <Block/>
    </div>
  )
}

export default Home