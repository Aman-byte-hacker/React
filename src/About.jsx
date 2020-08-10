import React from "react"
import Nani from "./images/naniredddy.jpeg"
import Aman from "./images/aman.jpeg"
const About=()=>{
    return(
        <>
            <h1 className="king">About Us</h1>
            <h5 className="admin">Hi this is aman vyas <span id="lk">The</span> admin of this website</h5>

            <img className="aman" src={Aman}/>
            <h5 className="adm">Hi this is Nani reddy <span id="lk">The</span> Manager of this website</h5>
            <img className="aman" src={Nani}/>
            <h3 className="cap">These capsules can save your ass <p>&#128540;</p></h3>
        </>
    )
}

export default About