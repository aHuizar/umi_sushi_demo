import React, { Component } from "react";
import ImageBanner from "./ImageBanner";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    msg: "",
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { name, email, msg } = this.state;

    if (name.length !== 0 && email.length !== 0 && msg.length !== 0) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };
      fetch("/api/contact", options).then((response) => {
        if (response.ok) {
          alert("We will contact you shortly!");
        } else {
          alert("There was an issue! Please try again later.");
        }
      });
    } else {
      alert("Please fill out missing fields");
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { name, email, msg } = this.state;
    return (
      <div className="mb-6">
        <ImageBanner header="Contact Umi Sushi & Sake" text="" />
        <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
        <form
          onSubmit={this.submitHandler}
          id="contact-form"
          className="container"
        >
          <h2>Contact Umi Sushi & Sake</h2>
          <div>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              value="Umi Sushi & Sake"
            ></input>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "center",
              width: "100%",
            }}
          >
            <svg
              className="bi bi-house"
              style={{ transform: "translateY(16%)" }}
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              value="3300 BUENA VISTA RD STEC1, BAKERSFIELD, CA, 93311, United States"
            ></input>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "center",
              width: "100%",
            }}
          >
            <svg
              className="bi bi-phone"
              style={{ transform: "translateY(18%)" }}
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M8 14a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              value="+1 661-564-8020"
            ></input>
          </div>

          <div className="form-group table-primary">
            <label>
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              placeholder="First Last"
              value={name}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="form-group table-primary">
            <label>
              <strong>Email Address</strong>
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="name@example.com"
              name="email"
              value={email}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="form-group table-primary">
            <label>
              <strong>Message</strong>
            </label>
            <textarea
              className="form-control"
              id="inputMsg"
              placeholder="Your Message"
              rows="3"
              name="msg"
              value={msg}
              onChange={this.changeHandler}
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default Contact;
