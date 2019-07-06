import React from "react";
import { connect } from "react-redux";
import { CARDS_FETCH } from "./redux/actionTypes";
import CardGrid from "./containers/CardGrid";
import "./App.css";

// REDUX: Mapping action creators to component as props
const mapDispatchToProps = dispatch => {
  return {
    // initial fetch of 4 pages
    initFetch: () => dispatch({ type: CARDS_FETCH })
  };
};

//  REDUX: Mapping store to component as props
const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};

class App extends React.Component {
  // COMPONENT LIFE-CYCLE: Calling 'CARDS_FETCH' action as soon as component mounts
  componentDidMount() {
    const { initFetch } = this.props;
    initFetch();
  }

  render() {
    const { data } = this.props;
    const ticketView = data.map(CardGrid);
    return (
      <div className="App">
        <div className="ticketContainer">{ticketView}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
