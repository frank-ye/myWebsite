import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Frank', age: 23, belt: 'white', id: 1 },
      { name: 'Jon', age: 23, belt: 'black', id: 2 },
      { name: 'Mitchu', age: 22, belt: 'black', id: 3 },
      { name: 'Victor', age: 22, belt: 'black', id: 4 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <p>Welcome to the shadow realm</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
