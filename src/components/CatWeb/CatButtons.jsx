import { Button } from "react-bootstrap";

const categories = [
  {
    name: "Hats",
    id: 1,
  },
  {
    name: "Boxes",
    id: 5,
  },
  {
    name: "Clothes",
    id: 15,
  },
];

const CatButtons = ({ handleClick }) => {
  return (
    <div>
      {categories.map((category) => (
        <Button
          size="lg"
          onClick={() => handleClick(category.id)}
          key={category.id}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CatButtons;
