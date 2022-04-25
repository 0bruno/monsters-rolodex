import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/cardList-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldMonsters: '',
    };
  }

  //criando a função para evitar que toda hora que renderizar ela seja criada para o evento
  //assim cria uma unica vez.
  onSearchChange = (event) => {
    const searchFieldMonsters = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchFieldMonsters };
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
    );
  }
  render() {
    console.log('Render app');
    //optmizations destructuring
    const { monsters, searchFieldMonsters } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFieldMonsters);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        ></input>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
