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

export default function CatButtons({ handleClick }) {
  return (
    <div>
      {categories.map((category) => (
        <Button
          size="lg"
          key={category.id}
          onClick={() => handleClick(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
