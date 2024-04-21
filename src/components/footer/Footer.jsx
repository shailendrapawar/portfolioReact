import React from 'react'
import './footer.css'
function Footer({ data }) {
    console.log(data)
    return (

        <footer className='footer-body h-60 flex flex-col bg-black text-white justify-evenly items-center'>
            {
                data.map((v, i) => {
                    return (<div key={i} className='footer-item flex items-center'>
                        <i className=' h-11 w-11 p-2 border'>{v.icon}</i>
                        <p className='flex items-center pl-2 break-words' >{v.desc}</p>
                    </div>)
                })
            }
        </footer>
    )
}

export default Footer