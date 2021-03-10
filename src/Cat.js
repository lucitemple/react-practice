import React, { useState } from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap/";

import "./App.css";

function Cat() {
  const [url, setUrl] = useState("");

  function fetch_data() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(
        (res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Request Failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonRes) => {
        setUrl(jsonRes[0].url);
      });
  }

  return (
    <Container>
      <h1>Cat Web</h1>
      <nav className="cat___options">
        <Button value="boxes" size="lg" onClick={fetch_data("boxes")}>
          boxes
        </Button>{" "}
        <Button size="lg" onClick={fetch_data("hats")}>
          hats
        </Button>{" "}
        <Button size="lg" onClick={fetch_data("clothes")}>
          clothes
        </Button>{" "}
      </nav>
      <Container className="gallery">
        <Row>
          <Col xs={6} md={4}>
            <Image src={url} thumbnail alt="" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={url} thumbnail alt="" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={url} thumbnail alt="" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={url} thumbnail alt="" />
          </Col>
          <Col xs={6} md={4}>
            <Image src={url} thumbnail alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Cat;
