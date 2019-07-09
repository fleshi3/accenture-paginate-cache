import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class Pagination extends React.Component {
  render() {
    const {
      currentPage,
      totalPages,
      endOfCache,
      incrementPage,
      decrementPage
    } = this.props;
    return (
      <div className="Pagination">
        <Button onClick={decrementPage} disabled={currentPage === 1}>
          BACK
        </Button>
        <div className="currentPage">
          {currentPage} / {totalPages || <CircularProgress color="secondary" size="15px"/>}
        </div>
        <Button
          onClick={incrementPage}
          disabled={
            currentPage === endOfCache + 6 || currentPage === totalPages
          }
        >
          NEXT
        </Button>
      </div>
    );
  }
}

export default Pagination;
