import React from 'react';
import { Button } from 'react-bootstrap';
import CatAPI from './CatAPI';

const CatButtons = () => {

    return (
      <div>
        <Buttons handleClick={CatAPI} />
      </div>
    );
};

const Buttons = ({handleClick}) => (
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