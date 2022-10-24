import React from "react";
import './Footer.css';

import wave from "../../image/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
// import { themeContext } from "../../Content";
// import { useContext } from "react";


const Footer =()=>{
    // const theme= useContext(themeContext);
    // const darkMode=theme.state.darkMode;


    return (


        

        <div className="footer">
            <img src={wave} alt="" style={{width: '100%'}}/>

            <div className="f-content">
                <span>priyank96325@gmail.com</span>
                <ul style={{listStyleType: 'none'}}>
                    <li>About US </li>
                    <li>FAQ</li>
                    <li>All Branches</li>
                    <li>Certificates</li>
                    <li>Director Message</li>
                </ul>
                <div className="f-icons">
                    <Insta color='white' size='3rem' />
                    <Facebook color='white' size='3rem' />
                    <Linkedin color='white' size='3rem' />
                </div>

            </div>
        </div >

    )
}

export default Footer