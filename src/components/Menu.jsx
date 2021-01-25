import React, { Component } from "react";
import ImageBanner from "./ImageBanner";
import MenuSection from "./MenuSection";
import MenuData from "./MenuData.json";
//menu made up of menu items
//menu items also make up sections of the menu
//This is the source of truth, aka all data for menu items
//live here and are just passed down to children components
// menuItem -> menuSection -> menu -> app
// isShopping prop determines whether or not the client
// is shopping for food off the menu
// also need prop to add components to cart
class Menu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { isShopping, onItemClick } = this.props;
    const scrollStyle = isShopping
      ? { width: "100%", height: "65vh", overflowY: "scroll" }
      : { width: "100%" };
    return (
      <div className="mb-5">
        {!isShopping && ( //if not shopping, display image banner
          <div>
            <ImageBanner header="Our Menu" text=""></ImageBanner>
            <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
          </div>
        )}
        <div style={scrollStyle} className="container">
          <table className="table bg-active" style={{ margin: "0 auto" }}>
            <thead>
              <tr className="table-primary">
                <td colSpan={"2"}>
                  <strong>DRINKS</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderRight: "3px solid darkorange" }}>
                  <MenuSection
                    menuItems={MenuData.bottledBeer}
                    sectionName={"BOTTLED BEER"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                  <MenuSection
                    menuItems={MenuData.craftSake}
                    sectionName={"CRAFT SAKE"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                  <MenuSection
                    menuItems={MenuData.sakeAndWine}
                    sectionName={"UMI SAKE & WINE"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>

                <td>
                  <MenuSection
                    menuItems={MenuData.craftBeer}
                    sectionName={"CRAFT BEER"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                  <MenuSection
                    menuItems={MenuData.craftWine}
                    sectionName={"CRAFT WINE"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
              </tr>
              <tr>
                <td style={{ borderRight: "3px solid darkorange" }}>
                  <MenuSection
                    menuItems={MenuData.softDrinks}
                    sectionName={"SOFT DRINKS"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                  <MenuSection
                    menuItems={MenuData.japaneseDrinks}
                    sectionName={"JAPANESE SOFT DRINKS"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
                <td>
                  <MenuSection
                    menuItems={MenuData.teaAndWater}
                    sectionName={"TEA & WATER"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                  <MenuSection
                    menuItems={MenuData.juice}
                    sectionName={"JUICE"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table bg-active" style={{ margin: "0 auto" }}>
            <thead>
              <tr className="table-primary">
                <td colSpan={"2"}>
                  <strong>APPETIZERS AND SIDES</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderRight: "3px solid darkorange" }}>
                  <MenuSection
                    menuItems={MenuData.starters}
                    sectionName={"STARTERS"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
                <td>
                  <MenuSection
                    menuItems={MenuData.sides}
                    sectionName={"SIDES"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table bg-active" style={{ margin: "0 auto" }}>
            <thead>
              <tr className="table-primary">
                <td colSpan={"2"}>
                  <strong>SOUPS AND SALADS</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderRight: "3px solid darkorange" }}>
                  <MenuSection
                    menuItems={MenuData.salads}
                    sectionName={"SALADS"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
                <td>
                  <MenuSection
                    menuItems={MenuData.soups.soups}
                    sectionName={"SOUPS"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                  <MenuSection
                    menuItems={MenuData.soups.additions}
                    sectionName={"SOUP ADD ONS"}
                    isShopping={isShopping}
                    onItemClick={onItemClick}
                  ></MenuSection>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Menu;
