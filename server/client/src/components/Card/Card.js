import React from "react";
import "./Card.css";
import { themeContext } from "../../Content";
import { useContext } from "react";



const Card = ({emoji,heading,detail})=>{
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;

    return (

       <div className="card">
        <img src={emoji} alt=""/>
        <span>{heading}</span>
        <span style={{color: darkMode? 'white' :''}}>{detail}</span>
        <button className="c-button">LEARN MORE</button>
       </div>
    )
}

export default Card