import React, { useState } from "react";
import {CatWeb} from './CatWeb';

function CatWebContainer() {
  const [url, setUrl] = useState("");

  function fetch_data() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=5")
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
    <CatWeb />
  );
}

export default CatWebContainer;
