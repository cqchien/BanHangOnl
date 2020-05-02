import React, { Component } from 'react';

class ModalCart extends Component {
  renderCart = (props) => {
    let phones = props.phone
    return (
      phones.map((value, index) => {
        return (
          <tr key= {index}>
            <td>{index + 1}</td>
            <td>{value.name}</td>
            <td><img src={`${value.img}`} alt= "photos" width = "50px" height = "50px" /></td>
            <td>{value.price.toLocaleString()}VND</td>
            <td>
              <button className="btn btn-sm btn-outline-info mr-2" onClick= {() => props.changeQuantity(value, false)} >-</button>
              {value.quantity}
              <button className="btn btn-sm btn-outline-info ml-2" onClick= {() => props.changeQuantity(value, true)}>+</button>
            </td>
            <td>{(value.quantity*value.price).toLocaleString()} VND</td>
            <td><button className="btn btn-sm btn-danger" onClick= {() => props.removeCart(value)}>Remove</button></td>
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
              <table className="table table-responsive table-hover ">
                <thead className="thead-dark" >
                  <tr>
                    <th>Ordinal Number</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCart(this.props)}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total Items:</td>
                    <td>{
                      this.props.phone.reduce((items, phone) => {return items += phone.quantity}, 0) 
                    }</td>
                    <td colSpan="3"></td>
                    <td>Total Money:</td>
                    <td>{
                      this.props.phone.reduce((money, phone) => {return money += phone.quantity * phone.price}, 0).toLocaleString() 
                    } VND</td>
                  </tr>
                </tfoot>
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