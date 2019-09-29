import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: "Odie", age: 39 },
      { name: "Bryan", age: 35 },
      { name: "Caleb", age: 5 }
    ]
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // Don't do this: this.state.persons[0].name = 'John';
    this.setState({persons: [
      { name: newName, age: 39 },
      { name: "Sally", age: 35 },
      { name: "Caleb", age: 15 }
    ]});
  };

  changeNameHandler = (event) => {
    this.setState({persons: [
      { name: "Odie", age: 39 },
      { name: event.target.value, age: 35 },
      { name: "Caleb", age: 5 }
    ]});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Anthony')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Matthew')}
          changed={this.changeNameHandler} >My Hobbies: Gaming</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
