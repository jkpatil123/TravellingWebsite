 import './Trip.css'
 import React from 'react'
 
 function TripData(props) {
   return (
     <div className='t-card'>
       <div className='t-image'>
        <img alt='simple image' src={props.image}/>
       </div>
       <h4>{props.heading}</h4>
       <p>{props.text}</p>
     </div>
   )
 }
 export default TripData
 