import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import homeIcon from "../../images/homeIcon.png";
import NavigationStyles from "./navigation.styles";

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
