//Using react hooks
/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Inês', age: 27},
            {name: 'Tina', age: 18}
        ]
    });

    const [otherState, setOtherState] = useState('some other value')

    const switchNameHandler = () => {
        //console.log("was clicked!")
        // DON'T DO THIS: this.state.persons[0].name = "Nocas"
        setPersonsState({persons: [
                {name: 'Inês', age: 27},
                {name: 'Tininha', age: 18}
            ]})
    };

    return (
      <div className="App">
        <h1>Casper is a turd.</h1>
          <p>But a nice one.</p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: complaining</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      </div>
    );
    //  return React.createElement('div', {className: App},
    //      React.createElement('h1', null, 'Casper is a SUPER turd!'));
}

export default app;
*/

//Using react classes
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 27 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };

    newChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 27 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };

    togglePersonsHandler = () =>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            fond: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        // return JSX element
                        return < Person
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
