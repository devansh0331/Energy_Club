import React from 'react'
import "./home.css"
import logo from "../../logofinlas.png"

function Home() {
  return (
    <div>
      
    <div className='header'>
      <img src={logo} className="img-thumbnail" alt="Logo"/>
      <div className='headerContent'>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">

          <div className='headerContent_header'> 
            About the CLUB
          </div>
          <div className='headerContent_text'>
            <p>The young are the storehouse of aspirations, unbridled enthusiasm, raw energy and the passion to achieve goals. Energy club provide a robust platform for various sustainable energy development activities so that the combined vision and efforts take the nation forward. The former provide the young enthusiasts with all the resources in order to arose ,aware and awake the society about sustainable energy, finding alternates of non-renewable resources and providing creative and innovative ideas for overall development of mankind. Energy club has got it's connections with various environmentalist , social workers , award winning speakers and various other communities that work for energy development and society's welfare. From organizing small seminars to organizing majestic events, Energy club has got you covered!!</p>
          </div>
      </div>
        
      </div>

    </div>
    <div className='section'>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
    <div className='headerContent_header'> 
            MISSION
          </div>
          <div className='headerContent_text'>
            <p>• Educate members from interdisciplinary fields 
about energy-related science, technology, energy 
conservation and increase sustainability practices.<br/>
• Connect faculty, researchers, and students from 
different institutes with each other making a 
network of public and private partners in the 
energy industry;<br/>
• Provide opportunities to the members to 
contribute to the local and global community by
volunteering projects and activities that is by
‘energy-related advocacy'.<br/>
With these three main pillars i.e. ‘education’, ‘networking’, and 
‘practice' we aim to prepare students in various disciplines with the 
knowledge and skills to be advocates for the energy industry.</p>
          </div>
          </div>
          <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
    <div className='headerContent_header'> 
            VISION
          </div>
          <div className='headerContent_text'>
            <p>To make people aware about the importance of
conservation of energy, its sustainability and 
environment protection by organizing various 
competitions and programs.</p>
          </div>
          </div>  
      
    </div>
    </div>
  )
}


export default Home
