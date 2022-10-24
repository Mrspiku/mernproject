import React from "react";
import './Feedback.css';
import P1 from "../../image/location.png";
// import { themeContext } from "../../Content";
// import { useContext } from "react";



const Feedback = ()=>{
  // const theme= useContext(themeContext);
  // const darkMode=theme.state.darkMode;

    return(

    
      <div className="wrapper">
        <span>OUR CUSTOMER FEEDBACK</span>
  
        <div className="feedback-container">
        <div className="box">
                <img src={P1} alt=""/>
                <br/>
                <span>Puja from Bihar</span>
                <br/>
                <span>Healthy and Tasty Food</span>
                <br/>
                 <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
            </div>
            <div className="box">
                <img src={P1} alt=""/>
                <br/>
                <span>Priyanka from MP</span>
                <br/>
                <span>Loved the Biryani</span>
                <br/>
                <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
            </div>

            <div className="box">
                <img src={P1} alt=""/>
                <br/>
                <span>Ranjit from kolkata</span>
                <br/>
                <span>Fresh Fruits and Juice</span>
                <br/>
                <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
            </div>
            <div className="box">
                <img src={P1} alt=""/>
                <br/>
                <span>Bijay from Dhanipur</span>
                <br/>
                <span>Fried Chicken Ordered and Chilled with Netflix.</span>
                <br/>
                <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
            </div>

            <div className="box">
                <img src={P1} alt=""/>
                <br/>
                <span>Ajay from Delhi</span>
                <br/>
                <span>The price of meal is better than others</span>
                <br/>
                <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
            </div>

            <div className="box">
                <img src={P1} alt=""/>
                <br/>
                <span>Tina from Mumbai</span>
                <br/>
                <span>Can you add Korean Dishes. BTW amazin service</span>
                <br/>
                <ul style={{listStyleType: 'none'}}>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star checked"></i> </li>
                <li><i className="fa fa-star "></i> </li>
              </ul>
            </div>

</div>
         </div>
      

        

    )
}

export default Feedback