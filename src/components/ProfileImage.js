import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from "styled-components";
import profilePic from "../images/profilePic.png";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";

const ImageStyle = styled.div`
    .profilePic {
      margin-top: -2em;
      border: 1.5px solid green;
      width: 55%;
      height: 55%;     
    }
    .leftSection {
        display: flex;
        flex-direction: column; 
        width: 25%;
        align-items: center;        
    }
    h5{
        margin-top: 0.7em;
        color: white;
        font-size: 2vw;
    }
    .classContact {
        display: flex;
        flex-wrap: wrap;
        padding: 5%;
        border-bottom: 2px solid white;
    }
    img {
        width:2em;
        height: 2em;
        border-radius: 50%;
    }
    .classContact a {
       margin-left:20%;
      margin-right:20%;
    }
`;

function ProfileImage() {
    return (
        <ImageStyle>
        <div className="leftSection"  >
            <Image className="profilePic" src={profilePic} roundedCircle/>
            <h5>Amjad Iftikhar</h5>
            <div className="classContact">
                <a href="https://www.linkedin.com/in/amjad-iftikhar-545aa331/">
                    <img src={linkedinIcon} alt=""/>
                </a>
                <a href="https://github.com/amjadiftikhar"> 
                    <img src={githubIcon} alt=""/>
                </a>
            </div>                
        </div>
        </ImageStyle>
    )
}

export default ProfileImage;
