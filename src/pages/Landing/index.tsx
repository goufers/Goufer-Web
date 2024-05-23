import React, { useEffect, useState } from 'react'

const Landing = () => {




 const getJobs = async () =>{
        const res = await fetch('/api/jobs',{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json'
          },
        
        });
        const jobs =  res.json()
        console.log(jobs)
 }

getJobs()

  return (
    <div>
  
    </div>
  )
}

export default Landing

