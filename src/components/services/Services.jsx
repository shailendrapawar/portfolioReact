import React from 'react'
import './services.css'
import ServiceIcon from '../serviceIcon/ServiceIcon'
import { MdOutlineWindow } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Services = () => {

    const para1="As a frontend developer, my primary focus is on creating visually engaging and user-friendly interfaces for websites and web applications."
    const para2="I specialize in turning design concepts into responsive, interactive, and efficient web experiences. With a strong command of HTML, CSS, and JavaScript, I ensure that users can seamlessly navigate and interact with digital platforms, making the user experience enjoyable and intuitive."

    const serviceIcons=[
        {
            icon:<MdOutlineWindow />,
            heading:"UI/UX Design",
            text:"Creating visually appealing and user-friendly interfaces for websites and web applications."
        },
        {
            icon:<FaMobileScreen />,
            heading:"Responsive Design",
            text:"Ensuring that websites and web applications are accessible and functional across various devices and screen sizes."
        },{
            icon:<FaCode />,
            heading:"Interactive development",
            text:"Develop interactive and dynamic web experiences by using JavaScript and other frontend libraries or frameworks like React"
        }
    ]
    return (
        <div className='services-block pt-8'>
            <div className='services-body flex flex-col gap-7 items-center'>
                <h3 className='text-yellow-500 text-center'>Services</h3>
                <h1 className='text-white text-center'>What i provide as a <span className='text-blue-500'>Service</span></h1>
                <p className=' text-center text-slate-400'>{para1}</p>
                <p className='text-slate-400 text-center'>{para2}</p>

                <div className='service-icons-body flex flex-wrap justify-evenly items-center  gap-7  mt-5 mb-7'>
                {
                    serviceIcons.map((v,i)=>{
                       return <ServiceIcon key={i} data ={v}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Services