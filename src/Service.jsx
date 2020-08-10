import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Card from "./Card"
import webde from "./images/webdev.jpg"
import cyber from './images/cyber.jpg'
import meta from "./images/meta.jpg"
import wifi from "./images/wifi.jpg"
import hacking from "./images/download.jpg"
import Android from './images/android.png'
const Service=()=>{
    return(
        <>
        <div className="main">
            <div className="null">
                <img className="hi" src={webde} alt="img"/>
                <h1 className="jiu">Web development</h1>
                
                <p className="para">we are there with web development just enroll in it and glow your future with us we are taking you from zero to advance</p>
                <p className="pop"><button className="btn-enroll" type="submit">Enroll Now</button></p>
            </div> 
            <div className="null">
                <img className="hello" src={cyber} alt="img"/>
                <h1 className="jiu">Cyber Security</h1>
                
                <p className="para">we are there with cyber security just enroll in it and glow your future with us we are taking you from zero to advance</p>
                <p className="pop"><button className="btn-enroll" type="submit">Enroll Now</button></p>
            </div>
            <div className="null">
                <img className="hello" src={meta} alt="img"/>
                <h1 className="jiu">Metaspliot </h1>
                
                <p className="para">we are there with Metaspliot Framework just enroll in it and glow your future with us we are taking you from zero to advance</p>
                <p className="pop"><button className="btn-enroll" type="submit">Enroll Now</button></p>
            </div>
            
            </div>
            <div className="bro">
            <div className="bro">
            <div className="null">
                <img className="hello" src={wifi} alt="img"/>
                <h1 className="jiu">Wifi Hacking</h1>
                
                <p className="para">we are there with wifi Hacking just enroll in it and glow your future with us we are taking you from zero to advance</p>
                <p className="pop"><button className="btn-enroll" type="submit">Enroll Now</button></p>
            </div></div><br/>
            <div className="lop">
            <div className="bro">
                <div className="null">
                    <img className="hello" src={hacking} alt="img"/>
                    <h1 className="jiu">Ethical Hacking</h1>
                
                    <p className="para">we are there with ethical hacking just enroll in it and glow your future with us we are taking you from zero to advance</p>
                    <p className="pop"><button className="btn-enroll" type="submit">Enroll Now</button></p>
            </div></div>
            <div className="bro">
            <div className="null">
                <img className="hello" src={Android} alt="img"/>
                <h1 className="jiu">Termux Hacking</h1>
                
                <p className="para">we are there with hacking with android just enroll in it and glow your future with us we are taking you from zero to advance</p>
                <p className="pop"><button className="btn-enroll" type="submit">Enroll Now</button></p>
            </div></div>
            </div>
            </div>
            
            );
           
            </>
               
           
           
     
    )
}

export default Service