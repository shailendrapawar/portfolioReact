import React from 'react'
import './block.css'
import imgSrc from './about-me.jpg'

const Block = () => {
    return (
        <div className='block-block flex justify-center items-center'>
            <div className='block-body flex'>
                <div className='block-left grid place-items-center'>
                    <img className=' rounded-xl' src={imgSrc}></img>
                </div>
                <div className='block-right flex  flex-col justify-evenly items-center'>
                    <h3 className=' text-yellow-400'>About me</h3>
                    <h1 className='text-white'>Coding <span className='text-blue-500'>Dreams </span>into <span className='text-blue-500'>Designs</span></h1>
                    <p className='text-slate-300'>fairly adaptive to the any kind of new learnings and conditions to meet up the mark.</p>
                    <p className='text-slate-300 justify-center'>
                        eager to work with my skillset and abilities where i can contribute for the growth and development of the organization as well as my professional career.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Block