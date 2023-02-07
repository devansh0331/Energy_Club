import React from 'react'
import "./event.css"
import Aarohana from "../../images/Aarohana.jpg"



function Event() {
  return (
    <div>
        <div className='headerContent_header'>
          AAROHANA  
        </div>
        
        
          
        <div >
          
          About the Event
          <div className='box'>
            <p className='innerText' style={{textDecoration: 'none'}}>AAROHANA-'rising knowledge to wisdom' was an event organised by the Energy Club on 23rd November 2022 in the blissful presence of our honorable Principal Dr. M.K. Gupta,Vice Principal ma'am Dr. Manisha Sharma and HoD of mechanical engineering department Dr. Shiena Shekhar ma'am.Aarohana was an inter-college quiz competition in which students from different disciplines from our college as well as from various respective institutes of Durg,Bhilai and Raipur participated enthusiastically.Shristhee Mukherjee and Utkarsh Sharma were the quiz masters for the day.The main aim of this quiz competition was to encourage and motivate students to gain knowledge about various intellectual contexts. 
          Energy Club has always been working for student welfare and making youngsters aware of various globally concerned topics.</p>
          </div>


        </div>
        <div >
          Poster
          <div className='poster'>
           <img src={Aarohana} alt=""/>
          </div>
        </div>
        
        
    </div>
  )
}

export default Event
