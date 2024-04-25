import React, { useState ,useEffect} from 'react'
import './contact.css'
import { IoCaretBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser'

function ContactPage() {

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
      

    const [senderName, setsenderName] = useState("");
    const [senderEmail, setsenderEmail] = useState("");
    const [subject, setsubject] = useState("");
    const [senderMsg, setSenderMsg] = useState("");


    const reset = () => {
        setsenderName("")
        setsenderEmail("")
        setsubject("")
        setSenderMsg("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (senderEmail == "" || senderEmail == "" || subject == "" || senderMsg == "") {
            alert("please enter all fields first");

        } else {
            const serviceId = 'service_z2c3hqr'
            const templateId = 'template_ezowel7'
            const publicKey = 'vstl-GX54CHYdt9YV'
            const templateparams = {
                to_name: "SHAILU",
                from_name: senderName,
                from_email: senderEmail,
                subject: subject,
                message: senderMsg
            }
            emailjs.send(serviceId, templateId, templateparams, publicKey)
                .then((res) => {
                    alert(`Thank-you:-${senderName}, your email has been recieved successfully`);
                    reset();
                }).catch((err) => {
                    alert("Sorry email, didn't sent successfully");
                })
        }
    }
    const navigate = useNavigate()
    const handleClick = () => {
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
                    <input required value={senderName} onChange={(e) => setsenderName(e.target.value)} placeholder='enter your name' type='text'></input>
                    <input required value={senderEmail} onChange={(e) => setsenderEmail(e.target.value)} placeholder='enter your email' type='email'></input>
                    <input required value={subject} onChange={(e) => setsubject(e.target.value)} placeholder="what is this regarding" type='text'></input>
                    <textarea required value={senderMsg} onChange={(e) => setSenderMsg(e.target.value)} className=' outline-none rounded-lg p-1 resize-none' type="text" ></textarea>
                </form>

                <button id='submit' onClick={(e) => handleSubmit(e)} className='text-black bg-yellow-500'>Send </button>

            </div>
        </div>
    )
}

export default ContactPage