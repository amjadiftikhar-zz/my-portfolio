import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
    {
      text-align: center;
      color: white;
    }
    h3 {
        margin-top: 7%;
    }    
    .btn-projectView {
        padding: 1em;
        background-color: lightgray;
        border-radius: .7em;
        color: black;
        margin-top: 2em; 
        text-decoration: none;
    }
    .btn-projectView:hover {
        background-color: lightgreen;
        transform: scale(1.3);
      }
    .skillSection {
        margin-top: 6%;
        margin-bottom: 15%;
        margin: 2%;
    }
    .skillsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 2%;
        margin-bottom 10%;
        background-color: white;
        padding: 2.5em;
    }
    .sectionElement {        
        background-color: #024b30;
        padding: 3em;
        color: white;
        align-content: center;
        font-weight: bolder;
        border-bottom: 1.3em solid lightgray;
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
                <h3>Top Skills</h3>
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
