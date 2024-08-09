import React from 'react'

export default function CardComponent({data}) {
  
  return (
    <div className='card'>
        <img src={data.image}></img>
         <p>{data.name}</p>
        <p>{data.description}</p>
        
    </div>
  )
}
