import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Paths from "../routes";


const App = () => {
  return (
    <Router>
      <Paths/>
    </Router>
  );
}

export default App;
