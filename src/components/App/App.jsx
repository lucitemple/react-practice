import React from "react";
import WebNavBar from "../Navbar/Navbar.jsx";
import Profile from "../Profile/Profile.js";
import AddButton from "../AddButton/AddButton.js";
//import CatWeb from "../CatWeb/CatWeb.jsx";
import CopyCatContainer from "../CopyCat/CopyCatContainer";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <WebNavBar />
      <h1>React Practice Projects</h1>
      <AddButton />
      <Profile />
{/*       <CatWeb /> */}
      <CopyCatContainer />
    </div>
  );
}
