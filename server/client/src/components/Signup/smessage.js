import React, {useEffect, useState} from "react";
import './Signup.css';
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import { themeContext } from "../../Content";
import { useContext } from "react";

import {Link} from "react-router-dom"





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




  const [userData, setUserData] = useState({email:"", phone:"",message:""});
  

  const callMessagePage = async()=>{
      try{
          const res=await fetch('/message' ,{
              method: "GET",
              headers: {
                
                  "Content-Type" :"application/json"
              },
               
          });
          const data=await res.json();
          console.log(data);
          setUserData({...userData,email:data.email, phone:data.phone});
          if(!res.status ===200){
              const error=new Error(res.error);
              throw error;

          }

      }catch(err){
          console.log(err);
      
      }

  }

  useEffect(()=>{
      callMessagePage();
      
  },[] );

//storing data
  const handleInputs =(e) =>{
    const name= e.target.name;
    const value= e.target.value;
    setUserData({...userData,[name]:value});
  }

  //send data to  the backend

const messageform= async(e)=>{
    e.preventDefault();
    const {email,phone,message}=userData;
    const res= await fetch('/message',{
 method: "POST",
 headers: {
    "Content-Type" : "application/json"

 },
 body: JSON.stringify({
    email,phone,message
 })
  
    });
    const data= await res.json();
    if(!data){
        console.log("No Message");

    }
    else{
        alert("Message Sent");
        setUserData({...userData,message: ""})
    }
}






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

<form ref={form} onSubmit={sendEmail} method="POST">
   
     

    <div className ="input-container">
        <i className ="fa fa-envelope icon"></i>
        <input className ="input-field" type ="email" placeholder ="Email" name="email" value={userData.email}  onChange={handleInputs}/>
    </div>
    <div className ="input-container">
        <i className ="fa fa-phone icon"></i>
        <input className ="input-field" maxLength="10" type ="tel" placeholder ="Phone no" name="phone" value={userData.phone} onChange={handleInputs} />
    </div>

    <div className ="input-container">
        
        <textarea name="message" className="user"  value={userData.message}  placeholder="Message" onChange={handleInputs} />
    </div>
    <button type ="submit" className ="btn" onClick={messageform}>Send </button>
    <span>{done && "Thanks for contacting us"}</span>
    
</form>
</div>

</div>




    )
}

export default Message