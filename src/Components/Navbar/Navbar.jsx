import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";


const Navbar = () =>{



    return(
  <div  className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Nitish</div>
        <Toggle/>
    </div>
    <div className="right">
        <div className="n-list">
            <ul style={{listStyleType:"none"}}>
                <Link spy={true} to={Navbar} smooth={true} activeClass="activeClass">

         <li>Home</li>
         </Link>
         <li>Services</li>
         <li>Experience</li>
         <li>Portfolio</li>
        <li>Testimonial</li>
            </ul>
        </div>
    </div>
    <button className="button n-button" >Contact</button>
</div>
    )
}
 export default Navbar;