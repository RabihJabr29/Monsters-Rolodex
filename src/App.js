import { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          searchPlaceholder="Search Monster!"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value.toLocaleLowerCase() };
    });
  };
}

export default App;
