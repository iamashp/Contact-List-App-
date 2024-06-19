import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { uuid } from "uuidv4";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";

import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

function App() {
  // const contacts = [
  //   { id: 1, name: "John Doe", email: "johndoe@example.com" },
  //   { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
  //   { id: 3, name: "Alice Johnson", email: "alicejohnson@example.com" },
  //   { id: 4, name: "Bob Brown", email: "bobbrown@example.com" },
  //   { id: 5, name: "Emma Davis", email: "emmadavis@example.com" },
  // ];

  const [contacts, setContacts] = useState(() => {
    const retriveContacts = localStorage.getItem("test");
    return retriveContacts ? JSON.parse(retriveContacts) : [];
  });

  const addContactHandler = (contact) => {
    console.log(contact);
    // let rr = {
    //   id: contacts.length + 1,
    //   ...contact,
    // };
    // console.log(rr);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    console.log(id);
    const newContactList = contacts.filter((item) => item.id !== id);
    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem("test"));
  //   console.log(retriveContacts);
  //   if (retriveContacts) {
  //     console.log("1111");
  //     setContacts(retriveContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(contacts));
  }, [contacts]);

  console.log(hist);
  return (
    <div className="ui container">
      <Router>
        <Header></Header>
        <Routes>
          <Route
            path="/add"
            element={
              <AddContact
                history={hist}
                addContactHandlerChild={addContactHandler}
              />
            }
          />
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/delete/:id" element={<DeleteContact />} />
        </Routes>

        {/* <AddContact addContactHandlerChild={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />  */}
      </Router>
    </div>
  );
}

export default App;
