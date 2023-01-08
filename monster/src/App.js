import { useState, useEffect } from "react";
import CardList from "./components/card-list/cardlist";
import SearchBox from "./components/search-box/searchbox";
import "./App.css";

// use state gives us back an array of two values

const App = () => {
  // the web re-renders when the state value changes
  const [searchBy, setSearchBy] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]); // inital value is an empty array
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); //

  const handleInputChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchBy(searchField);
  };
  // Accepts two arguments, a callback function and array of dependecies
  // When an array of dependencies is changed, the callback function will run

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchBy);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchBy]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setMonsters(data);
  };

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
