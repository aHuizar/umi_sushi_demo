import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <footer className="footer bg-dark text-center text-info">
          <div className="container-fluid">
            <div className="row justify-content-around ">
              <Link
                className="col-4 text-center text-light"
                to="/umi_sushi_demo/menu"
              >
                <strong>Menu</strong>
              </Link>
              <Link
                className="col-4 text-center text-light"
                to="/umi_sushi_demo/contact"
              >
                <strong>Contact Us</strong>
              </Link>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
