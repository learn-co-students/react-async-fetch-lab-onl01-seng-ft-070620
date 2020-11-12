import React, { Component, Fragment } from "react";

export default class App extends Component {
  state = {
    peopleInSpace: [],
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          peopleInSpace: data.people,
        });
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.peopleInSpace.map((person) => person.name)}
      </Fragment>
    );
  }
}
