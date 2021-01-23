import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <footer className="footer bg-dark text-center text-info">
          <div className="container-fluid">
            <div className="row justify-content-around ">
              <a
                className="col-4 text-center text-light"
                href="/umi_sushi_demo/menu"
              >
                <strong>Menu</strong>
              </a>
              <a
                className="col-4 text-center text-light"
                href="/umi_sushi_demo/contact"
              >
                <strong>Contact Us</strong>
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
