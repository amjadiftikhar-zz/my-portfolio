import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";
import facebookIcon from "../images/facebookIcon.jpg";
import twitterIcon from "../images/twitterIcon.png";
import emailIcon from "../images/emailIcon.png";
import phoneIcon from "../images/phoneIcon.png";


const Style = styled.div`
  h3 {
    text-align: center;
    margin-top: 5%;
    color: #024b30;    
    border-bottom: 3px solid darkgreen;
    background-color: white;
    padding: 0.5em;
  }
  .classContacts{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .classIcon {
    width: 4em;
    height: 4em;
    border-radius: 50%;
    margin-top: 5%;
    margin-bottom: 13%;
    color: white;
    font-weight: bold;
  }
  .classTooltip {
    display: none;
  }
  .toolTip:hover .classTooltip { 
    display: block;
    padding: 0.3em;
    position: absolute;
    font-size: 15px;
  }
 span {
   padding: .6em;
   line-height: 1.5em;
 }
`;
export default function Contact() {
  return (
    <Style>
    <Container>
      <h3>Contact Details</h3>
      <div className="classContacts">
        <a className="classIcon toolTip" href="mailto:amjadiftikhar_99@hotmail.com">
          <img className="classIcon toolTip" src={emailIcon} alt=""/>
          <span>
            Email
          </span>
          <span className="classTooltip">amjadiftikhar_99@hotmail.com</span>            
        </a>
        <a className="classIcon" href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
          <img className="classIcon" src={linkedinIcon} alt=""/>
          <span>
             Linkedin
          </span>           
        </a>
        <a className="classIcon" href="https://github.com/amjadiftikhar">
          <img className="classIcon" src={githubIcon} alt=""/>
          <span>
            Github
          </span>             
        </a>
        <a className="classIcon toolTip" href="#">
          <img className="classIcon toolTip" src={phoneIcon} alt=""/>
          <span>
            Phone
          </span> 
          <span className="classTooltip">+45 52 92 09 45</span>
        </a>
        <a className="classIcon" href="https://www.facebook.com/Parati4mg/">
          <img className="classIcon" src={facebookIcon} alt=""/>
          <span>
            Facebook
          </span> 
        </a>
        <a className="classIcon" href="https://twitter.com/parati_4mg">
          <img className="classIcon" src={twitterIcon} alt=""/>
          <span>
            Twitter
          </span> 
        </a>
      </div>
    </Container>
    </Style>
  );
}
