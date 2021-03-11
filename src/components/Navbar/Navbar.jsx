import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navbar.css";

export default function WebNavBar() {
  return (
    <Navbar
      sticky="top"
      className="App-header"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Nav className="mr-auto">
        <Nav.Link href="#addbutton">Add Button</Nav.Link>
        <Nav.Link href="#popeye">Popeye Profile</Nav.Link>
        <Nav.Link href="#catweb">Cat Web</Nav.Link>
        <Nav.Link href="#copycat">Copycat</Nav.Link>
        <Nav.Link href="#tictac">Tic-tac-toe</Nav.Link>
      </Nav>
    </Navbar>
  );
}
