import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Odie", age: 39 },
      { name: "Bryan", age: 35 },
      { name: "Caleb", age: 5 }
    ]
  });

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // Don't do this: this.state.persons[0].name = 'John';
    setPersonsState({persons: [
      { name: "John", age: 39 },
      { name: "Sally", age: 35 },
      { name: "Caleb", age: 15 }
    ]});
  };

  console.log(personsState)

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Gaming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;


