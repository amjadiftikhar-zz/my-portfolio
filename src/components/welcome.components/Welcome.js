import React from 'react';
import HeaderStyle from "./welcome.styles";

function Welcome() {
    return (
        <HeaderStyle>
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
            <a className="btn-projectView" type="button" href="/projects">
                Click to overview Projects
            </a>                   
        </HeaderStyle>
    )
}

export default Welcome
