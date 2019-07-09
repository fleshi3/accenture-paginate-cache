/* --- IMPORT: React --- */
import React from "react";
/* --- IMPORT: Material UI --- */
import CircularProgress from "@material-ui/core/CircularProgress";

/* --- FORMATTING: Props --- */
const spinnerStyle = { color: "secondary", size: "100px" };

const Loading = () => {
  return (
    <div className="hiddenLoader">
      <div className="spinnerContainer">
        <CircularProgress {...spinnerStyle} />
      </div>
      <div className="loadingTextContainer">
        <span className="loadingText">Loading Tickets</span>
      </div>
    </div>
  );
};

export default Loading;
