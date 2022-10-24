import React from "react";
import './Navbar.css';
import Toggle from "../Toggle/Toggle";

import {Link} from 'react-scroll';
import { NavLink } from "react-router-dom";
import Logo from '../../image/logo1.png';
import { useContext } from "react";
import { UserContext } from "../../App";




const Navbar =() =>{
    const {state,dispatch} = useContext(UserContext);
    const RenderMenu=()=>{
        if(state){
            return(
                <>

<Link spy={true} to='Navbar' smooth={true}>
        
        <li><NavLink to="/">Home</NavLink></li>
        </Link>

        <Link spy={true} to='Package' smooth={true}>
        <li><NavLink to="/package2">Packages</NavLink></li>
        </Link>

        <Link spy={true} to='Service' smooth={true}>
        <li><NavLink to="/service">Service</NavLink></li>
        </Link>

     
        <Link spy={true} to='Logout' smooth={true}>
        <li><NavLink to="/logout">Logout</NavLink></li>
        </Link>
                </>
            )

        }else{
            return(
                <>
<Link spy={true} to='Navbar' smooth={true}>
        
        <li><NavLink to="/">Home</NavLink></li>
        </Link>

        <Link spy={true} to='Package' smooth={true}>
        <li><NavLink to="/package2">Packages</NavLink></li>
        </Link>

        <Link spy={true} to='Service' smooth={true}>
        <li><NavLink to="/service">Service</NavLink></li>
        </Link>

<Link spy={true} to='Signup' smooth={true}>
        <li><NavLink to="/signup">Signup</NavLink></li>
        </Link>

        <Link spy={true} to='Login' smooth={true}>
        <li><NavLink to="/login">Login</NavLink></li>
        </Link>

                </>
            )
        }

    }


    return (
        <div className="n-wrapper">

        <div className="n-left">
        <div className="n-name"><img src={Logo} alt=""/></div>
      <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <RenderMenu/>

                        
                    </ul>
                </div>
                <NavLink to="/profile">
                <button className="button n-button">
                    Profile

                </button>
                </NavLink>

        </div>
        </div>



    )
}

export default Navbar