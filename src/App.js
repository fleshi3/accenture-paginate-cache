/* --- IMPORT: React & Redux --- */
import React from "react";
import { connect } from "react-redux";
/* --- IMPORT: PropTypes library --- */
import PropTypes from "prop-types";
/* --- IMPORT: Redux Actions --- */
import { CARDS_FETCH } from "./redux/actionTypes";
import {
  incrementPage,
  decrementPage,
  cardsFetchMore,
  onInspectCard,
  onDismountCard
} from "./redux/actions/index";
/* --- IMPORT: Components and Containers --- */
import CardGrid from "./containers/CardGrid";
import CardDrawer from "./containers/CardDrawer";
import Pagination from "./containers/Pagination";
import Loading from "./components/Loading";
/* --- IMPORT: Stylesheets --- */
import "./App.css";

/* --- REDUX: Mapping actions to props --- */
const mapDispatchToProps = dispatch => {
  return {
    // initial fetch
    initFetch: () => dispatch({ type: CARDS_FETCH }),
    // additional fetch requests
    fetchMore: () => dispatch(cardsFetchMore()),
    // pagination actions
    incrementPage: () => dispatch(incrementPage()),
    decrementPage: () => dispatch(decrementPage()),
    // inspect card actions
    onInspectCard: cardData => dispatch(onInspectCard(cardData)),
    onDismountCard: () => dispatch(onDismountCard())
  };
};

/* --- REDUX: Mapping state to props --- */
const mapStateToProps = state => {
  return {
    data: state.cards.data,
    inspecting: state.inspect.inspecting,
    inspectCard: state.inspect.inspectCard,
    loading: state.cards.loading,
    loadingMore: state.cards.loadingMore,
    error: state.cards.error,
    currentPage: state.pages.currentPage,
    totalPages: state.cards.totalPages,
    endOfCache: state.cards.endOfCache
  };
};

/* --- REACT: App Component --- */
class App extends React.Component {
  componentDidMount() {
    const { initFetch } = this.props;
    initFetch(); // CARDS_FETCH action is called when component mounts
  }

  render() {
    /* --- FORMATTING: Destructuring Statements --- */
    const {
      data,
      loading,
      loadingMore,
      currentPage,
      totalPages,
      incrementPage,
      decrementPage,
      inspecting,
      inspectCard,
      onInspectCard,
      onDismountCard,
      endOfCache
    } = this.props;

    /* --- METHOD: Pagination --- */
    const postPerPage = 12;
    const indexLastCard = currentPage * postPerPage;
    const indexFirstCard = indexLastCard - postPerPage;
    const currentCards = data.slice(indexFirstCard, indexLastCard);

    /* --- METHOD: Mapping through paginated items --- */
    const ticketView = currentCards.map(cardData => {
      return (
        <CardGrid
          cardData={cardData}
          onInspectCard={onInspectCard}
          key={cardData.coreData.id}
        />
      );
    });

    /* --- FORMATTING: Props --- */
    /* --- NOTE:Background of CardGrid is changed to #eeeeee when currentPage === endOfCache to hide loading spinner --- */
    const ticketContainerStyle = {
      background: currentPage === endOfCache ? "#eeeeee" : "transparent"
    };
    const cardDrawerProps = { inspectCard, inspecting, onDismountCard };
    const paginationProps = {
      currentPage,
      totalPages,
      endOfCache,
      incrementPage,
      decrementPage
    };

    /* --- JSX --- */
    return (
      <div className="App">
        {!loading ? (
          <div className="ticketContainer" style={ticketContainerStyle}>
            {ticketView}
          </div>
        ) : (
          <Loading />
        )}
        {loadingMore ? <Loading /> : null}
        <CardDrawer {...cardDrawerProps} />
        <Pagination {...paginationProps} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  loadingMore: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func,
  inspecting: PropTypes.bool,
  inspectCard: PropTypes.object,
  onInspectCard: PropTypes.func,
  onDismountCard: PropTypes.func,
  endOfCache: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
