import React from "react";
import ServiceCard from '../ServiceCard'
import "./index.css";

const AllServices=[
    {
        id:1,
        name:"Bulding Materials",
        description:"United Buildpro Pvt Ltd’s e-commerce platform offers a hassle-free way to source top-quality building supplies from the comfort of your home."
    },
    {
        id:2,
        name:"Joint Ventures",
        description:"United Buildpro Pvt Ltd specializes in fostering successful partnerships through joint development ventures."
    },
    {
        id:3,
        name:"RERA Consultants",
        description:"Navigating the complexities of real estate transactions is easier with United Buildpro’s expert consultants by your side."
    },
    {
        id:4,
        name:"2D & 3D Constultant",
        description:"Designing a building starts with a vision, and at United Buildpro, we help you visualize that vision with precision."
    },
    {
        id:5,
        name:"Construction & Interior",
        description:"Your dream space deserves the best execution, and that’s where United Buildpro Pvt Ltd excels."
    },{
        id:6,
        name:"Land Development",
        description:"At United Buildpro Pvt Ltd, we transform undeveloped land into thriving spaces through our comprehensive land development services."

    }
]

const Services=()=>{
    return(
      <div className="service-main-bg" id="service-section">
        <h1 className="service-head">Our Services</h1>
        <ul className="service-ul">
            {
                AllServices.map(each=>(
                    <ServiceCard key={each.id} details={each}/>
                ))
            }
        </ul>
      </div>
    )
}
export default Services