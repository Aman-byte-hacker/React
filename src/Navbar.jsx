import React from "react"
import ReactDOM from "react-dom"
import logo from "./images/logoji.png"
import {NavLink} from "react-router-dom"

const Navbar=()=>{
  return(
    <>
    <img className="go" src={logo}/>
    <div className="containeri">
      <nav className="navbar">
      
        <ul className="nav-i">
          
          
          <li><NavLink to="">Home</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      </div>
    </>
  )
}
export default Navbar