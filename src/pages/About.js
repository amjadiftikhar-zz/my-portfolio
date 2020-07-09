import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";

const Style = styled.div`
  {    
    margin-bottom: 13%;
  }
  h3 {
    margin-top: 5%;
    color: #024b30;
    background-color: white;
    padding: 0.4em;
  }
  p {
    font-family: sans-serif;
    color: white;
    font-size: 17px;
  }
`;

export default function About() {
  return (
    <Style>
    <Container>
      <h3>About me!</h3>
      <p>
        <br/>I am a curious and driven Backend Developer with focus on web development. I have worked with several diﬀerent tech stacks and particularly excels in JavaScript, React, Node JS, HTML, CSS and MySql. I have been contributing to open source projects to learn new development techniques and deepen my knowledge in Full-stack domain. I am looking to discover new ﬁelds in the domain of tech and development by joining a progressive, fast paced team.
      </p>      
    </Container>
    </Style>
  );
}
