import React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Marquee({ background, headline, subhead, cta }) {
  
  return (
    
    <div>
      <img 
        className="background" 
        src={`${process.env.PUBLIC_URL}/backgrounds/${background}`} 
        alt=""
      />
        <div className="content">
          <h1 className="headline">{headline}</h1>
          <p className="subhead">{subhead}</p>
        </div>
        <footer className="footer">
          <h4 className="cta">{cta}</h4>
          <p className="lets-talk">LET'S TALK.</p>
          <FontAwesomeIcon 
            className="font-icon" 
            size="sm" 
            style={{color: "orange"}} 
            icon={faArrowRight} 
          />
        </footer> 
    </div>
  )
}

export default Marquee;
