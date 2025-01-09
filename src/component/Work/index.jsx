import React from "react";
import "./index.css";
import img1 from '../Images/01.png'
import content from '../Images/content.png'
import img3 from "../Images/img3.png"

const Work=()=>{
    return(
        <div className="work-bg">
            <div className="work-sub-bg">
                <h1>How We Work</h1>
                <div className="work-inner-bg">
                    <div className="work1-bg">
                        <img src={img1}/>
                        <h4>Collaborative Design Process</h4>
                        <p>We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning.</p>
                    </div>
                    <div className="work1-bg">
                        <img src={content}/>
                        <h4>Collaborative Design Process</h4>
                        <p>We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning.</p>
                    </div>
                    <div className="work1-bg">
                        <img src={img3}/>
                        <h4>Collaborative Design Process</h4>
                        <p>We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Work