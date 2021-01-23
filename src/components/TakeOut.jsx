import React, { Component } from "react";
import ImageBanner from "./ImageBanner";
import Menu from "./Menu";
import AddToCartPage from "./AddToCartPage";
import Cart from "./Cart";
import InfoPage from "./InfoPage";

class TakeOut extends Component {
  constructor() {
    super();
    this.state = {
      selectedItem: null,
      cartItems: [],
      nextId: 0,
      redirectToAdd: false,
      redirectToCart: false,
      redirectToInfo: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    if (sessionStorage.getItem("cart")) {
      this.setState({
        cartItems: JSON.parse(sessionStorage.getItem("cart")),
        nextId: Number(sessionStorage.getItem("nextId")),
      });
    }
  }
  handleDeleteItem = (item) => {
    const cartItems = this.state.cartItems.filter((i) => i.id !== item.id);
    this.setState({ cartItems });
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  };
  handleInfo = () => {
    console.log("info ");
    this.setState({ redirectToInfo: true });
  };
  handleCartClick = () => {
    this.setState({ redirectToCart: true });
  };
  handleAddToCart = (quantityAndIns) => {
    //handle add to cart button from addToPage
    //if item was in cart, then selectedItem is that item
    const { cartItems, selectedItem } = this.state;
    let nextId = this.state.nextId;
    selectedItem.quantity = quantityAndIns.quantity;
    selectedItem.specialIns = quantityAndIns.specialIns;
    if (!this.checkItemInCart(selectedItem)) {
      nextId += 1;
      selectedItem.id = nextId;
      cartItems.push(selectedItem);
    }
    this.setState({
      cartItems,
      nextId,
      selectedItem: null,
      redirectToAdd: false,
    });
    sessionStorage.setItem("cart", JSON.stringify(this.state.cartItems));
    sessionStorage.setItem("nextId", nextId);
  };
  handleItemClick = (item) => {
    let selectedItem;
    //check if item already in cart
    if (this.checkItemInCart(item)) {
      selectedItem = this.grabCartItem(item);
    } else {
      selectedItem = item;
    }
    this.setState({
      selectedItem,
      redirectToAdd: true,
    });
    //allows addToCart page to modify a cart item if the item selected was in the cart
  };
  handleRedirectToTakeout = () => {
    //redirect page to takeout
    this.setState({
      redirectToAdd: false,
      selectedItem: null,
      redirectToCart: false,
      redirectToInfo: false,
    });
  };
  checkItemInCart = (item) => {
    //return true if item name and desc match an item in the cart
    return (
      this.state.cartItems.filter(
        (i) => i.name === item.name && i.desc === item.desc
      ).length !== 0
    );
  };
  grabCartItem = (item) => {
    // returns the cart item with the given name and desc from item
    return this.state.cartItems.filter(
      (i) => i.name === item.name && i.desc === item.desc
    )[0];
  };

  render() {
    if (this.state.redirectToAdd) {
      const item = this.state.selectedItem;
      window.scrollTo(0, 0);
      return (
        <AddToCartPage
          item={item}
          handleRedirect={this.handleRedirectToTakeout}
          handleAddToCart={this.handleAddToCart}
        />
      );
    } else if (this.state.redirectToCart) {
      window.scrollTo(0, 0);
      return (
        <Cart
          cartItems={this.state.cartItems}
          handleRedirect={this.handleRedirectToTakeout}
          handleDeleteItem={this.handleDeleteItem}
        />
      );
    } else if (this.state.redirectToInfo) {
      window.scrollTo(0, 0);
      return <InfoPage handleRedirect={this.handleRedirectToTakeout} />;
    } else {
      return (
        <div>
          <ImageBanner text="" header="Order for Takeout" />
          <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
          <div
            className="site-header  py-1c bg-dark"
            style={{ height: "3.4em" }}
          >
            <div className="container d-flex ">
              <span
                style={{
                  color: "ghostwhite",
                  transform: "translateY(0.3em)",
                }}
              >
                <h2>Umi Sushi & Sake</h2>
              </span>
              <span
                onClick={this.handleInfo}
                className="badge badge-info"
                style={{
                  position: "absolute",
                  right: "5em",
                  cursor: "pointer",
                }}
              >
                <svg
                  className="bi bi-info-circle"
                  width="4em"
                  height="4em"
                  viewBox="0 0 16 16"
                  fill="ghostwhite"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                  <circle cx="8" cy="4.5" r="1" />
                </svg>
              </span>
              {this.state.cartItems.length > 0 && (
                <span
                  onClick={this.handleCartClick}
                  style={{
                    position: "absolute",
                    right: "1em",
                    height: "1.8em",
                    width: "1.8em",
                    backgroundColor: "darkorange",
                    borderRadius: "50%",
                    color: "ghostwhite",
                    zIndex: "3",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  {this.state.cartItems.length}
                </span>
              )}
              <span
                className="badge badge-info"
                style={{
                  position: "absolute",
                  right: "0px",
                  cursor: "pointer",
                }}
              >
                <svg
                  className="bi bi-cart"
                  onClick={this.handleCartClick}
                  width="4em"
                  height="4em"
                  viewBox="0 0 16 16"
                  fill="ghostwhite"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div name="menu-interactive">
            <Menu isShopping={true} onItemClick={this.handleItemClick} />
          </div>
        </div>
      );
    }
  }
}

export default TakeOut;
