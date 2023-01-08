import { Component } from "react";

import CardList from "./components/card-list/cardlist";
import SearchBox from "./components/search-box/searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchBy: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState(() => {
      return { monsters: data };
    });
  }

  handleInputChange = (e) => {
    const searchBy = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchBy };
    });
  };

  render() {
    const { monsters, searchBy } = this.state;
    const { handleInputChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchBy);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={handleInputChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
