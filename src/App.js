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
            { id: '13232', name: 'Max', age: 28 },
            { id:'321421', name: 'Manu', age: 29 },
            { id: '3213213', name: 'Stephanie', age: 26 }
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

    newChangeHandler = (event, id) => {
        // there's also findIndex, that recieves the index od the state
        const personIndex = this.state.persons.find(p => {
            return p.id === id;});

        const person = {...this.state.persons[personIndex]}; // spread operator important!

        //alternative
        // const person = Object.assign({},this.state.persons[PersonIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons; // returns a pointer
        const persons = [...this.state.persons]; // spread operator - better approach without mutating the original state
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () =>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            fond: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',

        ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black',
            }
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        // return JSX element
                        // key prop important!!!!
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id} // use something unique
                            changed={(event) => this.newChangeHandler(event, person.id)}
                        />
                    })}
                </div>
            );

            // style.backgroundColor='red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        }

        const classes = []; // "red bold" valid array of classes -> STRING!
        if (this.state.persons.length <= 2) {
            classes.push('red') // classes = ["red"]
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ["red", "bold"]
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton
                    alt={this.state.showPersons}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledButton>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

// higher order component
export default App;
