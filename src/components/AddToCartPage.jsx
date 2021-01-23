import React, { Component } from "react";
import RedirectNav from "./RedirectNav";

class AddToCartPage extends Component {
  constructor(props) {
    super(props);
    if (props.item.hasOwnProperty("quantity")) {
      this.state = {
        specialIns: props.item.specialIns,
        quantity: props.item.quantity,
      };
    } else {
      this.state = { specialIns: "", quantity: 1 };
    }
  }
  changeHandler = (e) => {
    if (e.target.name === "quantity" && e.target.value < 0) {
      alert("Please enter a valid number");
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  render() {
    const { specialIns, quantity } = this.state;
    return (
      <div className="mb-5 bg-light" style={{ height: "70vh" }}>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <RedirectNav
          handleRedirect={this.props.handleRedirect}
          header={this.props.item.name}
        />
        <div className="container bg-light">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleAddToCart(this.state);
            }}
          >
            <div className="form-group table-primary">
              <label>
                <strong>Special Instructions</strong>
              </label>
              <br></br>
              <textarea
                name="specialIns"
                rows="2"
                className="form-control"
                id="inputInstructions"
                placeholder="Example: No pepper/sugar/salt"
                value={specialIns}
                onChange={this.changeHandler}
              ></textarea>
            </div>
            <div className="form-group table-primary">
              <label>
                <strong>Quantity</strong>
              </label>
              <br></br>
              <input
                min="1"
                type="number"
                name="quantity"
                className="form-control"
                id="inputQuantity"
                placeholder="Enter a whole number greater than or equal to 1"
                value={quantity}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Add To Cart"
              ></input>
              <br></br>
              <span>
                <strong>
                  Price: ${(quantity * this.props.item.price).toFixed(2)}
                </strong>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddToCartPage;
