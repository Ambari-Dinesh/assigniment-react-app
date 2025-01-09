import React from "react";
import "./index.css";

const Contact=()=>{
    return(
       <div className="contact-main-bg" id="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-inner-bg">
          <div className="contact-sub-bg">
            <input className="contact-name" placeholder="First Name*"/>
            <div className="contact-input-bg">
                <input className="contact-email" placeholder="Mail Address"/>
                <input className="contact-phno" placeholder="Phone No"/>
            </div>
            <input className="contact-feedback" placeholder="Enter Message"/>
            <br></br>
            <button className="contact-button">Send FeedBack</button>
        </div>
        </div>
       </div>
    )
}
export default Contact