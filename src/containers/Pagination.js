import React from "react";
import Button from "@material-ui/core/Button";

class Pagination extends React.Component {
  // When page limit is reached

  render() {
    const {
      currentPage,
      totalPages,
      incrementPage,
      decrementPage
    } = this.props;
    return (
      <div className="Pagination">
        <Button onClick={decrementPage}>BACK</Button>
        <div className="currentPage">
          {currentPage} / {totalPages}
        </div>
        <Button
          onClick={incrementPage}
          disabled={currentPage === totalPages ? true : false}
        >
          NEXT
        </Button>
      </div>
    );
  }
}

export default Pagination;
