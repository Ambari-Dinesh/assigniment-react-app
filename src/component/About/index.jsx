import React from "react";
import img from '../Images/img.png'
import './index.css'

const About=()=>{
    return(
       <div className="main-about-bg" id="about-section">
         <div className="about-image-bg">
            <img src={img} className="about-image"/>
         </div>
         <div className="about-cont">
           <h1 className="about-head">About Us</h1>
           <p className="about-para">
               Everyone has a vision of their dream home or workspace — a space filled with special features and 
                lasting impressions. At United Buildpro Pvt Ltd, we bring those dreams to life. Even if you’re unsure 
                of what you want, our team of experts knows the right questions to ask to uncover your desires and create
                a space that’s uniquely yours.Every project we undertake is a harmonious blend of our client’s vision and 
                our design expertise. We focus on creating spaces that not only meet expectations but exceed them, offering 
                a seamless integration of style and functionality.eneral term meaning the art and science to form objects systems
            </p>
            <button className="about-button">Know More</button>
         </div>
       </div>
    )
}
export default About