import React from "react";
import "./index.css";
import Header from "../Header";
import image2 from '../Images/image2.png'
import About from '../About'
import Services from "../Services";
import Projects from "../Projects";
import Work from "../Work";
import Contact from '../Contact'
import Footer from "../Footer";


const Home = () => {
  return(
    <>
    <div className="main-bg">
        <Header/>
        <div className="home-bg">
            <div className="home-inner-bg">
            <p className="home-bg-para">GREAT EXPERIENCE IN BUILDING</p>
            <h1 className="home-bg-head">You Dream,
            We’ll Make It Real</h1>
            <p className="home-bg-para-cont">All types of work – from designing and laying the Foundation
            finishing and commissioning. Tight deadlines, reasonable.</p>
            <button className="home-button">Contact Us</button>
        </div>
        <img src={image2} className="home-image"/>
        </div>
        
    </div>
    <About/>
    <Services/>
    <Projects/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default Home