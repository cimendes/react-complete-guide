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
        otherState: 'some other value'
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

    render() {
        const style = {
            backgroundColor: 'white',
            fond: 'inherit',
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
                    onClick={() => this.switchNameHandler('Tininha')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    // This syntax is better to use than the arrow function one to pass on arguments
                    click={this.switchNameHandler.bind(this, "Inês")}
                    changed={this.newChangeHandler}
                > My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
