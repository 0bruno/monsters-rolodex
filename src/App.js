import { useState } from 'react';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';
import CardList from './components/card-list/card-list.component';

export default function App() {
  console.log('Render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  console.log(searchField);

  fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json().then((users) => setMonsters(users))
  );

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-tittle">Monsters Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );

  /*constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldMonsters: '',
    };
  }*/

  /* componentDidMount() {
    
  }
  
    console.log('Render app');
    //optmizations destructuring
    const { monsters, searchFieldMonsters } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFieldMonsters);
    });

     <CardList monsters={filteredMonsters}></CardList>

    */
}
