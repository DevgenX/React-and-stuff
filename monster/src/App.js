import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchBy: "",
    };
  }

  handleInputChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState(() => {
      return { monsters: data };
    });
  }

  render() {
    const { monsters, searchBy } = this.state;
    const { handleInputChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchBy);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="text"
          placeholder="search monsters"
          onChange={handleInputChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
