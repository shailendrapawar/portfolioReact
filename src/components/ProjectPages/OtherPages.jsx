import React from 'react'
import './pages.css'
const OtherPages = () => {
  const otherProjects=[]

  
  if(otherProjects.length==0){
   return( 
    <div className='project-list-body'>
      <h1 className='text-white'>no projects to show</h1>
    </div>
   )
  }else{
    return (
      <div className='project-list-body'>
        {otherProjects.map((v,i)=>{
      
      return <ProjectCard key={i} data={v}/>
    })}
      </div>
    )
  }
}

export default OtherPages