import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LeftNav from "./LeftNav";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <LeftNav />
      <Main />
    </div>
  );
}

export default App;
