import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    counters: [
      { key: "1", sum: 0 },
      { key: "2", sum: 0 },
      { key: "3", sum: 0 },
      { key: "4", sum: 0 },
    ],
  };

  handleRefresh() {
    this.setState((prevState) => {
      const newCounters = prevState.counters.map((c) => {
        return { ...c, sum: 0 };
      });
      return { counters: newCounters };
    });
  }

  handleAdd(key) {
    this.setState((prevState) => {
      const newCounters = prevState.counters.map((c) => {
        if (c.key === key) return { ...c, sum: c.sum + 1 };
        else return { ...c };
      });
      return { counters: newCounters };
    });
  }

  handleSub(key) {
    this.setState((prevState) => {
      const newCounters = prevState.counters.map((c) => {
        if (c.key === key && c.sum !== 0) return { ...c, sum: c.sum - 1 };
        else return { ...c };
      });
      return { counters: newCounters };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="total">
            {this.state.counters.reduce((acc, curr) => {
              if (curr.sum > 0) return acc + 1;
              return acc;
            }, 0)}
          </div>
          <div>Items</div>
        </div>

        <Counter
          c={this.state.counters}
          refresh={this.handleRefresh.bind(this)}
          add={this.handleAdd.bind(this)}
          sub={this.handleSub.bind(this)}
        />
      </div>
    );
  }
}

export default App;
