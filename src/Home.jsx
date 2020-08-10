import React from "react"
import Navbar from "./Navbar"
import ani from  "./images/animate.png"
import {NavLink} from "react-router-dom"

const Home=()=>{
    return(
        <>
            <h3 className="ui">Getting started with <br/><span id="name">Aman vyas</span> </h3>
            <h6 className="ji">start with us enroll fast</h6>
            <NavLink to="/service"><button className="op" type="submit">Get Started</button></NavLink>  
            <img id="hellj" src={ani} alt="some"/>
        </>
    )
}
export default Home