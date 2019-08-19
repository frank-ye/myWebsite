import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Frank', age: 23, belt: 'white', id: 1 },
      { name: 'Jon', age: 23, belt: 'black', id: 2 },
      { name: 'Mitchu', age: 22, belt: 'black', id: 3 },
      { name: 'Victor', age: 22, belt: 'black', id: 4 },
    ]
  }

addNinja = (ninja) => {
  ninja.id = Math.random() * 10;
  let ninjas = [...this.state.ninjas, ninja]
  this.setState({
    ninjas: ninjas
  })
}
  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <p>Welcome to the shadow realm</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
