import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap/";
import "./App.css";

function CatGallery(props) {
  return (
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
  );
}

export default CatGallery;
