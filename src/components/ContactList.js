import React from "react";
// import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

const ContactList = (props) => {
  // const { state } = useLocation();
  // console.log(state);

  const deleteContactHandler = (id) => {
    console.log("deleteHAndler", id);
    props.getContactId(id);
  };

  // if (state === "yes") {
  //   deleteContactHandler(state.id);
  // }
  const renderContactList = props.contacts.map((contact, id) => {
    return (
      <ContactCard
        key={id}
        contact={contact}
        onDelete={deleteContactHandler}
      ></ContactCard>
    );
  });

  let navigate = useNavigate();
  const add = () => {
    console.log(props);
    navigate("/add");
  };
  return (
    <div className="main" style={{ marginTop: "60px" }}>
      <h2>
        Contact List
        {/* <Link to="/add"> */}
        <button
          className="ui button blue right"
          onClick={add}
          style={{ float: "right" }}
        >
          Add Contact
        </button>
        {/* </Link> */}
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
