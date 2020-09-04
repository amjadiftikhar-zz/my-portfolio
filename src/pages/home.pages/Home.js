import React from 'react';
import Header from "../../components/header.components/Header";
import Welcome from "../../components/welcome.components/Welcome";
import ProfileImage from "../../components/profileImage.components/ProfileImage";

export default function Home() {
  return (
    <>
      <Header/>
      <ProfileImage/>
      <Welcome/> 
    </> 
  );
}
