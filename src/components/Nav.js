import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ jsonData }) {
  
  return (
    <ul className="Nav">
      {jsonData.pages ? jsonData.pages.map((key) => {
        return (
          <li key={key.title} className="link">
            <NavLink to={key.slug} >
              {key.title} 
            </NavLink>
          </li>
        )
      }) : null }
    </ul>
  )
}

export default Nav;

