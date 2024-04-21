import React from 'react'
import './serviceIcon.css'

const ServiceIcon = ({data}) => {
  return (
    <div className='serviceIcon-body flex flex-col justify-start gap-4 items-center rounded-3xl'>
    <i className='grid place-items-center text-white mt-5'>{data.icon}</i>
    <h3 className='text-yellow-400'>{data.heading}</h3>
    <p className='text-white text-center'>{data.text}</p>
    </div>
  )
}

export default ServiceIcon