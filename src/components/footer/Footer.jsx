import React from 'react'
import './footer.css'
function Footer({ data }) {
    console.log(data)
    return (

        <footer className='footer-body'>
            {
                data.map((v, i) => {
                    return (<div key={i} className='footer-item'>
                        <i>{v.icon}</i>
                        <p>{v.desc}</p>
                    </div>)
                })
            }
        </footer>
    )
}

export default Footer