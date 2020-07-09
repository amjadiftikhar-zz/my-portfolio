import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import mealsharingImage from "../images/mealsharing.jpg";
import githubIcon from "../images/github.png";
import weatherAppImage from "../images/weatherApp.jpg";
import githubSearch from "../images/githubSearch.jpg";
import giphySearch from "../images/giphySearch.jpg";
import seasonyApp from "../images/seasonyApp.jpg";
import projectsIcon from "../images/projectsIcon.png";
import externalLinkIcon from "../images/externalLinkIcon.png";
import descriptionIcon from "../images/descriptionIcon.png";

const Style = styled.div`
  h2 {
    text-align: center;
    margin-top: 2em;
    color: #024b30;    
    border-bottom: 3px solid darkgreen;
    background-color: white;
    padding: 0.5em;
  }
  h5 {
    width: 100%;
    text-align: center;
    margin-bottom: 2em;
    font-family: sans-serif;
    background-color: white;
    padding: 0.5em;
    color: #024b30;
    border-bottom: 2px solid darkgreen;
    font-size: 1.2rem;
  }
  .project-section {
    margin-top: 5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  } 
  .projectImage {
    width:20em;
    height: 20em;    
    animation: mymove 5s infinite;
  } 
  @keyframes mymove {
    50% {border-bottom-right-radius: 150px;}
  }
  .project-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid white;
    margin-bottom: 10%;
  }
  .iconSection {
    padding: 15%;
    display: flex; 
    justify-content: space-around;   
  }
  .classIcon {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
  .projectIcon {
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.3em;
    border-radius: 50%;
  }
  .classTooltip {
    display: none;
  }
  .toolTip:hover .classTooltip { 
    display: block;
    padding: 0.3em;
    position: absolute;
    font-size: 15px;
    color: white;
  }
  .classSpan {
    margin-right: 20%;
  }
  .flipBox {
    background-color: transparent;
    width: 20em;
    height: 20em;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
  }  
  .flipBox-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    text-align: center;
  }  
  .flipBox:hover .flipBox-inner {
    transform: rotateY(180deg);
  }  
  .flipBox-front, .flipBox-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }  
  .flipBox-front {
    background-color: #bbb;
    color: black;
  }  
  .flipBox-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid darkgreen;
  }
  ul li {
    padding: 0.5em;
  }
  `;

export default function Projects() {
  return (
    <Style>
    <Container>
      <h2><img className="projectIcon" src={projectsIcon} alt=""/>MY PROJECTS</h2>
      <div className="project-section">        
        <div className="project-content">
          <h5>Seasony Desktop Application</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={seasonyApp} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>Node JS</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Storybook</li>
                  <li>Express</li>
                  <li>Knex</li>
                  <li>Heroku</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>MySQL</li>
                  <li>Swagger</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/cecastosic/FP-class11">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a> 
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Click to preview</span> 
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Project Description</span> 
              </a>
            </span>
          </div>
          </div>
          <div className="project-content">
          <h5>Meal Sharing Application</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={mealsharingImage} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>Node JS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>Heroku</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
               <a className="toolTip" href="https://github.com/amjadiftikhar/myProjects">
                 <img className="classIcon toolTip" src={githubIcon} alt=""/>
                 <span className="classTooltip">Github</span>
               </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                  <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                  <span className="classTooltip">Click to preview</span>
                </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                  <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                  <span className="classTooltip">Project Description</span>
                </a>
            </span>
          </div> 
          </div>
          <div className="project-content">
          <h5>Weather Application</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={weatherAppImage} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/myProjects">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/weather-App/index.html">
                  <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                  <span className="classTooltip">Click to preview</span>
                </a>
            </span>
            <span className="classSpan">
                <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                  <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                  <span className="classTooltip">Project Description</span>
                </a>
            </span>
          </div> 
          </div>
          <div className="project-content">
          <h5>Search Github Users</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={githubSearch} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/searchUsers_github">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/searchUsers_github">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Click to preview</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Project Description</span>
              </a>
            </span>
          </div> 
          </div>
          <div className="project-content">
          <h5>Giphy Search</h5>
          <div class="flipBox">
            <div class="flipBox-inner">
              <div class="flipBox-front">
                <img className="projectImage" src={giphySearch} alt=""/>
              </div>
              <div class="flipBox-back">
                <h5>Tech stack</h5>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Github</li>
                  <li>Git</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="iconSection">
            <span className="classSpan">
              <a className="toolTip" href="https://github.com/amjadiftikhar/my_SPAs/tree/master/giphy-App">
                <img className="classIcon toolTip" src={githubIcon} alt=""/>
                <span className="classTooltip">Github</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://htmlpreview.github.io/?https://github.com/amjadiftikhar/my_SPAs/blob/master/giphy-App/index.html">
                <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
                <span className="classTooltip">Click to preview</span>
              </a>
            </span>
            <span className="classSpan">
              <a className="toolTip" href="https://my-meal-sharing-app.herokuapp.com/">
                <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
                <span className="classTooltip">Project Description</span>
              </a>
            </span>
          </div> 
        </div>
      </div>      
    </Container>
    </Style>    
  );
}
