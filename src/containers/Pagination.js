import React from "react";
import Button from "@material-ui/core/Button";

class Pagination extends React.Component {
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
        <Button onClick={incrementPage}>NEXT</Button>
      </div>
    );
  }
}

export default Pagination;
