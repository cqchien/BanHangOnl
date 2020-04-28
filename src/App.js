import React, { Component } from "react";

import "./App.css";
// * Import Components
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Promotion from "./components/Promotion";
import SmartPhone from "./components/SmartPhone";

//* Import Data
import SmartPhoneData from "./data/SmartPhone";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spInfo: SmartPhoneData,
    };
  }
  render() {
    let smartphone = this.state.spInfo.map((phone, index) => {
      return (
        <SmartPhone
          id={phone.id}
          name={phone.name}
          desc={phone.desc}
          img={phone.img}
          price={phone.price}
          key={index}
        />
      );
    });
    return (
      <div className="App">
        <Nav />
        <Carousel />

        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">{smartphone}</div>
        </section>
        <Promotion />
      </div>
    );
  }
}

export default App;
