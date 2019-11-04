import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Hogs from "./Hogs";
import Filter from "./Filter";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    greased: false,
    sortBy: ""
  };

  handleGreased = () => {
    this.setState({
      greased: !this.state.greased
    });
  };

  handleSelectChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  getGreasedHogs = () => {
    if (this.state.greased) {
      const greasedHogs = hogs.filter(hog => hog.greased);
      return greasedHogs;
    } else {
      return hogs;
    }
  };

  getSortedHogs = () => {
    const list = this.getGreasedHogs();
    switch (this.state.sortBy) {
      case "name":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "weight":
        const weight =
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
        return list.sort((a, b) => a[weight] - b[weight]);
      case "":
        return list;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          handleGreased={this.handleGreased}
          handleSelectChange={this.handleSelectChange}
          sortBy={this.state.sortBy}
        />
        <Hogs hogs={this.getSortedHogs()} />
      </div>
    );
  }
}

export default App;
