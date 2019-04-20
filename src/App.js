import React, { Component } from "react";
import "./Style/App.css";
import DefaultLayout from "./Layout/Default";
import Home from "./Section/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DefaultLayout content={<Home />} />
      </div>
    );
  }
}

export default App;
