import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import TakeOut from "./components/TakeOut";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route
          exact
          path="/umi_sushi_demo"
          render={(props) => (
            <Home {...props} onMapClick={this.props.onMapClick} />
          )}
        />
        <Route
          exact
          path="/umi_sushi_demo/menu"
          render={(props) => <Menu {...props} isShopping={false} />}
        />
        <Route
          exact
          path="/umi_sushi_demo/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path="/umi_sushi_demo/takeout"
          render={(props) => <TakeOut {...props} />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
