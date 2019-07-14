import React, { Component } from "react";

class Personal extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div className="user-personal">
        <h2>Personal Details</h2>
        <hr />
        <div className="user-personal-content">
          <div className="alter">
            <h3>About</h3>
            <p>{user.about}</p>
          </div>
          <div className="alter">
            <h3>Address</h3>
            <p>{user.address}</p>
          </div>
          <div className="alter">
            <h3>Company</h3>
            <p>{user.company}</p>
          </div>
          <div className="alter">
            <h3>Registered</h3>
            <p>{user.registered}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
