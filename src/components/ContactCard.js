import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  // const confirmHandler = () => {
  //   props.onDelete(id);
  // };
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="User"></img>
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      {/* <Link to={`/delete/${id}`} state={{ contact: props.contact }}> */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.onDelete(id)}
      ></i>
      {/* </Link> */}
    </div>
  );
};

export default ContactCard;
