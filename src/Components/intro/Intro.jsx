import React, { useContext } from 'react';
import './Intro.css';
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import crown from "../../img/crown.png"
import thumbup from "../../img/thumbup.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../Floating/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';


const Intro = () => {

const transition ={duration :2,type:'spring'}

const theme=useContext(themeContext)
const darkMode=theme.state.darkMode;


  return (
    <div className="intro">
<div className="i-left">
<div className="i-name">
    <span style={{color:darkMode?'white':''}}>Hi! I am</span>
    <span>Nitish Jaiswal</span>
    <span>I'm excited to share my portfolio with you, showcasing my skills and projects as a junior React developer. With a strong foundation in JavaScript and a passion for building dynamic user interfaces.</span>
</div>
<button className='button i-button'>Hire me</button>
<div className="i-icons">
    <a href='https://github.com/nitishjaiswal2002'><img src={Github} alt='github'/></a>
   <a href='https://www.linkedin.com/in/nitish-jaiswal-096a02243/'><img src={LinkedIn} alt='linkedin'/></a>
   <a href='https://www.instagram.com/pitterparks/'><img src={Instagram} alt='Instagram'/></a>
</div>
</div>
<div className="i-right">
<img src={vector1}alt='vector1'/>
<img src={vector2}alt='vector'/>
< img src={boy} alt='boy'/>
<motion.img 
initial={{left:'-36%'}}
whileInView={{left:'-24%'}}
transition={transition}
src={glassesimoji}
 alt=''/>

<motion.div 
initial={{top:'-4%',left:'74%'}}
whileInView={{left:'68%'}}
transition={transition}
style={{top:'-4%', left:"68%"}}>
<FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
</motion.div>
<motion.div 
initial={{top:'9rem',left:'18rem'}}
whileInView={{left:'0rem'}}
transition={transition}
style={{top:'18rem', left:'0px'}}>
  <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
</motion.div>
{/*blurr divs*/}
<div className='blur' style={{background:"rgb(238 210 255)"}}></div>
<div className='blur' style={{background:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
    </div>
    </div>
  )
}

export default Intro