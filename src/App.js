import React from "react";
import { connect } from "react-redux";
import { CARDS_FETCH } from "./redux/actionTypes";
import {
  incrementPage,
  decrementPage,
  cardsFetchMore
} from "./redux/actions/index";
import CardGrid from "./containers/CardGrid";
import Pagination from "./containers/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";

// REDUX: Mapping action creators to component as props
const mapDispatchToProps = dispatch => {
  return {
    // initial fetch of 4 pages
    initFetch: () => dispatch({ type: CARDS_FETCH }),
    // additional fetch requests
    fetchMore: () => dispatch(cardsFetchMore()),
    // pagination actions
    incrementPage: () => dispatch(incrementPage()),
    decrementPage: () => dispatch(decrementPage())
  };
};

//  REDUX: Mapping store to component as props
const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    loadingMore: state.loadingMore,
    error: state.error,
    currentPage: state.currentPage,
    totalPages: state.totalPages
  };
};

class App extends React.Component {
  // COMPONENT LIFE-CYCLE: Calling 'CARDS_FETCH' action as soon as component mounts
  componentDidMount() {
    const { initFetch } = this.props;
    initFetch();
  }

  render() {
    const {
      data,
      loading,
      loadingMore,
      currentPage,
      totalPages,
      incrementPage,
      decrementPage
    } = this.props;

    // pagination method
    const postPerPage = 12;
    const indexLastCard = currentPage * postPerPage;
    const indexFirstCard = indexLastCard - postPerPage;
    const currentCards = data.slice(indexFirstCard, indexLastCard);
    const ticketView = currentCards.map(CardGrid);

    return (
      <div className="App">
        {!loading && !loadingMore ? (
          <div className="ticketContainer">{ticketView}</div>
        ) : (
          <div className="loadingContainer">
            <div className="spinnerContainer">
              <CircularProgress color="secondary" size="100px" />
            </div>
            <div className="loadingTextContainer">
              <span className="loadingText">Loading Tickets</span>
            </div>
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
