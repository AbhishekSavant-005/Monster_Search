import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { CardList } from "./Components/card-list/card-list";
import { Search } from './Components/search-box/search'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users })
      );
  }

  render() { 

    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return (
      <div className="App">
        <h1 class="header">Monsters Rolodex</h1>
        <Search 
            placeholder="search monster"
            handleChange = {e => 
              this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
