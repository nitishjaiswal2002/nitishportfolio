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
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
         <li>Home</li>
         </Link>
         <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
         <li>Services</li>
         </Link>
         <Link spy={true} to='Experience' smooth={true} activeClass="activeClass">
         <li>Experience</li>
         </Link>
         <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
         <li>Portfolio</li>
         </Link>
         <Link spy={true} to='testimonial' smooth={true} activeClass="activeClass">
         <li>Testimonial</li>
         </Link>
            </ul>
        </div>
    </div>
    <button className="button n-button" >Contact</button>
</div>
    )
}
 export default Navbar;