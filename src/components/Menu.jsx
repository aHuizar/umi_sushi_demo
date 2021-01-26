import React, { Component } from "react";
import ImageBanner from "./ImageBanner";
import MenuSection from "./MenuSection";
import MenuData from "./MenuData.json";
import { Tabs, Tab } from "react-bootstrap";
//menu made up of menu items
//menu items also make up sections of the menu
//This is the source of truth, aka all data for menu items
//live here and are just passed down to children components
// menuItem -> menuSection -> menu -> app
// isShopping prop determines whether or not the client
// is shopping for food off the menu
// also need prop to add components to cart
class Menu extends Component {
  state = { key: "1" };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  setKey = (key) => {
    this.setState({ key });
  };
  //const [key, setKey] = useState('home');
  render() {
    const { isShopping, onItemClick } = this.props;
    return (
      <div className="mb-5">
        {!isShopping && ( //if not shopping, display image banner
          <div>
            <ImageBanner header="Our Menu" text=""></ImageBanner>
            <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
          </div>
        )}
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(k) => this.setKey(k)}
        >
          <Tab eventKey={1} title="Drinks">
            <table className="table bg-active">
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
                      menuItems={MenuData.softDrinks}
                      sectionName={"SOFT DRINKS"}
                      isShopping={isShopping}
                      onItemClick={onItemClick}
                    ></MenuSection>
                    <MenuSection
                      menuItems={MenuData.teaAndWater}
                      sectionName={"TEA & WATER"}
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
                      menuItems={MenuData.japaneseDrinks}
                      sectionName={"JAPANESE SOFT DRINKS"}
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
                      menuItems={MenuData.juice}
                      sectionName={"JUICE"}
                      isShopping={isShopping}
                      onItemClick={onItemClick}
                    ></MenuSection>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey={2} title="Appetizers">
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
          </Tab>
          <Tab eventKey={3} title="Soups and Salads">
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
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Menu;
