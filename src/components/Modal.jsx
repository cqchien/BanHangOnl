import React, { Component } from 'react';

class Modal extends Component {
  render() {
    let {name, desc, price, img } = this.props.phone
    return (
      <div>
        <div className="modal fade" id="modalId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{width: "max-content "}}> 
              <div className="modal-header">
                <h5 className="modal-title">Information Detail</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className= "row">
                      <div className="col-6 text-center">
                        <h6>{name}</h6>
                        <img src={`${img}`} alt="Smart" style={{width: 200, height: 200}}/>
                      </div>
                      <div className="col-6">
                        <h6>Specifications</h6>
                        <table className="table text-left">
                          <tbody>
                            <tr>
                              <td scope="row" style = {{fontWeight: "bold"}}>Price</td>
                              <td>{price == undefined ? 0 : price.toLocaleString()}VND</td>
                            </tr>
                            <tr>
                              <td scope="row" style = {{fontWeight: "bold"}}>Description</td>
                              <td style = {{textAlign: "left"}}>{desc}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Modal;