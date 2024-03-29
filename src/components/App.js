import React, { Component } from "react";
import "./App.scss";
import Header from "./header/Header";
import Results from "./main-content/Results";

let flag = true;

class App extends Component {
  state = {
    flag: true,
    searchInputValue: "",
    responseArr: ""
  };

  handleResponseArray = x => {
    if (flag === true) {
      flag = false;
      this.setState({
        responseArr: x
      });
    }
  };
  // Function for set state from input in header
  hanldeInputValue = e => {
    if (e.key === "Enter") {
      this.setState({
        searchInputValue: e.target.value
      });
    }
  };

  // Function for set state from input in header throw clicking on magniffying glass
  handleSendInputValue = () => {
    this.setState({
      searchInputValue: document.querySelector(".search-input__input").value,
      flag: true
    });
  };

  render() {
    return (
      <>
        <Header
          searchValue={this.hanldeInputValue}
          sendInputValue={this.handleSendInputValue}
        />
        <Results
          searchInputValue={this.state.searchInputValue}
          stateFlag={this.state.flag}
        />
      </>
    );
  }
}

export default App;
