import React from 'react'
import "./Footer.css"
import bit from "../../pngs/R.png"
import PropTypes from 'prop-types';
import insta from "../../pngs/insta.png"
import linkedin from "../../pngs/linkedin.png"
import meta from "../../pngs/meta.png"
import youtube from "../../pngs/youtube.png"
import twitter from "../../pngs/twitter.png"

function Footer() {
  return (
    <div className='footer'>
    <div className='clgInfo'>
      <a href="https://bitdurg.ac.in/" target="_blank"> <img src={bit} alt="logo"/>
      </a>
      <div className='clgInfo_text'>
        
      <span   >BHILAI INSTITUTE OF TEHNOLOGY</span>
      <span style={{fontSize : '0.8rem'}}>(Seth Balkrishan Memorial) Estd. 1986</span>
      </div>
    </div>

    <div className='clubInfo'>
    <span>Copyright <a href="" className='link'> © energyclubbit2022@gmail.com</a> | All Rights Reserverd </span>
    {/* <p>Contact: +91-xxxxxxxxxx</p> */}
    <div className='networks'>
      
    <a href="https://www.instagram.com/energyclub_bitd/?igshid=YmMyMTA2M2Y%3D" target="_blank" className="favicons"><img src={insta} alt="insta"/></a>
    <a href="https://www.linkedin.com/in/energy-club-386710262/" target="_blank" className="favicons"><img src={linkedin} alt="linkedin"/></a>
    <a href="https://www.facebook.com/people/Energy-Club-BITD/100086650383153/" target="_blank" className="favicons"><img src={meta} alt="meta"/></a>
    <a href="https://twitter.com/EnergyClub_BITD?t=BL9pQI0dyMVEZ1E2Rvre5A&s=09" target="_blank" className="favicons"><img src={twitter} alt="twitter"/></a>
    <a href="https://www.youtube.com/channel/UC0z8sbIomP0P6BqxPHxe2FA" target="_blank" className="favicons"><img src={youtube} alt="youtube"/></a>
    </div>
    </div>

    <div className='devInfo'>
      <span>Developed By: Devansh Shrivastava</span>
      <p>Email: devanshshrivastava07@gmail.com</p>
    </div>
    </div>
  )
}

export default Footer
