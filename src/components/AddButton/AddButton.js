import React, {useState} from 'react';
import { Button, Container, Row } from "react-bootstrap";

const AddButton = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount (currentCount => currentCount + 1);
    };
    return (
      <Container id="addbutton">
        <Row>
          <ButtonCount handleClick={increment} />
          <p style={{ display: "inline-block", padding: 10, color: "white" }}>
            {count}
          </p>
        </Row>
      </Container>
    );
};

const ButtonCount = ({handleClick}) => (
        <Button type="button" onClick={handleClick}>
          Add
        </Button>
);

export default AddButton;