import React from 'react';
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import ProfileImage from "../components/ProfileImage";
import styled from "styled-components";

const Styles = styled.div`
 {
    
  }
`;

export default function Home() {
  return (
     <Styles> 
       <Header/>
       <ProfileImage/>
         <Welcome/> 
    </Styles>    
  );
}
