import React, {useState} from 'react';

const AddButton = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount (currentCount => currentCount + 1);
    };
    return (
      <div>
        <Button handleClick={increment} />
        <p style={{ display: "inline-block", padding: 10, color: "white", }}>{count}</p>
      </div>
    );
};

const Button = ({handleClick}) => (
        <button type="button" onClick={handleClick}>
          Add
        </button>
);

export default AddButton;