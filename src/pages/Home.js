import React from 'react';
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import ProfileImage from "../components/ProfileImage";

export default function Home() {
  return (
    <>
      <Header/>
      <ProfileImage/>
      <Welcome/> 
    </> 
  );
}
