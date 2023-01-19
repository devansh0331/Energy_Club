import React from 'react'
import PropTypes from 'prop-types';
import insta from "../../pngs/insta.png"
import linkedin from "../../pngs/linkedin.png"
import meta from "../../pngs/meta.png"
import "./Card.css"


function Card(props) {
  return (
    <div className="card" Style={{width: '8rem'}}>
  <img src={props.pic} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.position}</p>
    <div className='networks'>
      
    <a href={props.instalink} target="_blank" className="favicons"><img src={insta} alt="insta"/></a>
    <a href={props.linkedlink} target="_blank" className="favicons"><img src={linkedin} alt="linkedin"/></a>
    <a href={props.metalink} target="_blank" className="favicons"><img src={meta} alt="meta"/></a>
    </div>
  </div>
</div>
  )
}

Card.defaultProps = {
    name: "Random Name",
    pic : "Picture Not available",
    position : "Position Not available"
 }
 // Validating prop types
Card.propTypes = {
    name: PropTypes.string,
    pic: PropTypes.string,
    position: PropTypes.string
 }
export default Card
