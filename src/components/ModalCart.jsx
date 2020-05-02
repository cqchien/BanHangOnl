import React, { Component } from 'react';

class ModalCart extends Component {
  renderCart = (phone) => {
    return (
      phone.map((value, index) => {
        return (
          <tr key= {index}>
            <td>{index + 1}</td>
            <td>{value.name}</td>
            <td><img src={`${value.img}`} alt= "photos" width = "50px" height = "50px" /></td>
            <td>{value.price} VND</td>
            <td>{value.quantity}</td>
            <td>{value.quantity*value.price} VND</td>
          </tr>
        )
      })
    )
  }

  render() {
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{width: "max-content "}}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <td>Ordinal Number</td>
                    <td>Name</td>
                    <td>Photo</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCart(this.props.phone)}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ModalCart;