import React from "react";
import './Main.css';
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

import { themeContext } from "../../Content";
import { useContext } from "react";
import {motion}  from 'framer-motion';

import Package from "../Package/Package";
import Work from "../Work/Work";

import Message from "../Signup/Message";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Main = ()=>{
    const transition = {duration: 2,type: 'spring'}

    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;
  
    return (
        <>

    <Navbar/>
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


           

          
            <Package/>
            <Work/>
           
            <Message/>
            <Feedback/>
            <Footer/>

            
        

        
        </>
    )

}

export default Main