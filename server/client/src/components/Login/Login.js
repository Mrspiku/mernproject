import React,{useState} from "react";
import './Login.css';
import { themeContext } from "../../Content";
import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../../App";



const Login =()=>{
    const theme= useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const {state,dispatch} = useContext(UserContext);

    const navigate =useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  
    const loginUser= async (e)=> {
           e.preventDefault();
        
           const res = await fetch('/login', {
            method :"POST",
            headers:{
              "Content-Type": "application/json"
  
            },
            body:JSON.stringify({
             email:email,password:password
  
            })
  
           });

           const data= await res.json();
  
           if(res.status===400 || !data){
            window.alert("Invalid details");
  
           }else{
            dispatch({type:"USER" , payload: true})
            window.alert("Login successful");
  
            navigate("/");
           }
  
        }
  


    return(


        
<>
<Navbar/>


        <div className="service">

        <div className="leftpart">
            <span style={{color: darkMode? 'white' :''}}>Want To Eat Something</span>
            <span >YUMMY</span>
            <span style={{color: darkMode? 'white' :''}}>Dear customer login here and get all the service
            <br/>   
            </span>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>


        </div>
        <div className="c-right">

        <form method="POST">
   
     

    <div className ="input-container">
        <i className ="fa fa-envelope icon"></i>
        <input className ="input-field" type ="email" placeholder ="Email" name="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}  required/>
    </div>
  
    <div className ="input-container">
        <i className ="fa fa-key icon"></i>
        <input className ="input-field" type ="password" placeholder ="Password" name="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}  required
         />
    </div>

  
    <button type ="submit" className ="btn"  onClick={loginUser}>Login</button>
    <div>Don't have an account <Link to="/signup">Signup</Link></div>
   
</form>
</div>

</div>


</>



    )
}

export default Login