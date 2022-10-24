import React, { useState} from "react";
import './Signup.css';
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import { themeContext } from "../../Content";
import { useContext } from "react";





const Message =()=>{
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;


    const form = useRef();
    const [done,setDone] =useState(false)
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ze9db88', 'template_bgno6ti', form.current, 'g9p-ScPl_0gAUa7Cw')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


    return(

    


        <div className="service">

        <div className="leftpart">
            <span style={{color: darkMode? 'white' :''}}>Dear Customer</span>
            <span>Globally</span>
            <span style={{color: darkMode? 'white' :''}}>We would Love to hear from you 😍😍😍 
            <br/>   
            </span>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>


        </div>
        <div className="c-right">

<form ref={form} onSubmit={sendEmail}>
   
     

    <div className ="input-container">
        <i className ="fa fa-envelope icon"></i>
        <input className ="input-field" type ="email" placeholder ="Email" name="email"/>
    </div>
    <div className ="input-container">
        <i className ="fa fa-phone icon"></i>
        <input className ="input-field" maxLength="10" type ="tel" placeholder ="Phone no" name="phone"/>
    </div>

    <div className ="input-container">
        
        <textarea name="message" className="user" placeholder="Message" />
    </div>
    <button type ="submit" className ="btn">Send </button>
    <span>{done && "Thanks for contacting us"}</span>
    
</form>
</div>

</div>




    )
}

export default Message