import React from "react";
import './Package2.css';


import P1 from "../../image/type1.png";
import P2 from "../../image/type5.png";
import P3 from "../../image/type3.png";
import P4 from "../../image/type4.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Package2 =()=>{
 

 return(
  <>

<Navbar/>
<div className="heading">
    <span>Our Main Categories</span>
    <div className="gallery">
       
         <div className="content">
            <img src={P1}  alt="" />
            <span >Snacks</span>
            <br/>
            <span>Burger, Pizza , KFC</span>
            <br/>
            <span>$10.00</span>
            <br/>
              <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
              <Link to="/signup">
              <button className=" buy-1">Buy Now</button></Link>
         </div>

         <div className="content">
            <img src={P2}  alt="" />
            <span>Meal</span>
            <br/>
            <span>Rice, Chicken, Dal</span>
            <br/>
            <span>$20.00</span>
            <br/>
              <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
              <Link to="/signup">
              <button className="buy-1">Buy Now</button></Link>
         </div>
         <div className="content">
            <img src={P3}  alt="" />
            <span>Drinks</span>
            <br/>
            <span>Juice, Cock, Mocktail</span>
            <br/>
            <span>$15.00</span>
            <br/>
              <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
              <Link to="/signup">
              <button className="buy-1">Buy Now</button></Link>
         </div>
         <div className="content">
            <img src={P4}  alt="" />
            <span>Fruits</span>
            <br/>
            <span>Chickoo, Dragonfruit, Papaya</span>
            <br/>
            <span>$50.00</span>
            <br/>
              <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
              <Link to="/signup">
              <button className="buy-1">Buy Now</button></Link>
         </div>


         



    </div>
    </div>
   
    </>

    )
}

export default Package2