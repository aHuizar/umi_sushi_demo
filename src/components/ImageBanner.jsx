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
    return (
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light img-container">
        <img
          src={sushiImg}
          style={{ width: "90%", height: "auto" }}
          alt="Our sushi"
        />
        <div
          className="center-img translucent text-white"
          style={{ width: "85%" }}
        >
          <div className="display-4 font-weight-bold">{this.state.header}</div>
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
