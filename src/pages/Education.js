import React from 'react';
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import educationIcon from "../images/educationIcon.png";
import certificateIcon from "../images/certificateIcon.png";

const Style = styled.div`
    h3 {
        margin-top: 10%;
        margin-bottom: 7%;
        border-bottom: 3px solid darkgreen;
        background-color: white;
        padding: 0.7em;
        color: #024b30;
    }
    h4 {
        background-color: white;
        padding: 0.7em;
        color: #024b30;
        font-size: 1.2rem;
    }
    .educationSection {
        display: flex;
        justify-content: space-around;
        margin-top: 2em;
    }
    p {
        font-style: italic;
        color: darkgreen;
    }
    img {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        margin-right: 0.3em;
    }
`;

function Education() {
    return (
        <Style>
        <Container>
            <h3><img src={educationIcon} alt=""/>Education</h3>
            <h4>Full Stack Web Development</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Hack Your Future Copenhagen</h5>
                    <p>Acquired skills are, HTML/CSS, JavaScript, Node JS, MySql og React</p>
                    <p>08/2019 – 04/2020</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p>Copenhagen, Denmark</p>                        
                    </div>
                </div>  
            </div>
            <h4>Masters in Computer Systems Engineering</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Halmstad University</h5>
                    <p>01/2008 – 03/2010</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p>Halmstad, Sweden</p>                        
                    </div>
                </div>  
            </div>
            <h4>Bachelor's in Computer Science</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>AIOU Islamabad</h5>
                    <p>09/2000 – 03/2005</p>                    
                </div>
                <div className="educationContents">
                    <div>
                        <p>Islamabad, Pakistan</p>                        
                    </div>
                </div>  
            </div>
            <h3><img src={certificateIcon} alt=""/>Certifications</h3>            
            <h4>Microsoft Certified Professional, MCP ID: 8074395</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Microsoft</h5>
                    <p>MCSE, MCSA, MCP and MCTS (windows 2007))</p>
                </div>
                <div className="educationContents">
                    <div>
                        <p>Islamabad, Pakistan</p>                        
                    </div>
                </div>  
            </div>
            <h4>Cisco Academic Certifications</h4>
            <div className="educationSection">
                <div className="educationContents">
                    <p>Institute</p>
                    <h5>Cisco Academy, Halmstad</h5>
                    <p> CCNP (Cisco Certified Network Professional)</p>
                    <p>CCNA (Cisco Certified Network Associate)</p>
                </div>
                <div className="educationContents">
                    <div>
                        <p>Halmstad, Sweden</p>                        
                    </div>
                </div>  
            </div>
        </Container>
        </Style>
    )
}

export default Education
