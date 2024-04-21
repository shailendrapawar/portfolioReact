import React from 'react'
import './skillCard.css'

const SkillCard = ({ name, data }) => {
    return (
        <div className='skill-card text-center flex flex-col justify-evenly mt-7 text-white rounded-xl overflow-hidden'>
            <h3 className=' grid place-items-center' >{name}</h3>
            <div className='skill-items flex justify-evenly items-center'>
                {
                    data.map((v, i) => {
                        return (
                            <div key={i} className='item flex flex-col justify-between items-center'>
                                <i className='bg-contain bg-no-repeat bg-center' style={{ backgroundImage: v.icon }}></i>
                                <h5>{v.name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillCard