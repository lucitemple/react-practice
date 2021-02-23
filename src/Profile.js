import "./App.css";

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
      <h2>{popeye.name}</h2>
      <img src={popeye.avatar} alt="Popeye Avatar" />
      <p class="properties">Location:</p>
      <p class="details">{popeye.location}</p>
      <p class="properties">Favourite food:</p>
      <p class="details">{popeye.foodType}</p>
      <p class="properties">Age:</p>
      <p class="details">{popeye.age}</p>
      <p class="properties">Likes:</p>
      <p class="details">{popeye.likes}</p>
      <p class="properties">Twitter:</p>
      <p class="details">
        <a href={popeye.twitterLink}>{popeye.twitterUsername}</a>
      </p>
    </div>
  );
}

export default Profile;
