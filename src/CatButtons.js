import React, {useState} from 'react';
import { Button } from "react-bootstrap";

const CatButtons = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount (currentCount => currentCount + 1);
    };
    return (
      <div>
        <Buttons handleClick={increment} />
      </div>
    );
};

const Buttons = ({ handleClick }) => (
  <div>
    <Button size="lg" onClick={handleClick}>
      boxes
    </Button>{" "}
    <Button size="lg" onClick={handleClick}>
      hats
    </Button>{" "}
    <Button size="lg" onClick={handleClick}>
      clothes
    </Button>{" "}
  </div>
);

export default CatButtons;