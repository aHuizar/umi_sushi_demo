import React, { Component } from "react";
import RedirectNav from "./RedirectNav";
class Cart extends Component {
  state = {
    taxRate: 1.0825,
  };
  calculateTotal() {
    let total = 0;
    this.props.cartItems.map((item) => (total += item.price * item.quantity));
    return total * this.state.taxRate;
  }
  getTableFooter() {
    return (
      <tr>
        <td>
          <span style={{ opacity: "0.7" }}>
            Sub-total<br></br>
            Sales Tax({((this.state.taxRate - 1) * 100).toFixed(2)}%)
            <br></br>
          </span>
          <strong>Total</strong>
        </td>
        <td name="place holder"></td>
        <td>
          <span style={{ opacity: "0.7" }}>
            {(this.calculateTotal() / this.state.taxRate).toFixed(2)}
            <br></br>
            {(
              this.calculateTotal() -
              this.calculateTotal() / this.state.taxRate
            ).toFixed(2)}
            <br></br>
          </span>
          <strong>{this.calculateTotal().toFixed(2)}</strong>
        </td>
      </tr>
    );
  }
  mapCartItems() {
    return this.props.cartItems.map((item) => (
      <tr key={item.id}>
        <td>{item.quantity}x</td>
        <td>
          {item.name}
          <br></br>
          {item.specialIns.length !== 0 && (
            <sup style={{ opacity: "0.7" }}>{item.specialIns}</sup>
          )}
        </td>
        <td>
          ${(item.quantity * item.price).toFixed(2)}
          <svg
            className="bi bi-x-square"
            style={{ cursor: "pointer" }}
            onClick={() => this.props.handleDeleteItem(item)}
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
              fillRule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </td>
      </tr>
    ));
  }
  getCartItems() {
    //get items in cart(if any) and return html representation
    if (this.props.cartItems.length === 0) {
      return (
        <strong>
          <h2>Cart is Empty</h2>
        </strong>
      );
    } else {
      return (
        <table className="table bg-active">
          <thead>
            <tr className="table-primary">
              <td>
                <strong>Qty.</strong>
              </td>
              <td>
                <strong>Item</strong>
              </td>
              <td>
                <strong>Price</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.mapCartItems()}
            {this.getTableFooter()}
            <tr>
              <td colSpan="3">
                <button className="btn btn-primary">Proceed To Checkout</button>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
  render() {
    return (
      <div className="mb-5" style={{ height: "70vh" }}>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <RedirectNav handleRedirect={this.props.handleRedirect} header="Cart" />
        <div
          className="container bg-light"
          style={{ height: "85%", overflowY: "auto" }}
        >
          {this.getCartItems()}
        </div>
      </div>
    );
  }
}

export default Cart;
