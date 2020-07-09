import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";
import homeIcon from "../images/homeIcon.png";

const NavigationStyles = styled.div`
  .navbar {
    background-color: #024b30;
    padding: 2em;
  }
  .navbar-brand, .navbar-nav .nav-link, .toggle {
    color: white;
  
    &:hover {
      color: red;
    }
  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: white;
    padding: 0.4em;
    }
  }
`;

export default function NavigationBar() {
  return (
    <NavigationStyles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img className="classIcon" src={homeIcon} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationStyles>
  );
}
