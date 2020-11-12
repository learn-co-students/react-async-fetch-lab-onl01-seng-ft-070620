import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }

  componentDidMount() {
  fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => console.log(data))
  }
}
