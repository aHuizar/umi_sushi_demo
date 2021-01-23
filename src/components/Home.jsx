import React, { Component } from "react";
import chalkboardImg from "./../images/chalkboard.png";
import ImageBanner from "./ImageBanner";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const hoursOfOperationStyle = {
      color: "ghostwhite",
      position: "absolute",
      top: "30%",
      left: "20%",
      maxWidth: "25%",
      fontFamily: "Walter Turncoat",
      fontSize: "2vw",
    };
    const pickupServiceStyle = {
      color: "ghostwhite",
      position: "absolute",
      top: "30%",
      right: "20%",
      maxWidth: "25%",
      fontFamily: "Walter Turncoat",
      fontSize: "2vw",
    };
    return (
      <div className="mb-5">
        <ImageBanner
          header="About Umi Sushi & Sake"
          text="At Umi Sushi we offer meals of excellent quality and invite you to
              try our delicious food. The key to our success is simple: providing
              quality consistent food that taste great every single time. We pride
              ourselves on serving our customers delicious genuine dishes. So come
              eat delicious food. Grab a drink. But most of all, relax! We thank
              you from the bottom of our hearts for your continued support."
        ></ImageBanner>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
          <h4
            className="display-4 font-weight-normal"
            style={{ color: "ghostwhite" }}
          >
            Hours of Operation
          </h4>
          <img
            src={chalkboardImg}
            style={{ width: "80%", height: "auto" }}
            alt="Chalkboard"
          />
          <div style={hoursOfOperationStyle}>
            <h2 id="opening-hours">Opening hours</h2>
            <div className="entry">
              <div>Monday&nbsp;-&nbsp;Thursday, Sunday</div>
              <div>11:30 AM&nbsp;-&nbsp;8:30 PM</div>
            </div>
            <div className="entry">
              <div>Friday&nbsp;-&nbsp;Saturday</div>
              <div>11:30 AM&nbsp;-&nbsp;9:30 PM</div>
            </div>
          </div>
          <div style={pickupServiceStyle}>
            <h2 className="entry-title">Pickup service</h2>
            <div className="entry">
              <div>Monday&nbsp;-&nbsp;Thursday, Sunday</div>
              <div>11:30 AM&nbsp;-&nbsp;8:15 PM</div>
            </div>
            <div className="entry">
              <div>Friday&nbsp;-&nbsp;Saturday</div>
              <div>11:30 AM&nbsp;-&nbsp;9:15 PM</div>
            </div>
          </div>
        </div>
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <div
          id="location"
          className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
          style={{ textAlign: "center", width: "100%" }}
        >
          <h2
            className="display-4 font-weight-normal"
            style={{ color: "grey" }}
          >
            Our Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.2927215004556!2d-119.12875338530691!3d35.323551857113316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea4147f7a40a8d%3A0x7303368e31c8249a!2sUmi%20Sushi%20%26%20Sake!5e0!3m2!1sen!2sus!4v1589938910623!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: "1vw solid black", pointerEvents: "none" }}
            allowFullScreen={false}
            aria-hidden={false}
            tabIndex="0"
            title="Our Location"
          ></iframe>

          <button
            className="btn btn-secondary btn-lg"
            onClick={this.props.onMapClick}
            style={{
              position: "absolute",
              top: "21%",
              left: "80%",
              transform: "translate(-50%,-50%)",
            }}
          >
            Get Directions
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
