import React from "react";
import { styles } from "./copyCatStyles.js";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, value, handleChange, name } = this.props;
    /*     const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const value = this.props.value;
    const handleChange = this.props.handleChange;
    const name = this.props.name; */

    return (
      <Container style={styles.divStyles} id="copycat">
        <h1 style={{ marginBottom: 10 }}>Copy Cat {name || "Tom"}</h1>
        <input type="text" value={value} onChange={handleChange} />
        <img
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying && value}</p>
      </Container>
    );
  }
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};
