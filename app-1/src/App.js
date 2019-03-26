import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React 2 Afternoon Project</h2>
        </div>
        <p className="App-intro">
          <input type='text' onChange={this.handleChange} value={this.state.value}/>
        </p>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;

