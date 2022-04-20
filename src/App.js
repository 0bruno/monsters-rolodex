import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Linda', id: '21we21we' },
        { name: 'Jackie', id: '22we21we' },
        { name: 'Frank', id: '23we21we' },
        { name: 'Andrei', id: '24we21we' },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>;
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
