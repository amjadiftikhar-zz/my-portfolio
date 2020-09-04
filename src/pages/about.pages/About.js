import React from 'react';
import {Container} from "react-bootstrap";
import Style from "./about.styles";

export default function About() {
  return (
    <Style>
    <Container>
      <h3>About me!</h3>
        <p>
          <br/>I am a Software Developer based in Denmark. 
          I have developed an academic and some hobby projects recently. 
          I have worked with several tech stacks and particularly excels in JavaScript, 
          React, Node JS, HTML, CSS and MySql.<br/> 
          <br/>I have been contributing to open source projects to learn new development  techniques and deepen my knowledge in Full-stack domain. I am looking to discover 
          new ﬁelds in the domain of tech and development. <br/><br/>
          Just take a look at my portfolio work and lets see if we can work 
          together on your next project. 
        </p>      
    </Container>
    </Style>
  );
}
