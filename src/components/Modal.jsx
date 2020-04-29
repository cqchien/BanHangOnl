import React, { Component } from 'react';

class Modal extends Component {
  render() {
    let {name, desc, price, id, img } = this.props
    return (
      <div>
        <div className="modal fade" id={`sp_${id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Information Detail</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body" >
                <div className="container">
                  <div className= "row">
                      <div className="col-md-5">
                        <h6>{name}</h6>
                        <img src={`${img}`} alt="Smart Photo" style={{width: 300, height: 300}}/>
                      </div>
                      <div className="col-md-7">
                        <h6>Specifications</h6>
                        <table class="table">
                          <tbody>
                            <tr>
                              <td scope="row" style = {{fontWeight: "bold"}}>Price</td>
                              <td>{price}</td>
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