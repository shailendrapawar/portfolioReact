import React, { useEffect, useRef, useState } from 'react'
import "./home.css"
import LandingBlock from '../landingBlock/LandingBlock'
import Block from '../block/Block'

import Portfolio from '../portfolio/Portfolio'
import Footer from '../footer/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";

//services page imports==========================
import './services.css'
import ServiceIcon from '../serviceIcon/ServiceIcon'
import { MdOutlineWindow } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
//skills page imports===========================
import './skills.css'
import SkillCard from '../skillCard/SkillCard'
import { useOutletContext } from "react-router-dom"

function Home() {

  const [active, setActive] = useState(false)
  const [y, setY] = useState(0)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  //scrolling ref data=======================
  const {serviceRef} =useOutletContext()
  const {skillRef}=useOutletContext()


  const localServiceRef=useRef(null);
  const localSkillRef=useRef(null);




  window.addEventListener("scroll", () => {
    setY(window.scrollY);
    if (y >= 600) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  })

  useEffect(()=>{
    if(skillRef){
      skillRef.current=localSkillRef.current
     
    }
    if(serviceRef){
      serviceRef.current=localServiceRef.current
    }

  },[serviceRef,skillRef])

  //services data=======================
  const serviceIcons = [
    {
      icon: <MdOutlineWindow />,
      heading: "UI/UX Design",
      text: "Creating visually appealing and user-friendly interfaces for websites and web applications."
    },
    {
      icon: <FaMobileScreen />,
      heading: "Responsive Design",
      text: "Ensuring that websites and web applications are accessible and functional across various devices and screen sizes."
    }, {
      icon: <FaCode />,
      heading: "Interactive development",
      text: "Develop interactive and dynamic web experiences by using JavaScript and other frontend libraries or frameworks like React"
    }
  ]
  const para1 = "As a frontend developer, my primary focus is on creating visually engaging and user-friendly interfaces for websites and web applications."
  const para2 = "I specialize in turning design concepts into responsive, interactive, and efficient web experiences. With a strong command of HTML, CSS, and JavaScript, I ensure that users can seamlessly navigate and interact with digital platforms, making the user experience enjoyable and intuitive."

  //services page data===========================================
  const programming = [
    {
      name: "C",
      icon: "url(./assets/c-icon1.svg)"
    },
    {
      name: "Java",
      icon: "url(./assets/java-icon1.svg)"
    }

  ]
  const scripting = [
    {
      name: "HTML",
      icon: "url(./assets/html-icon1.svg)"
    },
    {
      name: "CSS",
      icon: "url(./assets/css-icon1.svg)"
    }, {
      name: "JavaScript",
      icon: "url(./assets/javascript1-icon.svg)"
    },
  ]
  const framework = [
    {
      name: "ReactJS",
      icon: "url(./assets/react-icon1.svg)"
    },
    {
      name: "NodeJS",
      icon: "url(./assets/nodejs-icon1.svg)"
    },
    {
      name: "ExpressJS",
      icon: "url(./assets/express-icon1.svg)"
    },
    {
      name:"Redux",
      icon:"url(./assets/redux-icon.svg)"

    }
  ]


  const databases = [
    {
      name: "MongoDB",
      icon: "url(./assets/mongo-icon1.svg)"
    },
    {
      name: "MY-SQL",
      icon: "url(./assets/mysql-icon1.svg)"
    },
  ]



  //footer data==================================================

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
      <div style={active ? { display: "block" } : { display: "none" }} className='top-arrow' onClick={handleScrollToTop}><FaArrowAltCircleUp /></div>

      <div ref={localSkillRef}  className='skills-block h-auto flex flex-col items-center justify-center pt-10 pb-10'>
        <h2 className='text-yellow-500'>My-Stack</h2>
        <div  className='skills-body flex flex-wrap items-center justify-evenly'>
          <SkillCard name="Programming Languages" data={programming} />
          <SkillCard name="Scripting Languages" data={scripting} />
          <SkillCard name="Frameworks" data={framework} />
          <SkillCard name="Databases" data={databases} />
        </div>
      </div>




      <div ref={localServiceRef} className='services-block pt-8'>
        <div className='services-body flex flex-col gap-7 items-center'>
          <h3 className='text-yellow-500 text-center'>Services</h3>
          <h1 className='text-white text-center'>What i provide as a <span className='text-blue-500'>Service</span></h1>
          <p className=' text-center text-slate-400'>{para1}</p>
          <p className='text-slate-400 text-center'>{para2}</p>

          <div className='service-icons-body flex flex-wrap justify-evenly items-center  gap-7  mt-5 mb-7'>
            {
              serviceIcons.map((v, i) => {
                return <ServiceIcon key={i} data={v} />
              })
            }
          </div>
        </div>
      </div>
      <Portfolio />
      <div onClick={handleScrollToTop} className='h-10 grid place-items-center bg-blue-500 text-white font-bold cursor-pointer'>Back to top</div>
      <Footer data={footerData} />
    </div>
  )
}

export default Home