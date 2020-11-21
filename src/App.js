import React from "react";
import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    firstOp: 0,
    secondOp: 0,
  };

  // handleSub(key) {
  //   this.setState((prevState) => {
  //     const newCounters = prevState.counters.map((c) => {
  //       if (c.key === key && c.sum !== 0) return { ...c, sum: c.sum - 1 };
  //       else return { ...c };
  //     });
  //     return { counters: newCounters };
  //   });
  // }

  render() {
    return (
      <div className="App">
        <div className="screen">0</div>
        <div className="Buttons">
          <div className="row">
            <div id="c" className="op">
              AC
            </div>
            <div id="c" className="op">
              +/-
            </div>
            <div id="c" className="op">
              %
            </div>
            <div className="op">\</div>
          </div>
          <div className="row">
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="op">X</div>
          </div>
          <div className="row">
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="op">-</div>
          </div>
          <div className="row">
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="op">+</div>
          </div>
          <div className="row">
            <div id="zero" className="num">
              0
            </div>
            <div className="num">.</div>
            <div className="op">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
