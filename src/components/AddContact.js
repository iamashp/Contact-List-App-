import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
    console.log(this.props);
  }

  // navigate = useNavigate();

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All Fields are Mandatory");
      return;
    }
    this.props.addContactHandlerChild(this.state);
    console.log(this.state);
    this.setState({ name: "", email: "" });
    // this.props.history.push("/contact");
    this.props.history.go(-1);
    // navigate(ContactList);
  };

  render() {
    return (
      <div className="ui main" style={{ marginTop: 50 }}>
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email Id"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue" onClick={this.add}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
