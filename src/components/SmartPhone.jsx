import React, { Component } from 'react';

import Modal from "./Modal";

class SmartPhone extends Component {
  render() {
    let {name, desc, img, price, id } = this.props
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 pb-3 pt-5">
          <div className="container"> 
            <div className="card bg-light" style={{width: 290}}>
              <img className="card-img-top" src={img} alt="Card image" style={{maxWidth: '100%', height: 250}} />
              <div className="card-body text-center">
              <h4 className="card-title text-center">{name}</h4>
              <p className="card-text">{price}</p>
              <p className="card-text">{desc}</p>
              <button type="button" className="btn btn-primary btn-md mr-3" data-toggle="modal" data-target={`#sp_${id}`}>
                Detail
              </button>
                <a href="#" className="btn btn-danger">Cart</a>
              </div>
            </div>
          </div>
        </div>
        <Modal
          id={id} 
          name={name}
          desc={desc}
          img={img}
          price={price}
        />
      </div>
    );
  }
}

export default SmartPhone;