import React from "react";

import "./App.css";
// * Import Components
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Promotion from "./components/Promotion";
import SmartPhone from "./components/SmartPhone";

function App() {
  return <div className="App">
    <Nav />
    <Carousel />

    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <SmartPhone />
      </div>
    </section>

    <Promotion />
  </div>;
}

export default App;
