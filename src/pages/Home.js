import React from 'react';
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import ProfileImage from "../components/ProfileImage";
// import Education from "../pages/Education";
import styled from "styled-components";

const Styles = styled.div`
 .hello {
    
  }
`;

export default function Home() {
  return (
     <Styles> 
       <Header/>
       <ProfileImage/>
       <div className="hello">
         <Welcome/>        
       </div>
    </Styles>    
  );
}
