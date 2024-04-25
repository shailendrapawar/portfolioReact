import React, { useEffect } from 'react'
import './pages.css'
const SelectPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className=' select-page'>
      <div>
      </div>
      <h1 className=' text-center'>Please choose a Category</h1>
    </div>
  )
}

export default SelectPage