import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from "styled-components";
import profilePic from "../images/profilePic.png";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";

const ImageStyle = styled.div`
    .profilePic {
      margin-top: -5em;
      margin-bottom:2em;
      border: 1.5px solid green;
      width: 60%;
      height:60%; 
    }
    .leftSection {
        display: flex;
        flex-direction: column; 
        width: 20%;
        align-items: center;        
    }
    h5 {
        margin-top: 0.7em;
        color: white;
    }
    .classContact {
        display: flex;
        flex-wrap: wrap;
        padding: 3%;
        border-bottom: 2px solid white;
    }
    img {
        width:2em;
        height: 2em;
        border-radius: 50%;
    }
    .classContact a {
       margin-left:10px;
       margin-right:10px;
    }
`;

function ProfileImage() {
    return (
        <ImageStyle>
        <div className="leftSection"  >
            <Image className="profilePic" src={profilePic} roundedCircle/>
            <h5>Amjad Iftikhar</h5>
            <div className="classContact">
                <a href="https://github.com/amjadiftikhar"> 
                    <img src={githubIcon} alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                    <img src={linkedinIcon} alt=""/>
                </a>
            </div>                
        </div>
        </ImageStyle>
    )
}

export default ProfileImage;
