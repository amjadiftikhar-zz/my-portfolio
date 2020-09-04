import React from 'react';
import Container from "react-bootstrap/Container";
import workExperienceIcon from "../../images/workExperienceIcon.png";
import Style from "./experience.styles";

function Experience() {
    return (
        <Container>
        <Style>
            <h3><img src={workExperienceIcon} alt=""/>Work Experience</h3>
            <h4>Student Volunteer</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p>Organization</p>
                    <h5>Hack Your Future Copenhagen</h5>
                    <p>08/2019 – 04/2020</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p>
                            Copenhagen, Denmark
                        </p>
                    </div>
                </div>  
            </div>
            <h4>Cab Rider</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p>Company</p>
                    <h5>Taxa 4x35 Copenhagen</h5>
                    <p>02/2014 – 05/2020</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p>
                            Copenhagen, Denmark
                        </p>
                    </div>
                </div>  
            </div>
            <h4>Transcriber & IT Supporter</h4>
            <div className="experienceSection">
                <div className="experienceContents">
                    <p>Company</p>
                    <h5>SpaceTech Medical Transcription Company Pvt.Ltd</h5>
                    <p>04/2006 – 05/2007</p>                    
                </div>
                <div className="experienceContents">
                    <div>
                        <p>
                            Rawalpindi, Pakistan
                        </p>                            
                    </div>
                </div>  
            </div>    
        </Style>
        </Container>
    )
}

export default Experience;
