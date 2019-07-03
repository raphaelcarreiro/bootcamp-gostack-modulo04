import React, { Component } from "react";
import App from "../App";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["NodeJs", "ReactJs", "React Native"]
  };

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      newTech: "",
      techs: [...prevState.techs, prevState.newTech]
    }));
  };

  handleClick = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleClick(tech)}>Remover</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
        </form>
      </>
    );
  }
}

export default TechList;
