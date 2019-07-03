import React, { Component } from "react";
import App from "../App";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  componentDidMount() {
    const techs = localStorage.getItem("techs");
    if (techs) {
      this.setState({
        techs: JSON.parse(techs)
      });
    }
  }

  componentWillUnmount() {}

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
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleClick(tech)}
            />
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
