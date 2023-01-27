import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/cardlist";
import SearchBox from "./components/search-box/searchbox";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchBy, setSearchBy] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); //

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchBy(searchField);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchBy);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchBy]);

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
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchBy: "",
//     };
//   }

//   async componentDidMount() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     this.setState(() => {
//       return { monsters: data };
//     });
//   }

//   handleInputChange = (e) => {
//     const searchBy = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchBy };
//     });
//   };

//   render() {
//     const { monsters, searchBy } = this.state;
//     const { handleInputChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchBy);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={handleInputChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
