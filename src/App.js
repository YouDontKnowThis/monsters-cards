import React, { Component } from "react";
import List from "./components/List/List";
import SearchBox from "./components/Search-box/Search-box";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      inputValue: "",
    };
  }

  filterMonstersHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, inputValue } = this.state;
    const filtredCards = monsters.filter((card) =>
      card.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Cards</h1>
        <SearchBox change={this.filterMonstersHandler} />
        <List monsters={filtredCards} />
      </div>
    );
  }
}

export default App;
