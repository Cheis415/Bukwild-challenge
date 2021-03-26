import React from 'react';
import "../index.css";
import logo from "../abc_logo.svg"

function Logo() {
  return (
    <div className="logo-container">
     <img  className="logo" src={logo} alt="new"></img>
    </div>
  )
}

export default Logo;