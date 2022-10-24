import React from "react";
import './Work.css';


import MD from '../../image/Md.png';
import Haldi from '../../image/Haldi.svg';
import Lays from '../../image/lays.png';
import MTR from '../../image/MTR.jpeg';
import ITC from '../../image/ITC.png';
import { themeContext } from "../../Content";
import { useContext } from "react";

import {motion} from 'framer-motion';
import { NavLink } from "react-router-dom";




const Work =()=>{
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;
    
    return(

        <div className="work">

          <div className="leftpart">
                <span style={{color: darkMode? 'white' :''}}>Brands Collaborated</span>
                <span>Heavy Discounts & Offers</span>
                <span style={{color: darkMode? 'white' :''}}>Balaji, Too Yum, McCain, ITC Limited, Kissan,
                <br/>  MTR,Amul, Britania,Parle
                <br/>
                Nestle,	PepsiCo, Inc.,Anheuser-Busch InBev
                <br/>
                Coca-Cola Co.,Agro Tech Foods Ltd. ,Prataap Snacks Limited...
                </span>
                <NavLink to="/login">
               
                <button className="button s-button">Book Now</button></NavLink>
               
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>


            </div>


            <div className="w-right">
                <motion.div 
                initial={{rotate: 45}}
                whileInView={{rotate: 0}}
                viewport={{margin: '-40px'}}
                transition={{duration: 3.5, type: 'spring'}}
                className="w-maincircle">
                    <div className="w-seccircle">
                        <img src={ITC}  style={{height: '100px', width:'140px'}} alt=""/>
                    </div>
                    <div className="w-seccircle">
                        <img src={Haldi} style={{height: '160px', width:'170px'}}alt=""/>
                    </div>

                    <div className="w-seccircle">
                        <img src={Lays} style={{height: '170px', width:'170px' }} alt=""/>
                    </div>
                    <div className="w-seccircle">
                        <img src={MTR} style={{height: '120px', width:'100px'}}alt=""/>
                    </div>
                    <div className="w-seccircle">
                        <img src={MD} alt="" style={{height: '100px', width:'150px'}}/>
                    </div>
                </motion.div>

                <div className="w-backcircle bluecircle"></div>
                <div className="w-backcircle yellowcircle"></div>
                


            </div>
        </div>

    )
}

export default Work