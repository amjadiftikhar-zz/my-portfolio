import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
    {
      text-align: center;
      color: white;
    }
    h2 {
        font-weight:bolder;
        text-shadow: 12px 12px 1px green;
    }    
    .btn-projectView {
        padding: 1.2em;
        background-color: #024b30;
        border-radius: .7em;
        color: white;
        margin-top: 2em; 
        text-decoration: none;
        box-shadow: 3px 4px #ffff4d;
    }
    .btn-projectView:hover {
        background-color: lightgreen;
        transform: scale(1.5);
      }
    .skillSection {
        margin-top: 6%;
        margin-bottom: 15%;
    }
    .skillsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 5%;
        background-color: white;
        padding: 2.5em;
    }
    .sectionElement {        
        background-color: #024b30;
        padding: 3em;
        color: white;
        align-content: center;
        font-weight: bolder;
        border-bottom: 1em solid #ffff4d;
        border-radius: 50%;
    }
    span {
        text-shadow: 10px 10px 1px #ffff4d;
    }
`;

function Welcome() {
    return (
        <HeaderStyle>
            <a className="btn-projectView" type="button" href="/projects">
                Click to overview Projects
            </a>
            <div className="skillSection">
                <h2>Top Skills</h2>
                <div className="skillsList">
                    <span className="sectionElement">Javascript</span>
                    <span className="sectionElement">Node JS</span>
                    <span className="sectionElement">React</span>
                    <span className="sectionElement">MySQL</span>
                    <span className="sectionElement">HTML5</span>
                    <span className="sectionElement">CSS3</span>
                    <span className="sectionElement">Express</span>
                    <span className="sectionElement">Github</span>  
                </div>                  
            </div>                    
        </HeaderStyle>
    )
}

export default Welcome
