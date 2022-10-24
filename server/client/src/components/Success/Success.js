import React from "react";
import Toggle from "../Toggle/Toggle";

import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";
import Logo from '../../image/logo1.png';
import Package from "../Package/Package";
import Work from "../Work/Work";

import Message from "../Signup/Message";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import { themeContext } from "../../Content";
import { useContext } from "react";

import Github from '../../image/github.png';
import Linkedin from '../../image/linkedin.png';
import Instagram from '../../image/instagram.png';
import Vector1 from '../../image/Vector1.png';
import Vector2 from  '../../image/Vector2.png';

import img1 from '../../image/img1.png';

import thumbup from '../../image/thumbup.png';
import crown from '../../image/crown.png';
import glassesimoji from "../../image/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion}  from 'framer-motion';
import Resume from '../Service/resume.pdf';
import Heartemoji from "../../image/heartemoji.png";
import Glasses from "../../image/glasses.png";
import Humble from "../../image/humble.png";
import Card from "../Card/Card";

const Success=() =>{
    const transition = {duration: 2,type: 'spring'}

    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;
  
    return(
        <>
         <div className="n-wrapper">

<div className="n-left">
<div className="n-name"><img src={Logo} alt=""/></div>
<Toggle/>
    </div>


    
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <Link spy={true} to='Navbar' smooth={true}>

                <li><NavLink to="/">Home</NavLink></li>
                </Link>

                <Link spy={true} to='Package' smooth={true}>
                <li><NavLink to="/package2">Packages</NavLink></li>
                </Link>

                <Link spy={true} to='Service' smooth={true}>
                <li><NavLink to="/service">Service</NavLink></li>
                </Link>

                <Link spy={true} to='Profile' smooth={true}>
                <li><NavLink to="/profile">Profile</NavLink></li>
                </Link>

                <Link spy={true} to='Login' smooth={true}>
                <li><NavLink to="/login">Logout</NavLink></li>
                </Link>
            </ul>
        </div>
        <NavLink to="/signup">
        <button className="button n-button">
            Contact
        </button>
        </NavLink>

</div>
</div>



<div className="main">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' :''}}>Are you a</span>
                <span>
              FOOD LOVER
                </span>
                <span style={{color: darkMode? 'white' :''}}>Now no more feeling hungry...

                </span>

            </div>
            <NavLink to="/login">
            <button className="button i-button">Order Now</button></NavLink>
            <div className="i-icons">
               
                <img src={Github} alt=""/>
                
                <img src={Linkedin} alt=""/>
                <img src={Instagram} alt=""/>
            </div>
            </div>


            <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={img1} alt="" style={{left: '3rem',top: '-2rem'}}/>
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt=""/>

            
            <motion.div 
            
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
    
            style={{top:'-4%', left: '68%'}}
           className= "floating-div">
                <FloatingDiv image={crown} txt1='Best' txt2='Quality' />
            </motion.div>
             <motion.div
              
            initial={{left: '9rem', top: '18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}

            className= "floating-div"
            style={{top: '18rem', left: '2rem' }}>
            <FloatingDiv image={thumbup} txt1='Best' txt2='Taste' />
            </motion.div>

            <div className="'blur" style={{background: "rgb(238,210,255)" }}>

            </div>

            <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height:'11rem',left:'-9rem'}}>


</div>

            </div>
            </div>


            <div className="service" method="GET">

<div className="leftpart">
    <span style={{color: darkMode? 'white' :''}}>My Awesome</span>
    <span>services</span>
    <span style={{color: darkMode? 'white' :''}}>We are providing breakfast, lunch,dinner and
    <br/>  snacks,beverages, fruits and ice-cream...
    </span>
    
    <a href={Resume} download>
    <button className="button s-button">Download</button>
    </a>
    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>


</div>

<div className="cards">
    <div style={{left: '20rem'}}>
        <Card
        emoji= {Humble}
        heading ={'Breakfast'}
        detail = {"Oats, Sandwich, Paratha"}


         />

    </div>

    <div style={{top :'12rem', left:'4rem'}}>
        <Card
        emoji= {Glasses}
        heading ={'Lunch'}
        detail = {"Biryani, Fried Chicken, Roll,"}


         />

    </div>
    <div style={{top :'19rem', left:'18rem'}}>
        <Card
        emoji= {Heartemoji}
        heading ={'Dinner'}
        detail = {"Chappati,MixVegis,Fish Curry"}


         />

    </div>
    <div className="blur s-blur2" style={{background: "var(--purple"}}></div>
</div>



</div>

          
            <Package/>
            <Work/>
           
            <Message/>
            <Feedback/>
            <Footer/>






        </>
    )
}

export default Success