import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "./actions";
import UserProfile from "./components/user-profile";

class App extends Component {
  constructor() {
    super();
  }
  state = {};
  componentDidMount() {
    this.props.dispatch(userActions.userData());
  }
  render() {
    return <UserProfile />;
  }
}

//export default App;

const mapStateToProps = state => {
  //const { user } = state;
  //console.log(state);
  return { state };
};

export default connect(mapStateToProps)(App);
