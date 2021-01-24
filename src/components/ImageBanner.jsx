import React, { Component } from "react";
import sushiImg from "./../images/sushi.png";

class ImageBanner extends Component {
  state = {
    header: "",
    text: "",
  };
  constructor(props) {
    super(props);
    this.state.text = this.props.text;
    this.state.header = this.props.header;
  }

  render() {
    const headerStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "ghostwhite",
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: "10%",
      minWidth: "80%",
    };
    return (
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <img
          src={sushiImg}
          style={{ width: "100%", height: "auto" }}
          alt="Our sushi"
        />
        <div className="col-md-5 p-lg-5 mx-auto my-5" style={headerStyle}>
          <h2 className="font-dynamic h1 font-weight-bold">
            {this.state.header}
          </h2>
          {this.state.text.length !== 0 && (
            <p className="font-dynamic font-weight-lighter">
              {this.state.text}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ImageBanner;
