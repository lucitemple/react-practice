import "./App.css";
import Card from "react-bootstrap/Card";

/* Task instructions: Create a profile card for Popeye! Create a React component that will display all the data about Popeye.  Avatar should display as picture, twitterUsername should be a link to a Twitter account.  */

const popeye = {
  name: "Popeye the Sailor",
  location: "Las Vegas",
  foodType: "Spinach",
  age: 44,
  likes: "Sailing the seas of React!",
  twitterUsername: "popeyeTheSailor",
  twitterLink: "https://twitter.com/popeyethesailor",
  avatar:
    "https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432",
};

function Profile() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={popeye.avatar} alt="Popeye Avatar" />
          <Card.Title>{popeye.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text class="properties">Location:</Card.Text>
          <Card.Text class="details">{popeye.location}</Card.Text>
          <Card.Text class="properties">Favourite food:</Card.Text>
          <Card.Text class="details">{popeye.foodType}</Card.Text>
          <Card.Text class="properties">Age:</Card.Text>
          <Card.Text class="details">{popeye.age}</Card.Text>
          <Card.Text class="properties">Likes:</Card.Text>
          <Card.Text class="details">{popeye.likes}</Card.Text>
          <Card.Link href="{popeye.twitterLink}">
            {popeye.twitterUsername}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
