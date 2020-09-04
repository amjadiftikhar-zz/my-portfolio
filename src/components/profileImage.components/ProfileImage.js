import React from 'react';
import Image from 'react-bootstrap/Image';
import profilePic from "../../images/profilePic.png";
import githubIcon from "../../images/github.png";
import linkedinIcon from "../../images/linkedin.png";
import ImageStyle from "./profileImage.styles"


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
