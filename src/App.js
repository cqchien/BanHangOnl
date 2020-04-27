import React from "react";

import "./App.css";
// * Import Components
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Promotion from "./components/Promotion";

function App() {
  return <div className="App">
    <Nav />
    <Carousel />
    <Promotion />
  </div>;
}

export default App;
