import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteContact = (props) => {
  const { state } = useLocation();
  console.log(state);
  let navigate = useNavigate();
  //   const { id, name, email } = props.contact;
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Are you sure you want to delete</h2>
      <button
        className="ui button blue center"
        onClick={() =>
          navigate("/", {
            state: {
              msg: "yes",
              id: state.contact.id,
            },
          })
        }
      >
        Yes
      </button>
      <button
        className="ui button blue center"
        onClick={() =>
          navigate("/", {
            state: {
              msg: "no",
            },
          })
        }
      >
        No
      </button>
    </div>
  );
};

export default DeleteContact;
