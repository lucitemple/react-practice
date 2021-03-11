import React from "react";
import WebNavBar from "../Navbar/Navbar.jsx";
import Profile from "../Profile/Profile.js";
import AddButton from "../AddButton/AddButton.js";
import CatWebContainer from "../CatWeb/CatWebContainer.jsx";
import CopyCatContainer from "../CopyCat/CopyCatContainer";
import Game from "../TicTacToe/TicTacToe";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <WebNavBar />
      <h1>React Practice Projects</h1>
      <AddButton />
      <Profile />
      <CatWebContainer />
      <CopyCatContainer />
      <Game />
    </div>
  );
}
