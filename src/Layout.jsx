import React, { useRef } from 'react'
import {Outlet}  from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function Layout() {

  const serviceRef=useRef(null);
  const skillRef=useRef(null);

  const scrollToSection=(ref)=>{
    ref.current.scrollIntoView({behavior:"smooth"});
    // console.log(ref)
  }

  return (
    <>
        <Navbar scrollFunction={scrollToSection} skillRef={skillRef} serviceRef={serviceRef}/>
        <Outlet context={{skillRef,serviceRef}} />
    </>
  )
}

export default Layout