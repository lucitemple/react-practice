import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './Navbar.css';

export default function WebNavBar() {
  return (
    <Navbar sticky="top" className="App-header" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link href="#popeye">Popeye Profile</Nav.Link>
        <Nav.Link href="#catweb">Cat Web</Nav.Link>
        <Nav.Link href="#copycat">Copy Cat</Nav.Link>
      </Nav>
    </Navbar>
  );
}
