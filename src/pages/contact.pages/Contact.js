import React from 'react';
import {Container} from "react-bootstrap";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";
import facebookIcon from "../../images/facebookIcon.jpg";
import twitterIcon from "../../images/twitterIcon.png";
import emailIcon from "../../images/emailIcon.png";
import phoneIcon from "../../images/phoneIcon.png";
import Style from "./contact.styles";

export default function Contact() {
  return (
    <Style>
    <Container>
      <h3>Contact Details</h3>
      <div className="classContacts">
        <div className="classContents">
          <a className="classIcon toolTip" href="mailto:amjadiftikhar_99@hotmail.com">
            <img className="classIcon toolTip" src={emailIcon} alt=""/>
            <span>
              Email
            </span>
            <span className="classTooltip">amjadiftikhar_99@hotmail.com</span>            
          </a>
        </div>
        <div className="classContents"> 
          <a className="classIcon" href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
            <img className="classIcon" src={linkedinIcon} alt=""/>
            <span>
               Linkedin
            </span>           
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon" href="https://github.com/amjadiftikhar">
            <img className="classIcon" src={githubIcon} alt=""/>
            <span>
              Github
            </span>             
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon toolTip" href="#">
            <img className="classIcon toolTip" src={phoneIcon} alt=""/>
            <span>
              Phone
            </span> 
            <span className="classTooltip">+45 52 92 09 45</span>
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon" href="https://www.facebook.com/Parati4mg/">
            <img className="classIcon" src={facebookIcon} alt=""/>
            <span>
              Facebook
            </span> 
          </a>
        </div>
        <div className="classContents">
          <a className="classIcon" href="https://twitter.com/parati_4mg">
            <img className="classIcon" src={twitterIcon} alt=""/>
            <span>
              Twitter
            </span> 
          </a>
        </div>
      </div>
    </Container>
    </Style>
  );
}
