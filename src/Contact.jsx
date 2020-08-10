import React from "react"


const Contact=()=>{
    return(
        <>
            <div className="coo">
            <h1 className="uy">Contact Us</h1></div>
            <p className="binod"><input className="lion" required type="text" placeholder="Enter Your Name"/></p>
            <p className="binod"><input className="lion" type="email" placeholder="Enter Your Email "/></p>
            <p className="binod"><input className="lion" type="phone" placeholder="Enter Your Phone"></input></p>
            <p className="binod"><input className="nani" type="Text" placeholder="Enter Your Message"></input></p>
            <p className="mn"><button className="btn-sub" type="submit">Submit</button></p>
        </>
    )
}
export default Contact