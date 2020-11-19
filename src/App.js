import React from "react";
import "./App.css";
import Items from "./components";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Items />
      </div>
    );
  }
}

export default App;
