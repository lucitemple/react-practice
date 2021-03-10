import React, { useEffect, useState } from "react";
//import { Image } from "react-bootstrap/";
import "../Profile/Profile.css";

const api = "d4cecf82-7a66-4503-8c49-1b7bc95dc5c5";
const url = "https://api.thecatapi.com/v1/images/search";
const getUrl = (category) =>
  `${url}?category_ids=${category}&api_key=${api}&limit=5`;

function CatGallery(category) {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch(getUrl(category))
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request Failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((images) => {
        setImages(images);
      });
  }, [category]);

  if (!images) {
    return <h2>Loading!</h2>;
  }

  return (
    <div className="gallery">
      {images.map((image) => (
        <img src={image.url} key={image.id} thumbnail alt="" />
      ))}
    </div>
  );
}

export default CatGallery;
