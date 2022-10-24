import React ,{useEffect, useState} from "react";


import './Profile.css';
import { themeContext } from "../../Content";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import './Profile.css';

const Profile=()=>{

const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const navigate =useNavigate();

    const [userData, setUserData] = useState({});
    

    const callProfilePage = async()=>{
        try{
            const res=await fetch('/profile' ,{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" :"application/json"
                },
                credentials: "include"    
            });
            const data=await res.json();
            console.log(data);
            setUserData(data);
            if(!res.status ===200){
                const error=new Error(res.error);
                throw error;

            }

        }catch(err){
            console.log(err);
            navigate('/login');

        }

    }

    useEffect(()=>{
        callProfilePage();
        
    },[] );
    

     

    return(

        <>
        
        <div className="service">

<div className="leftpart">
    <span style={{color: darkMode? 'white' :''}}>Enjoy your Favorite</span>
    <span >FOOD</span>
    <span style={{color: darkMode? 'white' :''}}>Dear customer register yourself to avail all the benefits 
    <br/>   
    </span>
    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>


</div>
<div className="c-right">

<form method="GET">


<div className ="input-container">
<i className ="fa fa-user icon"></i>
<input className ="input-field" type ="text" value={userData.name} placeholder ="{userData.name}" name="name"
 
  />
</div>

<div className ="input-container">
<i className ="fa fa-envelope icon"></i>
<input className ="input-field" type ="email" value={userData.email} placeholder ="{userData.email}" name="email" 
 />

</div>

<div className ="input-container">
<i className ="fa fa-phone icon"></i>
<input className ="input-field" type ="tel" maxLength="10" value={userData.phone} placeholder ="{userData.phone}"  name="phone" 
/>

</div>




<div className ="input-container">
<i className="fa fa-map-marker icon"></i>
<input className ="input-field" type ="text" value={userData.city} placeholder ="{userData.city}" name="city"
    
      />
</div>




<div className ="input-container">
<i className ="fa fa-key icon"></i>
<input className ="input-field" type ="password" value={userData.password} placeholder ="{userData.password}" name="password"
 
   />
</div>


<div className ="input-container">
<i className ="fa fa-key icon"></i>
<input className ="input-field" type ="password" value={userData.cpassword} placeholder ="{userData.cpassword}" name="cpassword"
 
  />
</div>


<button type ="submit" className ="btn" >Update</button>

</form>
</div>

</div>

        </>
    )
}

export default Profile