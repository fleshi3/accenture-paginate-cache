/* --- IMPORT: React --- */
import React from "react";
/* --- IMPORT: PropTypes library --- */
import PropTypes from "prop-types";
/* --- IMPORT: Material UI --- */
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Pagination = props => {
  /* --- FORMATTING: Destructuring Statements --- */
  const {
    currentPage,
    totalPages,
    endOfCache,
    incrementPage,
    decrementPage
  } = props;

  /* --- FORMATTING: Props --- */
  const pageBack = { onClick: decrementPage, disabled: currentPage === 1 };
  const pageForward = {
    onClick: incrementPage,
    disabled: currentPage === endOfCache + 6 || currentPage === totalPages
  };
  const spinnerStyle = { color: "secondary", size: "15px" };

  return (
    <div className="Pagination">
      <Button {...pageBack}>BACK</Button>
      <div className="currentPage">
        {currentPage}/{totalPages || <CircularProgress {...spinnerStyle} />}
      </div>
      <Button {...pageForward}>NEXT</Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  endOfCache: PropTypes.number,
  incrementPage: PropTypes.func,
  decrementPage: PropTypes.func
};

export default Pagination;
