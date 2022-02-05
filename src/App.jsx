import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
      <Router>
        <div>
          <Home>Home</Home>
        </div>
      </Router>
  );
}

export default App;
