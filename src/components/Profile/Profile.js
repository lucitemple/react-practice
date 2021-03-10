import "../Profile/Profile.css";
import { Container, Card } from "react-bootstrap";

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
    <Container className="container" id="popeye">
      <h2>Profile</h2>
      <Card style={{ width: "26rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={popeye.avatar} alt="Popeye Avatar" />
          <Card.Title className="title">{popeye.name}</Card.Title>
          <ul>
            <li>
              <Card.Subtitle className="properties col-sm-5">
                Location:
              </Card.Subtitle>
              <Card.Text className="details col-sm-7">
                {popeye.location}
              </Card.Text>
            </li>
            <li>
              <Card.Subtitle className="properties col-sm-5">
                Favourite food:
              </Card.Subtitle>
              <Card.Text className="details col-sm-7">
                {popeye.foodType}
              </Card.Text>
            </li>
            <li>
              <Card.Subtitle className="properties col-sm-5">
                Age:
              </Card.Subtitle>
              <Card.Text className="details col-sm-7">{popeye.age}</Card.Text>
            </li>
            <li>
              <Card.Subtitle className="properties col-sm-5">
                Likes:
              </Card.Subtitle>
              <Card.Text className="details col-sm-7">{popeye.likes}</Card.Text>
            </li>
            <li>
              <Card.Subtitle className="properties col-sm-5">
                Twitter:
              </Card.Subtitle>
              <Card.Link className="details col-sm-7"
                href={popeye.twitterLink}>
                {popeye.twitterUsername}
              </Card.Link>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
