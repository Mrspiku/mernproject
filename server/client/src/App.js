import React, {createContext,useReducer} from 'react';
import Main from "./components/Main/Main";
import Service  from "./components/Service/Service";
import Package2 from "./components/Package2/Package2";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { themeContext } from "./Content";
import { useContext } from "react";
import { BrowserRouter } from 'react-router-dom';
import Success from './components/Success/Success';
import Profile from './components/Profile/Profile';
import Logout from './components/Logout/Logout';
 
//contextAPI
 

import {

 Routes,Route
 } from "react-router-dom";

import './App.css';
import { initialState,reducer } from  '../src/reducer/UseReducer';

export const UserContext=createContext();

function App() {

  const theme= useContext(themeContext);
  const darkMode=theme.state.darkMode;

 
  
  const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <UserContext.Provider value={{state,dispatch}}>

    <BrowserRouter>
    
    <div className="App"
      style={{
        background: darkMode? 'black':'',
        color: darkMode? 'white':''
      }}
>



  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/package2" element={<Package2/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/logout" element={<Logout/>}/>

   
{/* <Navbar/> */}

</Routes>

    
    

  




     </div>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
