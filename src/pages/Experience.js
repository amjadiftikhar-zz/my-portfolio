import React from 'react';
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import workExperienceIcon from "../images/workExperienceIcon.png";

const Style = styled.div`
    h3 {
        margin-top: 2em;        
        border-bottom: 3px solid darkgreen;
        background-color: white;
        padding: 0.7em;
        color: #024b30;
    }
    img {
        width: 1em;
        height: 1em;
        margin-right: 0.3em;
        border-radius: 50%;
    }
    h4 {
        margin-top: 3em;
        background-color: white;
        padding: 0.6em;
        color: darkgreen;
        font-size: 1.2rem;
    }
    .experienceSection {
        display: flex;
        justify-content: space-around;
        margin-top: 2em;
    }
    p {
        font-style: italic;
        color: darkgreen;
    }
`;

function Experience() {
    return (
        <Container>
        <Style>
            <h3><img src={workExperienceIcon} alt=""/>Work Experience</h3>
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
