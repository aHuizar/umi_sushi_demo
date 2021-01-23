import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <footer className="footer bg-dark text-center text-info">
          <div className="container-fluid">
            <div className="row justify-content-around ">
              <div className="col-4 text-center text-light">
                <strong>Menu</strong>
              </div>
              <div className="col-4 text-center text-light">
                <strong>Contact Us</strong>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
