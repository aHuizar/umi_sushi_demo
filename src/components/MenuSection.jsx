import React, { Component } from "react";
import MenuItem from "./MenuItem";

class MenuSection extends Component {
  render() {
    const { isShopping, onItemClick, sectionName } = this.props;
    const tableHtml = this.props.menuItems.map((item) => (
      <MenuItem
        name={item.name}
        price={item.price}
        desc={item.desc}
        key={item.name + item.desc}
        isShopping={isShopping}
        onItemClick={onItemClick}
      />
    ));

    return (
      <table className="table table-striped table-sm ">
        <thead>
          <tr>
            <td className="border-top border-dark">
              <strong>{sectionName}</strong>
            </td>
            <td>
              <strong>PRICE</strong>
            </td>
          </tr>
        </thead>
        <tbody>{tableHtml}</tbody>
      </table>
    );
  }
}

export default MenuSection;
//Menu section turns props
//into a table representation using menu itmes
