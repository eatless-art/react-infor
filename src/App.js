import React from "react";
import Main from "./compenontes/Main";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
