import React from "react";
import Button from "@material-ui/core/Button";

class Pagination extends React.Component {
  // When page limit is reached
        componentDidMount() {
                const { incrementPage, decrementPage, currentPage, totalPages } = this.props;
                window.onkeydown = function(e) {
                        switch(e.keyCode) {
                                case 39: 
                                        if ( currentPage === 6 ) {
                                                return null
                                        } else {
                                                return incrementPage();
                                        }
                                case 37:
                                        return decrementPage();
                        }};
        }

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
