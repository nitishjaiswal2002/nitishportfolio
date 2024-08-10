import React from 'react'
import './Works.css'
import Upworks from '../../img/Upwork.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Fiverr from '../../img/fiverr.png';
import Shopify from '../../img/Shopify.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


const Works = () => {
  const theme=useContext(themeContext)
const darkMode=theme.state.darkMode;
  return (
    <div className='works'>
      <div className='awesome'>
<span style={{color:darkMode?'white':''}}>Works for All these</span>
<span>Brands & Clients</span>
<span>Designing and implementing UI components using React.<br/>
Writing, testing, debugging, and optimizing code for performance.<br/>
Collaborating with team members, designers, project managers, and clients.<br/>
Staying up-to-date with the latest React trends and best practices.</span>
<button className='button s-button'>Hire me</button>
<div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
</div>


{/*left side*/}
<div className="w-right">
<motion.div 
initial={{rotate:45}}
whileInView={{rotate:0}}
viewport={{margin:'-40px'}}
transition={{transition:3.5,type:'spring'
}}
className="w-mainCircle">
<div className="w-secCircle">
  <img src={Upworks} alt='upworks'/>
</div>
<div className="w-secCircle">
  <img src={Fiverr} alt='fiverr'/>
</div>
<div className="w-secCircle">
  <img src={Amazon} alt='amazon'/>
</div>
<div className="w-secCircle">
  <img src={Shopify} alt='shopify'/>
</div>
<div className="w-secCircle">
  <img src={Facebook} alt='facebook'/>
</div>
</motion.div>
{/*background circle*/}
<div className="w-backCircle blueCircle"></div>
<div className="w-backCircle yellowCircle"></div>
</div>
    </div>
  )
}

export default Works