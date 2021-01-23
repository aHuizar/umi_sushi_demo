//class is responsible for takeout's children's navbar (redirect to takeout page)
import React from "react";

const RedirectNav = (props) => {
  return (
    <div
      className="container bg-dark"
      style={{ height: "3.4em", width: "100%" }}
    >
      <span>
        <svg
          style={{
            cursor: "pointer",
            float: "left",
            transform: "translateY(4%)",
          }}
          onClick={() => props.handleRedirect()}
          className="bi bi-arrow-left-square"
          width="3.1em"
          height="3.1em"
          viewBox="0 0 16 16"
          fill="ghostwhite"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
          <path
            fillRule="evenodd"
            d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
          />
          <path
            fillRule="evenodd"
            d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
          />
        </svg>
      </span>
      <span style={{ color: "ghostwhite", fontSize: "2em" }}>
        {props.header}
      </span>
    </div>
  );
};

export default RedirectNav;
