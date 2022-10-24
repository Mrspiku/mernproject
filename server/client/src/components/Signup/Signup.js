import React ,{ useState} from "react";
import './Signup.css';
import { themeContext } from "../../Content";
import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";






const Signup =()=>{
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;


    const navigate =useNavigate();
    const [user,setUser]= useState({
      name: "", email: "",phone:"", city:"",password:"", cpassword:""
    });


  
    let name, value;
  
    const handleInputs =(e)=>{
      console.log(e);
      name =e.target.name;
      value=e.target.value;
     
      setUser({...user, [name]:value})
      

    
  
    };



 

  
    const PostData = async (e)=> {
           e.preventDefault();
         
           const {name,email,phone,city,password,cpassword} =user;
           const res = await fetch("/signup", {
            method :"POST",
            headers:{
              "Content-Type": "application/json"
  
            },
            body:JSON.stringify({
              name:name ,email:email ,phone:phone ,city:city,password:password,cpassword:cpassword
  
            })
           
  
           });
          
           const data= await res.json();
  
           if(res.status===422 || !data){
            window.alert("Invalid Registration");
  
           }else{
            window.alert("Registration successful");
  
            navigate("/login");
           }
  
    }


    return(


        <>
        <Navbar/>

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

<form method="POST">
   
     
    <div className ="input-container">
        <i className ="fa fa-user icon"></i>
        <input className ="input-field" type ="text" placeholder ="Username" name="name"
         value={user.name}
         onChange={handleInputs}
          />
    </div>
   
    <div className ="input-container">
        <i className ="fa fa-envelope icon"></i>
        <input className ="input-field" type ="email" placeholder ="Email" name="email" 
         value={user.email}
         onChange={handleInputs}/>

    </div>
 
    <div className ="input-container">
        <i className ="fa fa-phone icon"></i>
        <input className ="input-field" type ="tel" maxLength="10" placeholder ="Phone no"  name="phone" 
         value={user.phone}
         onChange={handleInputs}/>

    </div>




    <div className ="input-container">
    <i className="fa fa-map-marker icon"></i>
        <input className ="input-field" type ="text" placeholder ="Location" name="city"
             value={user.city}
             onChange={handleInputs}
              />
    </div>

    
     
    <div className ="input-container">
        <i className ="fa fa-key icon"></i>
        <input className ="input-field" type ="password" placeholder ="Password" name="password"
          value={user.password}
          onChange={handleInputs}
           />
    </div>

    
    <div className ="input-container">
        <i className ="fa fa-key icon"></i>
        <input className ="input-field" type ="password" placeholder ="Confirm Password" name="cpassword"
          value={user.cpassword}
          onChange={handleInputs}
          />
    </div>
   
    <button type ="submit" className ="btn"   onClick={PostData} >Register</button>
    <div>Already have an account <Link to="/login">Login</Link></div>
</form>
</div>

</div>

</>




    )
}

export default Signup