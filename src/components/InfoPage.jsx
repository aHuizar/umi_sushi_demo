//class is responsible for displaying info page on takeout page when user clicks info badge
import React from "react";
import RedirectNav from "./RedirectNav";

function getOpeningHours() {
  return (
    <table className="table">
      <thead>
        <tr>
          <td colSpan="2">
            <svg
              className="bi bi-clock"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
              />
              <path
                fillRule="evenodd"
                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <strong>Opening Hours</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday - Thursday, Sunday</td>
          <td>
            <strong>11:30 AM - 8:30 PM</strong>
          </td>
        </tr>
        <tr>
          <td>Friday - Saturday</td>
          <td>
            <strong>11:30 AM - 9:30 PM</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function getPickupHours() {
  return (
    <table className="table">
      <thead>
        <tr>
          <td colSpan="2">
            <svg
              className="bi bi-handbag-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2z" />
              <path d="M3.405 5a1.5 1.5 0 0 0-1.493 1.35L1 13.252A2.5 2.5 0 0 0 3.488 16h9.024A2.5 2.5 0 0 0 15 13.251l-.912-6.9A1.5 1.5 0 0 0 12.595 5H11v2.5a.5.5 0 1 1-1 0V5H6v2.5a.5.5 0 0 1-1 0V5H3.405z" />
            </svg>
            <strong>Pickup</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday - Thursday, Sunday</td>
          <td>
            <strong>11:30 AM - 8:15 PM</strong>
          </td>
        </tr>
        <tr>
          <td>Friday - Saturday</td>
          <td>
            <strong>11:30 AM - 9:15 PM</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function getPaymentMethods() {
  return (
    <table style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          <td>
            <svg
              className="bi bi-wallet2"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z" />
              <path
                fillRule="evenodd"
                d="M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"
              />
            </svg>
            <strong>Payment Methods</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <svg
              className="bi bi-dot"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
              />
            </svg>
            Cash
          </td>
        </tr>
        <tr>
          <td>
            <svg
              className="bi bi-dot"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
              />
            </svg>
            Card
            <i
              className="fa fa-cc-visa"
              style={{
                color: "navy",
                marginRight: "0.5vw",
                marginLeft: "0.3vw",
              }}
            ></i>
            <i
              className="fa fa-cc-amex"
              style={{ color: "blue", marginRight: "0.5vw" }}
            ></i>
            <i
              className="fa fa-cc-mastercard"
              style={{ color: "red", marginRight: "0.5vw" }}
            ></i>
            <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function getPhoneNumber() {
  return (
    <table style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          <td>
            <strong>Phone Number</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>+16615648020</td>
        </tr>
      </tbody>
    </table>
  );
}

const InfoPage = (props) => {
  return (
    <div className="mb-5 bg-light">
      <hr style={{ backgroundColor: "darkorange", height: "3px" }}></hr>
      <RedirectNav handleRedirect={props.handleRedirect} header="Info" />
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.2927215004556!2d-119.12875338530691!3d35.323551857113316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea4147f7a40a8d%3A0x7303368e31c8249a!2sUmi%20Sushi%20%26%20Sake!5e0!3m2!1sen!2sus!4v1589938910623!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: "1vw solid black", pointerEvents: "none" }}
          allowFullScreen={false}
          aria-hidden={false}
          tabIndex="0"
          title="Our Location"
        ></iframe>
        <table className="table">
          <tbody>
            <tr>
              <td>{getOpeningHours()}</td>
              <td>{getPickupHours()}</td>
            </tr>
            <tr>
              <td>{getPaymentMethods()}</td>
              <td>{getPhoneNumber()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoPage;
