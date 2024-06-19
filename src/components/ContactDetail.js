import React from "react";
import user from "../images/user.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  let { state } = useLocation();
  const { name, email } = state.contact;

  console.log(state);
  return (
    <div className="main" style={{ marginTop: "60px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div
        className="center-div"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
