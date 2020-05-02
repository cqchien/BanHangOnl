import React, { Component } from 'react';
import swal from 'sweetalert';

class SmartPhone extends Component {
  handleInform = (props) => {
    swal({
      title: "Do you want to buy this product?",
      text: `${props.phone.name}: ${props.phone.price} VND`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.addToCart(props.phone)
        
        swal("Congratulation! You have bought the product", {
          icon: "success",
        });
      } else {
        swal("Oops! Thank you. See you next time");
      }
    });
  }

  render() {
    let {name, desc, img, price } = this.props.phone
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 pb-3 pt-5">
          <div className="container"> 
            <div className="card bg-light" style={{width: 290}}>
              <img className="card-img-top" src={img} alt="Card" style={{maxWidth: '100%', height: 250}} />
              <div className="card-body text-center">
              <h4 className="card-title text-center">{name}</h4>
              <p className="card-text">{price} VND</p>
              <p className="card-text">{desc}</p>
              <button type="button" className="btn btn-primary btn-md mr-3" data-toggle="modal" data-target="#modalId" onClick={() => this.props.renderModal(this.props.phone)}>
                Details
              </button>
                <button className="btn btn-danger" onClick = {this.handleInform.bind(this, this.props)} style={{color: "white"}}> Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SmartPhone;