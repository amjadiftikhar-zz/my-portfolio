import styled from "styled-components";

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

export default Style;