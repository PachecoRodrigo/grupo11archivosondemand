import React from 'react' 
import logo from "../assets/images/logoFOD.png"

function SideBar (){

    return(
        <React.Fragment>
            
		<div className = 'sidebar'>
            <a href= "/">
            <img className = 'imagen' src= {logo} alt = "inicio" />
            </a>
            <hr className= 'linea'></hr>


        </div>
		
        
        </React.Fragment>
    )
}

export default SideBar;