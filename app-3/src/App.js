import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor() {
      super();
      this.state = {                                                                                                                                                                         dFood: '',
        filterString: '',  
        food: ['spaghetti', 'bologna', 'cheese', 'ice cream', 'sushi']
      };
    }
    handleChange(filter){
      this.setState({filterString: filter});
    }
    render() { 
    let foodsToDisplay = this.state.food
      .filter((e, i) => {
        return e.includes(this.state.filterString);
    })
    .map((e, i) => {
      return <h3 key={i}>{e}</h3>;
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <input type='text' onChange={e => this.handleChange(e.target.value)}/>
        <h2>{foodsToDisplay}</h2>
        </p>
      </div>
    );
  }
}


export default App;
