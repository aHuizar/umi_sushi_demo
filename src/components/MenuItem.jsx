//A menu item has a name, a price, and possibly a description
//Each menu item will be return as part of a table
import React, { Component } from "react";

class MenuItem extends Component {
  configMenuItem() {
    const { name, price, desc, isShopping, onItemClick } = this.props;
    const item = { name: name, price: price, desc: desc };
    const base = (
      <td>
        {name}
        <span>
          <br></br>
          <sup>{desc}</sup>
        </span>
      </td>
    );
    if (isShopping) {
      return (
        <tr
          key={name}
          style={{ cursor: "pointer" }}
          onClick={() => onItemClick(item)}
        >
          {base}
          <td>{price}</td>
        </tr>
      );
    } else {
      return (
        <tr key={name}>
          {base}
          <td>{price}</td>
        </tr>
      );
    }
  }
  render() {
    return this.configMenuItem();
  }
}

export default MenuItem;
