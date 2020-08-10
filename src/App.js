import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./index.css"
import {BrowserRouter, Route, Redirect} from "react-router-dom"
import Home from './Home'
import Contact from "./Contact"
import About from "./About"
import Service from "./Service"
import Navbar from "./Navbar"

const App=()=>{
    return(
    <>
       <Navbar/>
        <switch>
            
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about"  component={About}/>
            <Route exact path="/service"  component={Service}/>
            
        </switch>
        
    </>
    );
    
}
export default App;

