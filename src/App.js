import React, { Component } from "react";
import "./App.css";

// * Import Components
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Promotion from "./components/Promotion";
import SmartPhone from "./components/SmartPhone";
import Modal from "./components/Modal";
import ModalCart from "./components/ModalCart";

//* Import Data
import SmartPhoneData from "./data/SmartPhone";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spInfo: {},
      cart: [
        {
          id: "1",
          name: "IPhone X",
          quantity: 2,
          img: "./img/sp_iphoneX.png",
          price: "30000000",
        },
      ],
    };
  }

  smartphone = () => {
    return SmartPhoneData.map((phone, index) => {
      return (
        <SmartPhone phone={phone} renderModal={this.renderModal} addToCart = {this.addToCart} key={index}  />
      );
    });
  };

  renderModal = (data) => {
    this.setState({
      spInfo: data,
    });
  };

  addToCart = (phone) => {
    console.log(phone)
  }

  render() {
    let sumQuantity = this.state.cart.reduce((sum, cart, index) => {
      return (sum += cart.quantity);
    }, 0);
    return (
      <div className="App">
        <Nav sum={sumQuantity} />
        <Carousel />
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">{this.smartphone()}</div>
        </section>
        <Modal phone={this.state.spInfo} />
        <ModalCart phone={this.state.cart} />
        <Promotion />
      </div>
    );
  }
}

export default App;
