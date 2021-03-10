import React from "react";
import WebNavBar from "../Navbar/Navbar.jsx";
import Profile from "../Profile/Profile.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <WebNavBar />
      <h1>React Practice Projects</h1>
      <Profile />
    </div>
  );
}
