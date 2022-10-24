import React from "react";
import './Service.css';
import Heartemoji from "../../image/heartemoji.png";
import Glasses from "../../image/glasses.png";
import Humble from "../../image/humble.png";
import Card from "../Card/Card";
import Resume from './resume.pdf';
import { themeContext } from "../../Content";
import { useContext } from "react";

import Navbar from "../Navbar/Navbar";








const Service =()=>{
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

    // const navigate =useNavigate();

    // const callServicePage = async()=>{
    //     try{
    //         const res=await fetch('/service' ,{
    //             method: "GET",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type" :"application/json"
    //             },
    //             credentials: "include"    
    //         });
    //         const data=await res.json();
    //         console.log(data);
    //         if(!res.status ===401){
    //             const error=new Error(res.error);
    //             throw error;

    //         }

    //     }catch(err){
    //         console.log(err);
    //         navigate('/login');

    //     }

    // }

    // useEffect(()=>{
    //     callServicePage();
        
    // },[] );
    
    return( 
        <>
        <Navbar/>
       
        <div className="service">

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


        </>

    )
}

export default Service