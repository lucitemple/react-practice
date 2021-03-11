import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap/";
import "./catstyles.css";

const api = "d4cecf82-7a66-4503-8c49-1b7bc95dc5c5";
const url = "https://api.thecatapi.com/v1/images/search";
const getUrl = (category) =>
  `${url}?category_ids=${category}&api_key=${api}&limit=5`;

export default function CatGallery({ category }) {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch(getUrl(category))
      .then((response) => response.json())
      .then((images) => setImages(images));
  }, [category]);

  if (!images) {
    return <h2>Loading!</h2>;
  }
  if (category == null) {
    return <p>Please select a category for cat pics</p>;
  }

  return (
    <Row className="cats">
      {images.map((image) => (
        <Image src={image.url} key={image.id} alt="" />
      ))}
    </Row>
  );
}
