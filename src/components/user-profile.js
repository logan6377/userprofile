import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route // for later
} from "react-router-dom";
import Personal from "./user-personal";
import Orders from "./user-orders";

import { Container, Row, Col } from "reactstrap";
import "../css/user-profile.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: {},
      errors: {},
      personal: {}
    };
  }
  componentDidMount() {
    console.log("aa");
  }
  render() {
    const { user } = this.props;
    //console.log(user);
    if (user != undefined) {
      return (
        <Router>
          <Container>
            <Row className="profile">
              <Col md="3">
                <div className="profile-sidebar">
                  <div className="profile-userpic">
                    <img src={user.picture} className="img-responsive" alt="" />
                  </div>
                  <div className="profile-usertitle">
                    <div className="profile-usertitle-name">
                      {user.name.first} {user.name.last}
                    </div>
                    <div className="profile-usertitle-job">{user.email}</div>
                    <div className="profile-usertitle-job">{user.phone}</div>
                  </div>
                  <div className="profile-usermenu">
                    <ul className="nav">
                      <li>
                        <NavLink to="/personal" activeClassName="is-active">
                          <i className="glyphicon glyphicon-user" />
                          Personal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/my-orders" activeClassName="is-active">
                          <i className="glyphicon glyphicon-user" />
                          My Orders
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="9 test">
                <div className="profile-content">
                  <Route
                    path="/(personal|)/"
                    render={() => <Personal user={user} />}
                  />
                  <Route
                    exact
                    path="/my-orders"
                    render={() => <Orders order={user.orders} />}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Router>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

//export default UserProfile;

const mapStateToProps = state => {
  //const { user } = state;
  console.log(state);
  return { user: state };
};

export default connect(mapStateToProps)(UserProfile);
