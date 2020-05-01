import React, { Component } from "react";
import "./App.css";

// * Import Components
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Promotion from "./components/Promotion";
import SmartPhone from "./components/SmartPhone";
import Modal from "./components/Modal";

//* Import Data
import SmartPhoneData from "./data/SmartPhone";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spInfo: {},
    };
  }

smartphone= () => {
  return SmartPhoneData.map((phone, index) => {
    return (
      <SmartPhone phone={phone} renderModal = {this.renderModal}/>
    );
  });
}

renderModal = (data) => {
  this.setState({
    spInfo: data
  })
}


  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel />

        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">{this.smartphone()}</div>
        </section>
        <Modal phone = {this.state.spInfo}/>
        <Promotion />
      </div>
    );
  }
}

export default App;
