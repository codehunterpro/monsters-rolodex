import { useEffect, useState } from "react";
import "./App.css";

import CardList from "./components/card-lists/card-list.component";

import SearchTerms from "./components/search-terms/search-terms.component";

const App = () => {

  const [terms, setTerms] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(terms);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, terms]);

  const filterMonsters = (event) => {
    setTerms(event.target.value.toLocaleLowerCase());
  };



  return (
    <div className="App">
      <h1 className="app_title">MONSTER ROLODEX</h1>
      <SearchTerms
        filterMonsters={filterMonsters}
        placeholder="Search Monsters"
        className="monsters-search-box"
        type="Search"
        value={terms}
      />
      

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
