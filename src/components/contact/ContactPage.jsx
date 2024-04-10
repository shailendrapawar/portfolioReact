import React from 'react'
import './contact.css'
import { IoCaretBackCircle } from "react-icons/io5";
import {useNavigate} from "react-router-dom";

function ContactPage() {

    const navigate=useNavigate()
    const handleClick=()=>{
        navigate(-1);
    }
    return (
        <div className='contactPage flex flex-col items-center'>

            <div className='contact-top flex h-14 mt-8 items-center'>
                <button onClick={handleClick}><IoCaretBackCircle className=' text-yellow-400 w-10 h-10' /></button>
                <h1 className=' heading  ml-20 '> Get in Touch</h1>
            </div>

            <div className='form-body mt-8'>
                <div className='contact-middle '>
                    <h4 className='text-white '>HELLO,</h4>
                    <span className=' text-yellow-400'>Feel free to contact</span>
                </div>

                <form className='flex flex-col items-center justify-evenly'>
                    <input placeholder='enter your name'></input>
                    <input placeholder='enter your email'></input>
                    <input placeholder="what is this regarding"></input>
                    <textarea ></textarea>
                </form>
                <button id='submit' className='text-white bg-yellow-500'>send message</button>

            </div>
        </div>
    )
}

export default ContactPage