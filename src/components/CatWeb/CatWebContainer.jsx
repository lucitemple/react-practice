import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CatButtons from "./CatButtons";
import CatGallery from "./CatGallery";
import "../Profile/Profile.css";

export default function CatWebContainer() {
  const [category, setCategory] = useState(null);

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <Container className="App" id="catweb">
      <h2>Cat Web</h2>
      <CatButtons handleClick={handleClick} />
      <CatGallery category={category} />
    </Container>
  );
}
