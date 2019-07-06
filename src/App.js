import React from "react";
import { connect } from "react-redux";
import { CARDS_FETCH } from "./redux/actionTypes";
import "./App.css";

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    initFetch: () => dispatch({ type: CARDS_FETCH })
  };
};

class App extends React.Component {
  componentDidMount() {
    const { initFetch } = this.props;
    initFetch();
  }

  render() {
    return <div className="App">test</div>;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
