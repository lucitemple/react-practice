import React from "react";
//import ReactDOM from "react-dom";
import { CopyCat } from "./CopyCat";

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: true,
      input: "",
      name: "Ben",
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleTape = this.toggleTape.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const value = this.state.input;
    const handleChange = this.handleChange;
    const name = this.name;

    return (
      <CopyCat
        copying={copying}
        toggleTape={toggleTape}
        value={value}
        handleChange={handleChange}
        name={name}
      />
    );
  }
}

//ReactDOM.render(<CopyCatContainer />, document.getElementById("app"));
export default CopyCatContainer;
