import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CatButtons from "./CatButtons";
import CatGallery from "./CatGallery";

function CatWebContainer() {
  const [category, setCategory] = useState(1);

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <Container id="catweb">
      <CatButtons handleClick={handleClick} />
      <CatGallery category={category} />
    </Container>
  );
}

export default CatWebContainer;
