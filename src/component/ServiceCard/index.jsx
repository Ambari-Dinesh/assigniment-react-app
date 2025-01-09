import React from "react";
import img1 from '../Images/1.png'
import "./index.css";

const ServiceCard=(props)=>{
    const {id,name,description}=props.details
    
    return(
        <li className="li-bg">
            <img src={img1}/>
            <h4>{name}</h4>
            <p className="service-para">{description}</p>
            <p>Read More -></p>
        </li>
    )
}
export default ServiceCard