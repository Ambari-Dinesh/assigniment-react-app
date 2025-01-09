import React from "react";
import "./index.css";
import image3 from '../Images/image3.png'
import social from '../Images/social.png'

const Footer =()=>{
    return(
        <footer className="footer-bg">
            <div className="footer-logo-bg">
                <img src={image3} className="footer-logo"/>
                <p className="footer-para">orporate clients and leisure travelers has
                been relying on Groundlink for dependable</p>
                <img src={social} className="footer-social"/>
            </div>
            <div className="footer-inner-bg">
                <h3 className="footer-head">Useful Links</h3>
                <p>About Us</p>
                <p>Services</p>
                <p>Contacts</p>
            </div>
            <div className="footer-inner-bg">
                <h3 className="footer-head">Products</h3>
                <p>Listings</p>
                <p>details</p>
                <p>Enquiry Form</p>
            </div>
            <div className="footer-inner-bg">
                <h3 className="footer-head">Contact</h3>
                <p>About Us</p>
                <p>Services</p>
                <p>Contacts</p>
            </div>
        </footer>
    )
}
export default Footer