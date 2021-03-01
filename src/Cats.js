
import { Container, Image, Row, Col } from "react-bootstrap/";
import CatButtons from './CatButtons';
import "./App.css";

function Cats() {
  return (
    <Container>
      <h1>Cat Web</h1>
      <CatButtons />
      <Container className="gallery" >
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432"
              thumbnail
            />
          </Col>
        </Row>
        </Container>
    </Container>
  );
}

export default Cats;